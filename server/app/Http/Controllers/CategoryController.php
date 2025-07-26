<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
// use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Cloudinary\Uploader;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::paginate(15);

        return response()->json([
            "status" => true,
            "data" => $categories
        ], 200);
    }




    public function store(Request $request)
    {



        // Check if icon file exists in the request
        $iconData = null;

        if ($request->hasFile('icon')) {
            $iconData = CloudinaryUploaderController::uploadSingle($request->file('icon'));
        }
        // Check if multiple images exist in the request
        $imagesData = [];
        $imageUrls = [];
        $imagePublicIds = [];

        if ($request->hasFile('images')) {
            // 'images' is the name attribute of your multiple file input
            $imagesData = CloudinaryUploaderController::uploadMultiple($request->file('images'));
        }
        // Separate URLs and public_ids into arrays for storage (if you want)
        $imageUrls = array_column($imagesData, 'url');
        $imagePublicIds = array_column($imagesData, 'public_id');

        $category = Category::create([
            'name' => $request->name,
            'extra_props' => $request->extra_props,
            'icon_url' => $iconData['url'] ?? null,
            'icon_public_id' => $iconData['public_id'] ?? null,
            'image_url' => $imageUrls,
            'image_public_id' => $imagePublicIds,
        ]);

        return response()->json([
            "status" => true,
            "data" => $category
        ], 201);
    }




    public function show(Request $request, string $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                "status" => false,
                "message" => "Not found"
            ], 404);
        }

        return response()->json([
            "status" => true,
            "data" => $category
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        // Start with existing values
        $iconUrl = $category->icon_url;
        $iconPublicId = $category->icon_public_id;
        $imageUrls = $category->image_url ?? [];
        $imagePublicIds = $category->image_public_id ?? [];

        // Update icon if new file uploaded
        if ($request->hasFile('icon')) {
            // Delete old icon from Cloudinary if exists
            if ($iconPublicId) {
                cloudinary()->uploadApi()->destroy($iconPublicId);
            }
            $iconData = CloudinaryUploaderController::uploadSingle($request->file('icon'));
            $iconUrl = $iconData['url'] ?? null;
            $iconPublicId = $iconData['public_id'] ?? null;
        }

        // Update images if new files uploaded (replace existing images)
        if ($request->hasFile('images')) {
            // Delete old images from Cloudinary if exist
            if (!empty($imagePublicIds)) {
                foreach ($imagePublicIds as $publicId) {
                    cloudinary()->uploadApi()->destroy($publicId);
                }
            }

            $imagesData = CloudinaryUploaderController::uploadMultiple($request->file('images'));
            $imageUrls = array_column($imagesData, 'url');
            $imagePublicIds = array_column($imagesData, 'public_id');
        }

        $category->update([
            'name' => $request->name ?? $category->name,
            'extra_props' => $request->extra_props ?? $category->extra_props,
            'icon_url' => $iconUrl,
            'icon_public_id' => $iconPublicId,
            'image_url' => $imageUrls,
            'image_public_id' => $imagePublicIds,
        ]);

        return response()->json([
            "status" => true,
            "data" => $category
        ]);
    }


   public function destroy($id)
{
    $category = Category::findOrFail($id);

    // Delete icon from Cloudinary if exists
    if ($category->icon_public_id) {
        cloudinary()->uploadApi()->destroy($category->icon_public_id);
    }

    // Delete multiple images from Cloudinary if exist
    if (!empty($category->image_public_id)) {
        foreach ($category->image_public_id as $publicId) {
            cloudinary()->uploadApi()->destroy($publicId);
        }
    }

    // Delete the category from database
    $category->delete();

    return response()->json([
        'status' => true,
        'message' => 'Category deleted successfully',
    ]);
}

}
