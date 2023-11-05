<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\makeCommentController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::post('/api/signup', [AuthController::class, "Signup"]);
Route::post('/api/login', [AuthController::class, "Login"]);
Route::get('/api/information/{name}', [AuthController::class, "GetInformation"]);
Route::post('/api/create-post/{name}', [PostController::class, "CreatePost"]);
Route::get('/api/get-posts', [PostController::class, "GetPosts"]);
Route::get('/api/get-user', [AuthController::class, "GetUser"]);
Route::post('/api/create-comment/{name}/{post_id}', [makeCommentController::class, "makeComment"]);
Route::get('/api/get-comments', [makeCommentController::class, "getComments"]);
Route::delete('/api/delete-post/{name}/{post_id}', [PostController::class, "DeletePost"]);
Route::delete('/api/delete-comment/{name}/{comment_id}', [makeCommentController::class, "deleteComment"]);
Route::post('/api/update-post/{name}/{post_id}', [PostController::class, "updatePost"]);
Route::post('/api/create-job', [JobController::class, "createJob"]);
Route::get('/api/get-jobs', [JobController::class, "getJobs"]);
