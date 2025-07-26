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
    $averageRating = 0;

    // Calculate average rating
    if ($request->product_id) {
        $averageRating = Rating::where('product_id', $request->product_id)->avg('rating') ?? 0;
    }

    // Initialize attribute data
    $attributeData = [];

    if ($request->color) {
        // expects input: ['white' => 120, 'red' => 200]
        $attributeData['color'] = $request->color;
    }

    if ($request->size) {
        // expects input: ['m' => 120, 'xl' => 200]
        $attributeData['size'] = $request->size;
    }

    $product = Product::create([
        'name' => $request->name,
        'regular_price' => $request->regular_price,
        'current_price' => $request->current_price,
        'discount' => $request->discount,
        'discount_type' => $request->discount_type,
        'endtime_offer' => $request->endtime_offer,
        'description' => json_encode($request->description),
        'short_description' => $request->short_description,
        'rating' => $averageRating,
        'attribute' => json_encode($attributeData),
    ]);

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
