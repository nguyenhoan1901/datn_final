@extends('back.layout.master')

@php
    $title = "Thông tin User";
@endphp

@section('web_title')
    {{$title}}
@endsection


@section('content')
<div class="content">

    <!-- Form inputs -->
    <form action="" method="post" enctype="multipart/form-data">
    @csrf
    <div class="card">
        <div class="card-header header-elements-inline">
            <h5 class="card-title">Chỉnh sửa thông tin Học viên</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <button type="submit" class="btn btn-success text-white">Lưu</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <fieldset class="mb-3 col-lg-6">
                    <legend class="text-uppercase font-size-sm font-weight-bold">Thông tin cơ bản</legend>
                    <div class="row">
                        <div class="col-md-12">
                            {!! Form::text('fullname', 'Họ và tên')->value($result->fullname) !!}
                            {!!Form::text('email', 'Địa chỉ email')->type('email')->value($result->email)!!}
                            {!!Form::text('phonenumber', 'Số điện thoại')->type('number')->value($result->phonenumber)!!}
                            {!!Form::select('gender', 'Giới tính',['male'=>'Nam','female'=>'Nữ'])->value($result->gender)!!}
                            {!!Form::date('birthday', 'Ngày sinh')->value($result->birthday)!!}
                            {!!Form::text('hometown', 'Quê quán')->value($result->hometown)!!}
                            @include('back.module.image', ['title'=>"Avatar", 'name'=>"thumb", 'src'=>$result->thumb])
                        </div>
                    </div>
                </fieldset>
                <fieldset class="mb-3 col-lg-6">
                    <legend class="text-uppercase font-size-sm font-weight-bold ttqd">Thông tin Quân đội</legend>
                    <div class="row">
                        <div class="col-md-12">
                            {!! Form::select('rank', 'Cấp bậc',['b1'=>'Binh nhì','b2'=>'Binh nhất','h1'=>'Hạ sĩ','h2'=>'Trung sĩ','h3'=>'thượng sĩ'])->value($result->rank) !!}
                            {!!Form::select('position_government', 'Chức vụ',['student'=>'Học viên','leader'=>'Phân đội trưởng'])->value($result->position_government)!!}
                            {!!Form::text('organization', 'Đơn vị')->readonly(true)->value("Hệ học viên 1 - Học viện Kỹ thuật Quân Sự")!!}
                            {!!Form::date('date_enlistment', 'Ngày nhập ngũ')->value($result->date_enlistment)!!}
                            {!!Form::date('date_party', 'Ngày vào Đảng')->value($result->date_party)!!}
                            {!!Form::date('official', 'Ngày chính thức')->value($result->official)!!}
                            {!!Form::text('position_party', 'Chức vụ Đảng')->value($result->position_party)!!}
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
    </form>
</div>

@endsection
