@extends('back.layout.master')

@php
    $title = "Thêm bài viết";
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
                        <input type="submit" class="btn btn-success text-white" name="confirm" value="Lưu">
                </div>
            </div>
        </div>
        <div class="card-body">
                <fieldset class="mb-3">
{{--                    <legend class="text-uppercase font-size-sm font-weight-bold">Thông tin cơ bản</legend>--}}
                    <div class="row">
                        <div class="col-md-12">
                            {!!Form::text('title', 'Tiêu đề')!!}
                            {!!Form::textarea('content', 'Nội dung')!!}
                        </div>
                    </div>
                </fieldset>
        </div>
    </div>
    </form>
</div>

@endsection
