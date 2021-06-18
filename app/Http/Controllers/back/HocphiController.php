<?php

namespace App\Http\Controllers\back;

use App\Http\Controllers\Controller;
use App\Models\Hocphi;
use App\Models\Users;
use App\Models\student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HocphiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $currentUser = Auth::user();
        $isAdmin = $currentUser->is_admin;
        $userId = $currentUser->id;
        if($isAdmin == 1){
            $hocPhis = Hocphi::orderBy('fee.semester', 'desc')->join('students', 'students.id', '=', 'fee.id_student')->select('fee.*','students.fullname')->get();
        }else{
            $hocPhis = Hocphi::where('students.id',$userId)->orderBy('fee.semester', 'desc')->join('students', 'students.id', '=', 'fee.id_student')->select('fee.*','students.fullname')->get();
        }
        $hockys = _hocKy();
        $status = _trangthai();
        return view('back.page.hocphi.list', compact('hocPhis','hockys', 'status', 'currentUser'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $result = new Hocphi();
        $hockys = _hocKy();
        $currentUser = Auth::user();
        $isAdmin = $currentUser->is_admin;
        $userId = $currentUser->id;
        if($isAdmin == 1){
            $users = student::all()->where('is_admin',0);
        }else{
            $users = student::where('id',$userId)->get();
        }
        return view('back.page.hocphi.form', compact('result','hockys', 'users', 'currentUser'));
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
        $status = html_entity_decode($data['confirm']);
        if($status == 'Lưu'){
            $data['status'] = 0;
        }elseif($status == 'Gửi duyệt'){
            $data['status'] = 1;
        }else{
            $data['status'] = 2;
        }
        if(Hocphi::create($data)){
            return redirect()->route('hocphi.index')->with('success', 'Đã lưu học phí');
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
        $result = Hocphi::select('students.fullname','fee.*')->join('students', 'students.id', '=', 'fee.id_student')->find($id);
        $hockys = _hocKy();
        $currentUser = Auth::user();
        return view('back.page.hocphi.show', compact('result','hockys', 'currentUser'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $result = Hocphi::find($id);
        $hockys = _hocKy();
        $currentUser = Auth::user();
        $isAdmin = $currentUser->is_admin;
        $userId = $currentUser->id;
        if($isAdmin == 1){
            $users = student::all();
        }else{
            $users = student::where('id',$userId)->get();
        }
        return view('back.page.hocphi.form', compact('result','hockys', 'users', 'currentUser'));
    }

    /**
     * Update the specified resource in storage.
     *
     *
     */
    public function update(Request $request, $id)
    {
        $post = Hocphi::find($id);
        $data = $request->all();
        $status = html_entity_decode($data['confirm']);
        if($status == 'Lưu'){
            $data['status'] = 0;
        }elseif($status == 'Gửi duyệt'){
            $data['status'] = 1;
        }else{
            $data['status'] = 2;
        }
        if($post->update($data)){
            return redirect()->route('hocphi.index')->with('success', 'Đã cập nhật học phí');
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
        $item = Hocphi::find($id);
        $item->delete();
        return redirect()->route('hocphi.index')->with('success', 'Đã xóa nội dung');
    }
    public function destroy($id)
    {
        //
    }
}
