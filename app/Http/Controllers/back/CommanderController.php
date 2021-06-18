<?php

namespace App\Http\Controllers\back;

use App\Helpers\UploadHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Users;
use App\Models\commander;
use Illuminate\Support\Facades\Hash;
class CommanderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $users = Users::with('commander')->orderBy('created_at', 'desc')->paginate(2);
        // $currentUser = Auth::user();
        // return view('back.page.users.list', compact('users'));
        return redirect()->route('users.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $result = new Users();
        $resultC = new commander();
        return view('back.page.users.formC', compact('result'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        if ($request->hasFile('thumb')) {
            $data['thumb'] = UploadHelper::uploadImage($request->file('thumb'));
        }
        $data['password'] = Hash::make($data['password']);
        if(Users::create($data)){
            $data['id']= Users::where('username',$data['username'])->value('id');
            if(commander::create($data)){
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
        //
        $result = commander::find($id);
        return view('back.page.users.editC', compact('result'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $post = commander::find($id);
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
        $item1 = commander::find($id);
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
