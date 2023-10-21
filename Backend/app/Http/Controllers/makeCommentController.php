<?php

namespace App\Http\Controllers;


use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class makeCommentController extends Controller
{
    public function makeComment(Request $request, $name, $post_id)
    {
        try {

            $post = Post::where('id', $post_id)->first();
            $username = User::where('name', $name)->first();
            $user_id = $username->id;
            $user_name = $username->name;
            $user_avatar = $username->avatar;
            $comment = $request->input('comment');

            $validated = $request->validate([
                'comment' => 'required|max:255',

            ]);
            if ($validated) {
                $comment = Comment::Create([
                    'comment' => $comment,
                    'user_id' => $user_id,
                    'post_id' => $post->id,
                    'user_name' => $user_name,
                    'user_avatar' => $user_avatar

                ]);
                if ($comment) {
                    return response()->json([
                        'status' => 'Comment Created Successfully',
                        'comment' => $comment
                    ]);
                }
                return response()->json([
                    'status' => 'Error on Create comment',
                ]);
            }
            return response()->json([
                'status' => 'Error on validation comment',
            ]);
        } catch (\throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ]);
        }
    }


    public function  getComments()
    {
        $posts = DB::table("users")
            ->join("posts", "users.id", "=", "posts.user_id")
            ->select("posts.*")
            ->get();

        $comments = DB::table('posts')->join('comments', 'posts.id', '=', 'comments.post_id')->get();
        return response()->json([
            'comments' => $comments,
            ''

        ]);
    }

    public function deleteComment($name, $comment_id)
    {

        $comment = Comment::where('user_name', $name)->where('id', $comment_id)->first();
        $comment->delete();
        return response()->json([
            'message' => 'comment deleted successfully',

        ]);
    }
}
