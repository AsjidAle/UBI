<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class FileController extends BaseController
{
    public function upload(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'attachment' => 'required|max:1024|mimes:jpg,jpeg,png,gif',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Errors', $validator->errors(), 422);
        }

        if ($request->hasFile('attachment')) {
            $fileName = time() . '_' . rand(1, 9999999) . '_' . $this->cleanString($request->file('attachment')->getClientOriginalName());

            $filePath = $request->file('attachment')->storeAs('public/uploads', $fileName);

            $fileData = [
                'file' => $fileName,
                'fileName' => $request->file('attachment')->getClientOriginalName(),
                'filePath' => $filePath, // Use the generated URL instead of the file path
            ];

            return $this->sendResponse($fileData, "File uploaded successfully!");
        }
    }

    private function cleanString($inputString)
    {
        $pattern = '/[^a-zA-Z0-9.\-_]/';
        $cleanString = preg_replace($pattern, '', $inputString);
        return $cleanString;
    }
}
