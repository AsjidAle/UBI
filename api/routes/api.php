<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductOfferController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;

Route::any('auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:api'], function () {

    Route::resource('users', UserController::class);
    Route::resource('order', OrderController::class);
    Route::resource('announcement', AnnouncementController::class);
    Route::resource('cart', CartController::class);
    Route::resource('offer', OfferController::class);
    Route::resource('product', ProductController::class);
    Route::resource('productoffer', ProductOfferController::class);

    Route::get('dashboard', [DashboardController::class, 'dashboard']);
    Route::get('myCart', [CartController::class, 'myCart']);
    Route::get('alloffer', [OfferController::class, 'all']);
    Route::get('allprodut', [ProductController::class, 'all']);
    Route::get('allprodut', [ProductController::class, 'all']);
    Route::get('myOrders', [OrderController::class, 'myOrders']);
    Route::get('total', [ProductController::class, 'total']);
    Route::get('user/me', [UserController::class, 'me']);
    Route::get('roles', [RoleController::class, 'index']);

    Route::any('logout', [AuthController::class, 'logout']);
});
