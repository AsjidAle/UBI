<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;

class DashboardController extends BaseController
{
    public function dashboard()
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $data = null;

        $data['totalUsers'] = User::count();
        $data['fulfiledOrders'] = Order::where('created_at', '<', now()->subDays(30))->whereNotNull('fulfiled')->count();
        $data['totalProducts'] = Product::count();
        
        if ($user->hasPermissionTo('View Dashboard')) {

            $data['totalOrders'] = Order::count();
            $data['unfulfiledOrders'] = Order::where('fulfiled')->count();
            $data['totalFulfiledOrders'] = Order::whereNotNull('fulfiled')->count();
            $data['pendingOrders'] = Order::where('created_at', '<', now()->subDays(30))->whereNull('fulfiled')->count();
            $data['pendingOrders6mth'] = Order::where('created_at', '<', now()->subDays(180))->whereNull('fulfiled')->count();
            $data['fulfiledOrders'] = Order::where('created_at', '<', now()->subDays(30))->whereNotNull('fulfiled')->count();
            $data['fulfiledOrders6mth'] = Order::where('created_at', '<', now()->subDays(180))->whereNotNull('fulfiled')->count();
            $data['user6mth'] = User::where('created_at', '>', now()->subDays(180))->count();

            $data['products'] = Product::orderBy('id', 'desc')->take(5)->get();
            $data['orders'] = Order::orderBy('id', 'desc')->take(5)->get();
            return $this->sendResponse($data);
        }
        if ($user->hasRole('Farmer')) {
//
        }
        if ($user->hasRole('Exporter')) {
            //
        }
        if ($user->hasRole('Logistics')) {
            $data['totalOrders'] = Order::count();
            $data['unfulfiledOrders'] = Order::where('fulfiled')->count();
            $data['totalFulfiledOrders'] = Order::whereNotNull('fulfiled')->count();
            $data['pendingOrders'] = Order::where('created_at', '<', now()->subDays(30))->whereNull('fulfiled')->count();
            $data['pendingOrders6mth'] = Order::where('created_at', '<', now()->subDays(180))->whereNull('fulfiled')->count();
            $data['fulfiledOrders'] = Order::where('created_at', '<', now()->subDays(30))->whereNotNull('fulfiled')->count();
            $data['fulfiledOrders6mth'] = Order::where('created_at', '<', now()->subDays(180))->whereNotNull('fulfiled')->count();
        }
        if ($user->hasRole('Guest')) {
            //
        }
        return $this->sendResponse($data);
    }
}
