@extends('back.layout.master')

@php
    $title = "Thông tin phân đội";
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
            <h5 class="card-title">Thông tin vi phạm</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <button type="submit" class="btn btn-success text-white">Lưu</button>
                </div>
            </div>
        </div>
        <div class="card-body">
                <fieldset class="mb-3">
{{--                    <legend class="text-uppercase font-size-sm font-weight-bold">Thông tin cơ bản</legend>--}}
                    <div class="row">
                        <div class="col-md-12">
                            {!!Form::select('id_student', 'Học viên')->options($users)->value($result['id_student'])!!}
                            {!! Form::textarea('content', 'Nội dung vi phạm')->value($result['content']) !!}
                            {!! Form::date('date_break', 'Ngày vi phạm')->value($result['date_break']) !!}
                            {!!Form::select('level', 'Mức độ')->options([1 => 'Nặng', 2 => 'Bình thường', 3 => 'Nhẹ'])!!}
                        </div>
                    </div>
                </fieldset>
        </div>
    </div>
    </form>
</div>

@endsection
