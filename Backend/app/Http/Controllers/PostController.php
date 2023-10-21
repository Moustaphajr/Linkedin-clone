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
}
