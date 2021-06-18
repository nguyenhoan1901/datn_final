@extends('back.layout.master')

@php
    $title = "Thông tin kết quả học tập";
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
                    @if(!$result['status'] || $result['status'] == 0)
                        <input type="submit" class="btn btn-success text-white" name="confirm" value="Lưu">
                        <input type="submit" class="btn btn-success text-white" name="confirm" value="Gửi duyệt" style="background-color: cornflowerblue">
                    @elseif($result['status'] == 1 && $currentUser->is_admin == 1)
                        <input type="submit" class="btn btn-success text-white" name="confirm" value="Duyệt" style="background-color: brown">
                    @elseif($result['status'] == 2 && $currentUser->is_admin == 1)
                        <input type="submit" class="btn btn-success text-white" name="confirm" value="Cập nhật">
                    @endif
                </div>
            </div>
        </div>
        <div class="card-body">
                <fieldset class="mb-3">
{{--                    <legend class="text-uppercase font-size-sm font-weight-bold">Thông tin cơ bản</legend>--}}
                    <div class="row">
                        <div class="col-md-12">
                            {!!Form::select('id_student', 'Học viên')->options($users)->value($result['id_student'])!!}
                            {!! Form::text('cpa', 'CPA')->value($result['cpa']) !!}
                            {!! Form::text('gpa', 'GPA')->value($result['gpa']) !!}
                            {!! Form::text('subject_debt', 'Môn nợ')->value($result['subject_debt']) !!}
                            {!!Form::select('semester', 'Kỳ học')->options($hockys)!!}
                        </div>
                    </div>
                </fieldset>
        </div>
    </div>
    </form>
</div>

@endsection
