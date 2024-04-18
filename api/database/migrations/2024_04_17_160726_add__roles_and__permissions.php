<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $executive = Role::create(['name' => 'Executive']);
        Role::create(['name' => 'Farmer']);
        Role::create(['name' => 'Exporter']);
        Role::create(['name' => 'Logicstics']);
        Role::create(['name' => 'Guest']);

        Permission::create(['name' => 'View User'])->assignRole($executive);
        Permission::create(['name' => 'Create User'])->assignRole($executive);
        Permission::create(['name' => 'Update User'])->assignRole($executive);
        Permission::create(['name' => 'Delete User'])->assignRole($executive);
        // Permission::create(['name' => 'Create Roles'])->assignRole($executive);
        Permission::create(['name' => 'View Roles'])->assignRole($executive);
        // Permission::create(['name' => 'Update Roles'])->assignRole($executive);
        Permission::create(['name' => 'View Permissions'])->assignRole($executive);
        Permission::create(['name' => 'Update Permissions'])->assignRole($executive);
        // Permission::create(['name' => 'Update Roles'])->assignRole($executive);
        Permission::create(['name' => 'View Products'])->assignRole($executive);
        Permission::create(['name' => 'Update Products'])->assignRole($executive);
        Permission::create(['name' => 'Create Offers'])->assignRole($executive);
        Permission::create(['name' => 'View Offers'])->assignRole($executive);
        Permission::create(['name' => 'Update Offers'])->assignRole($executive);
        Permission::create(['name' => 'Delete Offers'])->assignRole($executive);
        Permission::create(['name' => 'Insert Announcement'])->assignRole($executive);
        Permission::create(['name' => 'Update Announcement'])->assignRole($executive);
        Permission::create(['name' => 'View Announcement'])->assignRole($executive);
        Permission::create(['name' => 'Delete Announcement'])->assignRole($executive);
        Permission::create(['name' => 'View Carts'])->assignRole($executive);
        Permission::create(['name' => 'Delete Order'])->assignRole($executive);
        Permission::create(['name' => 'View Order'])->assignRole($executive);
        Permission::create(['name' => 'Insert Order'])->assignRole($executive);
        Permission::create(['name' => 'Update Order Status'])->assignRole($executive);

        User::create([
            'name' => 'Asjid Ali',
            'username' => 'asjidale',
            'email' => 'asjidale@gmail.com',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
