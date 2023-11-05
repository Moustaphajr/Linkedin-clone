<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function CreatePost(Request $request, $name)


    {

        try {
            $username = User::where('name', $name)->first();
            $title = $request->input('title');
            $image = $request->file('image');
            $post_related_avatar = $username->avatar;
            $post_related_name = $username->name;
            $image_extension = $image->getClientOriginalExtension();
            if ($image) {
                if ($image_extension == 'png' || $image_extension == 'jpg' || $image_extension == 'jpeg') {
                    $image_name = time() . '.' . $image_extension;
                    $image->move('post/', $image_name);
                    $post = Post::create([
                        'title' => $title,
                        'user_id' => $username->id,
                        'user_avatar' => $post_related_avatar,
                        'user_name' => $post_related_name,
                        'image' => $image_name
                    ]);
                    return response()->json([
                        'message' => 'post created',
                        'post' => $post,
                    ]);
                }
                return response()->json([
                    'message' => 'invalid image format',
                ]);
            }

            $createPost = Post::create([
                'title' => $title,
                'user_id' => $username->id,
                'user_avatar' => $post_related_avatar,
                'user_name' => $post_related_name,
            ]);
            return response()->json([
                'message' => 'post created successfully',
                'post' => $createPost,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function getPosts()
    {

        try {
            $posts = Post::all();
            if ($posts) {
                return response()->json([
                    'message' => 'posts found',
                    'posts' => $posts,
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ]);
        }
    }


    public function DeletePost($name, $post_id)
    {
        try {
            $post = Post::where('user_name', $name)->where('id', $post_id)->first();
            if ($post) {
                $post->delete();
                return response()->json([
                    'message' => 'post deleted successfully',
                ]);
            }
            return response()->json([
                'message' => 'you cannot delete this post',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ]);
        }
    }


    public function updatePost(Request $request, $name, $post_id)
    {
        $update = Post::where('user_name', $name)->where('id', $post_id)->first();
        $post_user_name = $update->user_name;
        $post_user_avatar = $update->user_avatar;
        $post_user_id = $update->user_id;
        $post_title = $request->input('title');
        $post_image = $request->file('image');
        $post_image_extension = $post_image->getClientOriginalExtension();
        if ($post_image) {
            if ($post_image_extension == 'png' || $post_image_extension == 'jpg' || $post_image_extension == 'jpeg') {
                $post_image_name = time() . '.' . $post_image_extension;
                $post_image->move('post/', $post_image_name);
                $update->update([
                    'title' => $post_title,
                    'user_id' => $post_user_id,
                    'user_avatar' => $post_user_avatar,
                    'user_name' => $post_user_name,
                    'image' => $post_image_name
                ]);
                return response()->json([
                    'message' => 'post updated successfully',
                ]);
            }
        }
    }
}
