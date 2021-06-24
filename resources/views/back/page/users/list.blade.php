@extends('back.layout.master')

@php
$title = "Quản lý Users";
@endphp

@section('web_title')
	{{$title}}
@endsection

@section('content')
<div class="content">
	<div class="row">
			<!-- list hoc vien -->
		<div class="col-xl-7">
			<div class="card">
				<div class="card-header header-elements-inline">
					<h5 class="card-title">Danh sách Học viên</h5>
					<div class="header-elements">
						<div class="list-icons">
							<a href="{{route('users.create')}}" class="fa fa-plus"> <span>Add</span></a>
						</div>
					</div>
				</div>

				<div class="table-responsive">
					<table class="table" id="datatable">
						<thead>
							<tr>
								<th>Họ và Tên</th>
								<th>Cấp bậc</th>
								<th>Chức vụ</th>
								<th>Phân đội</th>
								<th>Tùy chọn</th>
							</tr>
						</thead>
						<tbody>
						@foreach($student as $user)
							<tr>
								<td><a href="{{route('users.edit', $user->id)}}">{{$user->fullname}}</td>
								<td>{{$user->rank}}</td>
								<td>{{$user->position_government}}</td>
								{{-- <td>@if($user->is_admin==1)Yes @else No @endif</td> --}}
								<td>{{$user->created_at}}</td>
								<td>
									<div class="list-icons">
										<a href="{{route('users.edit', $user->id)}}" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
										<a href="{{route('users.delete', $user->id)}}" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
									</div>
								</td>
							</tr>
						@endforeach
						</tbody>
					</table>
				</div>
				<hr>
				{{$student->links()}}
			</div>
		</div>

			<!-- list chi huy -->
		<div class="col-xl-5">
			<div class="card">
				<div class="card-header header-elements-inline">
					<h5 class="card-title">Danh sách Chỉ huy</h5>
					<div class="header-elements">
						<div class="list-icons">
							<a href="{{route('commander.create')}}" class="fa fa-plus"> <span>Add</span></a>
						</div>
					</div>
				</div>

				<div class="table-responsive">
					<table class="table" id="datatable">
						<thead>
							<tr>
								<th>Họ và Tên</th>
								<th>Chức vụ</th>
								<th>Tùy chọn</th>
							</tr>
						</thead>
						<tbody>
						@foreach($commander as $user)
							<tr>
								<td>{{$user->fullname}}</td>
								<td><a href="{{route('commander.edit', $user->id)}}">{{$user->position_government}}</td>
								<td>
									<div class="list-icons">
										<a href="{{route('commander.delete', $user->id)}}" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
									</div>
								</td>
							</tr>
						@endforeach
						</tbody>
					</table>
				</div>
				<hr>
				{{$commander->links()}}
			</div>
		</div>
	</div>

</div>
@endsection
