<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name', 'extra_props', 'image_url', 'image_public_id', 'icon_url', 'icon_public_id'
    ];

 protected $casts = [
    'extra_props' => 'array',
    'image_url' => 'array',
    'image_public_id' => 'array',
];
}
