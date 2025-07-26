<?php

namespace App\Http\Controllers;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class CloudinaryUploaderController extends Controller
{
     public static function uploadSingle($file)
    {
        if (!$file || !$file->isValid()) {
            return null;
        }

        $response = cloudinary()->uploadApi()->upload($file->getRealPath());

        return [
            'url' => $response['secure_url'],
            'public_id' => $response['public_id'],
        ];
    }

      public static function uploadMultiple($files)
    {
        $results = [];

        foreach ($files as $file) {
            if ($file && $file->isValid()) {
                $response = Cloudinary()->uploadApi()->upload($file->getRealPath());
                $results[] = [
                    'url' => $response['secure_url'],
                    'public_id' => $response['public_id'],
                ];
            }
        }

        return $results;
    }
}
