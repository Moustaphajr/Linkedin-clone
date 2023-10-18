<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function Signup(Request  $request)
    {

        try {
            $validated = $request->validate([
                'name' => 'required',
                'profession' => 'required',
                'email' => 'required|email',
                'password' => 'required',
                'resume' => 'required',

            ]);
            if ($validated) {
                $file = $request->file('avatar');
                $extension = $file->getClientOriginalExtension();
                $file_name = Str::random(20) . '.' . $extension;
                if ($extension == 'png' || $extension == 'jpg' || $extension == 'jpeg') {
                    $file->move('uploads/', $file_name);
                    $user = User::create([
                        'name' => $request->name,
                        'profession' => $request->profession,
                        'email' => $request->email,
                        'password' => Hash::make($request->password),
                        'resume' => $request->resume,
                        'avatar' => $file_name,

                    ]);
                    if ($user) {
                        return response()->json([
                            'message' => 'user created',
                            'user' => $user,
                        ]);
                    }
                }
                return response()->json([
                    'message' => "le type de fichier n' est pas pris en compte",
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ]);
        }
    }


    public function Login(Request $request)
    {
        try {
            $validated = $request->validate([
                'email' => 'required',
                'password' => 'required',
            ]);
            $email = $request->input('email');
            $password = $request->input('password');
            $request->session()->put('info', $email);
            $emailsession = $request->session()->get('info');

            if ($validated) {
                $authenticateUser = Auth::attempt(['email' => $email, 'password' => $password]);

                $request->session()->put('info', $email);
                $emailsession = $request->session()->get('info');

                if ($authenticateUser) {
                    return response()->json([
                        'message' => 'you are logged in',
                        '$authenticateUser' => $authenticateUser,
                        'user' => Auth::user(),
                        'session' => $emailsession,
                    ]);
                }

                return response()->json([
                    'message' => 'Email ou mot de passe incorrect',
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function getInformation($name)
    {
        $user = User::where('name', $name)->first();
        return response()->json([
            'user' => $user,
        ]);
    }

    public function GetUser()
    {
        $users = DB::table('users')
            ->offset(8)
            ->limit(3)
            ->orderBy('id', 'asc')
            ->get();
        if ($users) {
            return response()->json([
                'user' => $users,
            ]);
        }
    }
}
