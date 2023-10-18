<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'user_id',
        'user_avatar',
        'user_name',
        'image'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
