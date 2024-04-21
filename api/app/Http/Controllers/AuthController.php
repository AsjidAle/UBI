<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
    public function login(Request $request)
    {

        if (Auth::attempt(['username' => $request->username, 'password' => $request->password]) ||
            Auth::attempt(['email' => $request->username, 'password' => $request->password])
        ) {
            $user = Auth::user();
            $user['permission'] = $user->getAllPermissions();
            $token = $user->createToken('platform')->accessToken;
            return $this->sendResponse($user, $token);
        }
        return $this->sendError('Invalid Credentails!', 401);

    }

    public function logout()
    {
        $user = Auth::user();
        if ($user) {
            $user->currentAccessToken()->delete();
        }
        return $this->sendResponse('Successfully Logged out!');
    }

    public function facebookLogin()
    {
        //
    }

    public function googleLogin()
    {
        //
    }
}
