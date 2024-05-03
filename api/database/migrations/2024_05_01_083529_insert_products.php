<?php

use App\Models\Product;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Cassava Tuber', 'description' => 'No Description', 'stock' => 1000, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Walnut', 'description' => 'No Description', 'stock' => 100, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Sweet Potato', 'description' => 'No Description', 'stock' => 1000, 'price' => '30000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Plantain', 'description' => 'A starchy fruit often fried or boiled and served as a side dish. they are also processed into plantain flour for making pancakes, fufu, and snacks like plantain chips.', 'stock' => 1000, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Tuber', 'description' => 'No Description', 'stock' => 1050, 'price' => '28000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Green beans', 'description' => "Green beans are processed into canned green beans, frozen green beans, and green bean casserole. They're used in salads and side dishes.", 'stock' => 1000, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Nigerian Eggplant', 'description' => 'Nigerian eggplant, also known as garden egg, is a small, egg-shaped fruit commonly used in Nigerian cuisine, particularly in dishes like soups, stews, and sauces, and can be grilled, fried, or stewed. It aids digestion, managing blood sugar levels, and promoting heart health and contains antioxidant properties, helping to protect cells from damages.', 'stock' => 1000, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Brown Beans', 'description' => 'No Description', 'stock' => 6000, 'price' => '205000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Yellow Corn', 'description' => "A staple food in Nigeria used for various dishes and animal feed. Apart from food, maize is also processed into flour for making pap, cornmeal, and corn flakes. It's also used in the production of ethanol and animal feed.", 'stock' => 1000, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Whole Grains', 'description' => 'No Description', 'stock' => 15, 'price' => '804000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Fresh Cocoa', 'description' => "A staple food in Nigeria used for various dishes and animal feed. Apart from food, maize is also processed into flour for making pap, cornmeal, and corn flakes. It's also used in the production of ethanol and animal feed.", 'stock' => 1000, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Maize', 'description' => 'No Description', 'stock' => 600, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Beans', 'description' => "Nutrient-rich tubers used in soups, fries, and baked dishes. Rich in vitamins, minerals, and fiber, offer numerous health benefits such as supporting gut health, boosting immunity, and promoting healthy vision.", 'stock' => 10, 'price' => '510000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Dried Cocoa', 'description' => 'Dried cocoa, obtained from fermented and dried cocoa beans, is versatilely processed into cocoa powder, cocoa butter, and various chocolate products used in baking, confectionery, and cosmetics.', 'stock' => 100, 'price' => '40000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Green Beans', 'description' => "Green beans are processed into canned green beans, frozen green beans, and green bean casserole. They're used in salads and side dishes.", 'stock' => 1000, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Dried Cocoa', 'description' => 'No Description', 'stock' => 1000, 'price' => '17000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Fresh Tomatoes', 'description' => "Essential ingredient in Nigerian cuisine, used in stews, soups, and salads. Tomatoes are processed into tomato paste, tomato sauce, and canned tomatoes. They're also used in making ketchup, salsa, and tomato soup.", 'stock' => 1000, 'price' => '8000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Garlic', 'description' => 'No Description', 'stock' => 1000, 'price' => '4000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Carrots', 'description' => 'No Description', 'stock' => 1000, 'price' => '50000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Beans', 'description' => 'No Description', 'stock' => 68500, 'price' => '2000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Habanero pepper', 'description' => 'No Description', 'stock' => 1000, 'price' => '25000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Bell pepper', 'description' => "Colorful vegetables added to stir-fries, salads, and Nigerian dishes. Bell peppers are roasted, grilled, or processed into stuffed peppers, pickled peppers, and roasted pepper hummus.", 'stock' => 500, 'price' => '80000']);
        Product::create(['image' => '1713937241_9839029_bb - Copy.jpg', 'name' => 'Yellow Corn', 'description' => "A staple food in Nigeria used for various dishes and animal feed. Apart from food, maize is also processed into flour for making pap, cornmeal, and corn flakes. It's also used in the production of ethanol and animal feed.", 'stock' => 1000, 'price' => '25000']);
    }/**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
