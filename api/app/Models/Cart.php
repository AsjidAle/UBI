<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'product', 'user',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product');
    }

    // Many-to-one relationship with the User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
