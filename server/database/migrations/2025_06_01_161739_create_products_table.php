<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->json('attribute')->nullable();
            $table->integer('regular_price')->nullable();
            $table->integer('current_price')->nullable();
            $table->integer('discount')->nullable();
            $table->string('discount_type')->default('0')->comment('0->percent,1->float'); 
            $table->date('endtime_offer')->nullable();
            $table->json('description')->nullable(); 
            $table->string('short_description')->nullable();
            $table->integer('rating')->nullable();
            $table->string('icon')->nullable();
            $table->json('image')->nullable();

            $table->integer('stock')->nullable(); 
            $table->integer('active')->default(1)->comment('0->inactive,1->active');

            $table->json('extra_props')->nullable();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
