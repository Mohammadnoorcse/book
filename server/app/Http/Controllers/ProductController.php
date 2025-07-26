<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Rating;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Initialize attribute data
        $attributeData = [];

        if ($request->color) {
            $attributeData['color'] = $request->color; // expects: ['white' => 120, ...]
        }

        if ($request->size) {
            $attributeData['size'] = $request->size; // expects: ['m' => 120, ....]
        }

        // Create product first
        $product = Product::create([
            'name' => $request->name,
            'regular_price' => $request->regular_price,
            'current_price' => $request->current_price,
            'discount' => $request->discount,
            'discount_type' => $request->discount_type,
            'endtime_offer' => $request->endtime_offer,
            'description' => json_encode($request->description),
            'short_description' => $request->short_description,
            'attribute' => json_encode($attributeData),
        ]);

        // Save rating if present
        if ($request->has('rating')) {
            Rating::create([
                'product_id' => $product->id,
                'rating' => $request->rating,
                'comment' => $request->comment,
                'extra_props' => $request->extra_props
            ]);
        }

        // Recalculate average rating
        $averageRating = Rating::where('product_id', $product->id)->avg('rating') ?? 0;

        // Update product with average rating
        $product->update(['rating' => $averageRating]);

        return response()->json([
            'status' => true,
            'message' => "Created successfully",
            'data' => $product
        ], 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id, Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id, Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, Request $request)
    {
        //
    }
}
