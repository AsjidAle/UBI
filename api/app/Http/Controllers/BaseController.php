<?php

namespace App\Http\Controllers;

class BaseController extends Controller
{
    public function sendResponse($result, $error = "", $status = 200)
    {
        $response = [
            'success' => true,
            'data' => $result,
        ];

        if ($message) {
            $response['message'] = $message;
        }

        return response()->json($response, $code);
    }

    public function sendError($error, $errorMessages, $code = 404)
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if (!empty($errorMessages)) {
            $response['errors'] = $errorMessages;
        }

        return response()->json($response, $code);
    }
}
