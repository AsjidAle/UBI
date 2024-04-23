<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use Spatie\Permission\Models\Role;

class RoleController extends BaseController
{
    public function index()
    {
        $roles = Role::all();
        return $this->sendResponse($roles);
    }
}
