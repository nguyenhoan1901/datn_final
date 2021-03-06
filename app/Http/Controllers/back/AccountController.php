<?php

namespace App\Http\Controllers\back;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\student;
use App\Models\commander;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $status = _trangthai();
        $currentUser = Auth::user();
        $isAdmin = $currentUser->is_admin;
        $userId = $currentUser->id;

        if($isAdmin == 1) {
        //     $accounts = Account::orderBy('learning_infomation.year_entered_school', 'desc')->join('students', 'students.id', '=', 'learning_infomation.id_student')->select('learning_infomation.*','students.*')->get();
        //     return view('back.page.account.list', compact('accounts','hockys','status','currentUser'));
            $user = commander::where('id',$userId)->get();
            return view('back.page.account.student_info', compact('users', 'currentUser'));
        }else {
            // if (Account::where('id_student', '=', $userId)->exists()) {
            //     $learning_info_student = Account::where('id_student', $userId)->get();
            //  }
            $learning_info_student = Account::where('id_student', $userId)->get();
            $user = student::where('id',$userId)->get();
                    // echo "<pre>";
                    // compact('user') ;
                    // print_r($user);
                    // echo "</pre>";
                    // echo $userId;
                    // echo $user[0]->fullname;
                    // return 0;
                    dd($user);
            // return view('back.page.account.student_info', compact('learning_info_student','user', 'currentUser'));
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $result = new Account();
        $users = Users::all()->where('is_admin',0);
        $currentUser = Auth::user();
        return view('back.page.account.form', compact('result','users','currentUser'));
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
        if($status == 'L??u'){
            $data['status'] = 0;
        }elseif($status == 'G???i duy???t'){
            $data['status'] = 1;
        }else{
            $data['status'] = 2;
        }
        if(Account::create($data)){
            return redirect()->route('account.index')->with('success', '???? l??u th??ng tin c?? nh??n');
        }
        return redirect()->back()->withInput()->with('error', 'C?? l???i x???y ra, vui l??ng th??? l???i!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = Account::select('users.name','users.is_admin','account.*')->join('users', 'users.id', '=', 'account.user_id')->find($id);
        $currentUser = Auth::user();
        return view('back.page.account.show', compact('result', 'currentUser'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $result = Account::find($id);
        $users = Users::all()->where('is_admin','0');
        $currentUser = Auth::user();
        return view('back.page.account.form', compact('result','users','currentUser'));
    }

    /**
     * Update the specified resource in storage.
     *
     *
     */
    public function update(Request $request, $id)
    {
        $post = Account::find($id);
        $data = $request->all();
        $status = html_entity_decode($data['confirm']);
        if($status == 'L??u'){
            $data['status'] = 0;
        }elseif($status == 'G???i duy???t'){
            $data['status'] = 1;
        }else{
            $data['status'] = 2;
        }
        if($post->update($data)){
            return redirect()->route('account.index')->with('success', '???? c???p nh???t k???t qu??? h???c t???p');
        }
        return redirect()->back()->withInput()->with('error', 'C?? l???i x???y ra, vui l??ng th??? l???i!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
