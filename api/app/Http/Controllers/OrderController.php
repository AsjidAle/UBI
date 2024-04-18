<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        if (!$user->hasPermission('View Order')) {
            return $this->sendError();
        }

        $orders = Order::with(['user', 'product'])->paginate(100);

        return $this->sendResponse($orders);
    }

    public function myOrders()
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $orders = Order::where('user', $user->id)->get();
        return $this->sendResponse($orders);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        if (!$user->hasPermission('Insert Order')) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'price' => 'required|integer|min:0.01',
            'amount' => 'required|integer|min:1',
            'product' => 'required|exists:products,id', // Ensure 'product' field exists in the 'products' table and matches an 'id'
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error", $validator->errors(), 422);
        }

        $validator['user'] = $user->id;

        $validatedData = $validator->validated();

        $order = Order::create($validatedData);
        return $this->sendResponse("Order {$order->id} Successfully placed!");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $order = Order::with(['products', 'users'])->find($id);

        if (!$order) {
            return $this->sendError('Invalid Order Id!');
        }

        if (!$user->hasPermission('View Order') || ($user->id != $order->user)) {
            return $this->sendError();
        }

        return $this->sendResponse($order);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $order = Order::find($id);

        if (!$order || ($order->user != $user->id)) {
            return $this->sendError('Invalid Order Id!');
        }

        $validator = Validator::make($request->all(), [
            'price' => 'integer|min:0.01',
            'amount' => 'integer|min:1',
            'product' => 'exists:products,id',
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error", $validator->errors(), 422);
        }

        $validatedData = $validator->validated();

        $order->update($validatedData);

        return $this->sendResponse("Order {$order->id} successfully updated!");
    }

    public function orderStatus($id)
    {
        if (!auth()->user()->hasPermission('Update Order Status')) {
            return $this->sendError();
        }

        $order = Order::find($id);
        if (!$order) {
            return $this->sendError('Invalid Order Id');
        }

        $order->update(['fulfiled' => Carbon::now()]);
        return $this->sendResponse("Order Status Succcessfully Updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = auth()->user();

        if (!$user || $user->hasPermission('Delete Order')) {
            return $this->sendError();
        }

        $order = Order::find($id);

        if (!$order) {
            return $this->sendError('Invalid Order Id!');
        }
        if ($order->fulfiled) {
            return $this->sendError("Order is fulfiled can't be deleted");
        }

        $order->delete();

        return $this->sendResponse("Order {$order->id} Succesfully Canceled!");
    }
}
