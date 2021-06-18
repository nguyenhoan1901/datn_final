@extends('back.layout.master')

@php
$title = "Quản lý kết quả rèn luyện";
@endphp

@section('web_title')
	{{$title}}
@endsection

@section('content')
<div class="content">

	<!-- Basic responsive table -->
	<div class="card">
		<div class="card-header header-elements-inline">
			<h5 class="card-title">{{$title}}</h5>
            <div class="header-elements">
                <div class="list-icons">
                    @php if($currentUser->is_admin == 1) { @endphp
                    <a href="{{route('renluyen.create')}}" class="fa fa-plus"> <span>Add</span></a>
                    @php } @endphp
                </div>
            </div>
		</div>

		<div class="table-responsive">
			<table class="table" id="datatable">
				<thead>
					<tr>
						<th>Tên học viên</th>
						<th>Kết quả rèn luyện</th>
						<th>Ngày hiện hành</th>
                        @php if($currentUser->is_admin == 1) { @endphp
						<th>Action</th>
                        @php } @endphp
					</tr>
				</thead>
				<tbody>
				@foreach($renLuyens as $renLuyen)
					<tr>
						<td><a href="{{route('renluyen.show', $renLuyen->id)}}">{{$renLuyen->name}}</td>
						<td>{{$arrKetQua[$renLuyen->ket_qua]}}</td>
						<td>{{$renLuyen->thang_hien_hanh}}</td>
                        @php if($currentUser->is_admin == 1) { @endphp
                        <td>
                            <div class="list-icons">
                                <a href="{{route('renluyen.edit', $renLuyen->id)}}" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="{{route('renluyen.delete', $renLuyen->id)}}" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
                        @php } @endphp
					</tr>
				@endforeach
				</tbody>
			</table>
		</div>
	</div>
	<!-- /basic responsive table -->

</div>
@endsection
