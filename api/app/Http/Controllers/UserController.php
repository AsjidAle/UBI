<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermission('View User')) {
            return $this->sendError();
        }
        $users = User::withTrashed()->paginate(100);

        return $this->sendResponse($users);
    }

    public function me()
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $me = User::with(['roles', 'permissions'])->find($user->id);
        return $this->sendResponse($me);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermission('Insert User')) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string',
            'username' => 'required|string|unique',
            'avtar' => 'string',
            'bio' => 'string|nullable',
            'role' => 'required|exists:roles,id',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors(), 422);
        }

        $validated = $validator->validated();
        $user = User::create($validated);
        $user->assignRole($validated->role);
        return $this->sendResponse('User Successfully Created!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermission('View User')) {
            return $this->sendError();
        }

        $targetUser = User::with(['roles', 'permissions'])->find($id);

        if (!$targetUser) {
            return $this->sendError("User not found!");
        }

        return $this->sendResponse($targetUser);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'email' => 'string',
            'username' => 'string|unique',
            'avtar' => 'string',
            'bio' => 'string|nullable',
            'role' => 'required|exists:roles,id',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error!', $validator->errors(), 422);
        }

        $validated = $validator->validated();

        $user->rermoveRole($user->role->name);

        $user->update($validated);
        $user->assignRole($validated->role);
        return $this->sendResponse('Successfuly Updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id = null)
    {
        $user = auth()->user();

        if (!$user || ($id && !$user->hasPermission('Delete User'))) {
            return $this->sendError();
        }

        if (!$id) {
            $user->delete();
        } else {
            $user = User::find($id);
            $user->delete();
        }
        return $this->sendResponse('Account deactivated Successfully!');

        $user = $id ? User::find($id) : auth()->user();
    }
}
