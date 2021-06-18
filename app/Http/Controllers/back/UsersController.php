<?php

namespace App\Http\Controllers\back;

use App\Helpers\UploadHelper;
use App\Http\Controllers\Controller;
use App\Models\Users;
use App\Models\group;
use App\User;
use App\Models\student;
use App\Models\commander;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $users = Users::with('student')->get();
        // $users = Users::orderBy('created_at', 'desc')->paginate(2);
        $student = student::orderBy('students.fullname', 'desc')->join('users', 'users.id', '=', 'students.id')->select('students.*','users.username')->paginate(7);
        $commander = commander::orderBy('commanders.fullname', 'desc')->join('users', 'users.id', '=', 'commanders.id')->select('commanders.*','users.username')->paginate(7);
        return view('back.page.users.list', compact('student','commander'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $result = new Users();
        $resultS = new student();
        $group = group::all();
        // echo "<pre>";
        // print_r($group);
        // echo "</pre>";
        return view('back.page.users.form', compact('result','group'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        if ($request->hasFile('thumb')) {
            $data['thumb'] = UploadHelper::uploadImage($request->file('thumb'));
        }
        $data['password'] = Hash::make($data['password']);
        if(Users::create($data)){
            $data['id']= Users::where('username',$data['username'])->value('id');
            if(student::create($data)){
                return redirect()->route('users.index')->with('success', 'Đã lưu nội dung');
            }
        }
        return redirect()->back()->withInput()->with('error', 'Có lỗi xảy ra, vui lòng thử lại!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $result = student::find($id);
        // $result = student::find($id)->join('users', 'users.id', '=', 'students.id')->select('students.*')->paginate(2);
        // $result = DB::table('students')->where('id',$id)->join('users','users.id','=','students.id')->select('students.*')->get();
        return view('back.page.users.edit', compact('result'));
    }

    /**
     * Update the specified resource in storage.
     *
     *
     */
    public function update(Request $request, $id)
    {
        $post = student::find($id);
        $data = $request->all();
        if ($request->hasFile('thumb')) {
            $data['thumb'] = UploadHelper::uploadImage($request->file('thumb'));
        }
        if($post->update($data)){
            return redirect()->route('users.index')->with('success', 'Đã lưu thông tin user');
        }
        return redirect()->back()->withInput()->with('error', 'Có lỗi xảy ra, vui lòng thử lại!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function del($id){
        $item1 = student::find($id);
        $item2 = Users::find($id);
        $item1->delete();
        if ($item2 != null) {
            $item2->delete();
        }
        return redirect()->route('users.index')->with('success', 'Đã xóa nội dung');
    }
    public function destroy($id)
    {
        //
    }
}
