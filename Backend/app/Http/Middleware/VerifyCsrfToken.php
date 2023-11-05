<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        "http://127.0.0.1:8000/api/signup",
        "http://127.0.0.1:8000/api/login",
        "http://127.0.0.1:8000/api/create-post/*",
        "http://127.0.0.1:8000/api/create-comment/*",
        "http://127.0.0.1:8000/api/delete-post/*",
        "http://127.0.0.1:8000/api/delete-comment/*",
        "http://127.0.0.1:8000/api/update-post/*",
        "http://127.0.0.1:8000/api/create-job"



    ];
}
