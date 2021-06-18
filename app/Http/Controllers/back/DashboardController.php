<?php

namespace App\Http\Controllers\back;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\student;
use App\Models\commander;
use App\Models\Documents;
use App\Models\Hoctap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function dashboard(Request $request){
        // $currentUser = Auth::user();
        // $userId = $currentUser->id;
        // $idAdmin = $currentUser->is_admin;
        // if($idAdmin == 1){
        //     return view('back.page.dashboardadmin');
        // }
        // $hocKys = _hocKy();
        // $accountInfo = Account::where('user_id',$userId)->first();
        // $hocTapInfo = Hoctap::where([['user_id',$userId],['status',2]])->orderBy('updated_at', 'desc')->first();
        // $documents = Documents::orderBy('updated_at', 'desc')->limit(6)->get();
        // return view('back.page.account.student_info',compact('currentUser','accountInfo','hocTapInfo','hocKys','documents'));
    }
    public function info_me(){
        $currentUser = Auth::user();
        $userId = $currentUser->id;
        $idAdmin = $currentUser->is_admin;
        if($idAdmin == 1){
            $commander = commander::find($userId);
            return view('back.page.account.commander_info', compact('commander'));
        }else{
            $student = student::find($userId);
            $learning_info_student = Account::find($userId);
            return view('back.page.account.student_info',compact('student','learning_info_student'));
        }
    }
    public function info($id){
        $currentUser = Auth::user();
        $userId = $currentUser->id;
        $idAdmin = $currentUser->is_admin;
        if($idAdmin == 1){
            $commander = commander::find($id);
            return view('back.page.account.commander_info', compact('commander'));
        }else{
            $student = student::find($id);
            $learning_info_student = Account::find($id);
            return view('back.page.account.student_info',compact('student','learning_info_student'));
        }
    }
}
