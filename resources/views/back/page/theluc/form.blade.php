@extends('back.layout.master')

@php
    $title = "Thông tin kết quả thể lực";
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
            <h5 class="card-title">{{$title}}</h5>
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
                            {!!Form::textarea('result', 'Chi tiết thể lực')->value($result['result'])!!}
                            {!! Form::date('date_update', 'Ngày cập nhật')->value($result['date_update']) !!}
                        </div>
                    </div>
                </fieldset>
        </div>
    </div>
    </form>
</div>

@endsection
