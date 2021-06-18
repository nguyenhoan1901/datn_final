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
            <h5 class="card-title">Chỉnh sửa thông tin Chỉ huy</h5>
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
                            {!! Form::select('rank', 'Cấp bậc',['11'=>'Thiếu úy','21'=>'Trung úy','31'=>'Thượng úy','41'=>'Đại úy','12'=>'Thiếu tá', '22'=>'Trung tá', '32'=>'Thượng tá', '42'=>'Đại tá'])->value($result->rank) !!}
                            {!!Form::select('position_government', 'Chức vụ',['student'=>'Học viên','leader'=>'Phân đội trưởng'])->value($result->position_government)!!}
                            {!!Form::text('organization', 'Đơn vị')->readonly(true)->value("Hệ học viên 1 - Học viện Kỹ thuật Quân Sự")!!}
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
    </form>
</div>

@endsection
