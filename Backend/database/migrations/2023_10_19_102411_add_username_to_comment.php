<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('comments', function (Blueprint $table) {

            $table->string('user_name')->after('user_id')->nullable();
            $table->string('user_avatar')->after('user_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('comment', function (Blueprint $table) {

            $table->string('user_name')->after('user_id')->nullable();
            $table->string('user_avatar')->after('user_id')->nullable();
        });
    }
};
