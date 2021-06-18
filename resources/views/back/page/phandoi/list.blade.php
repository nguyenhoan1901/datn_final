@extends('back.layout.master')

@php
$title = "Quản lý phân đội";
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
                    <a href="{{route('phandoi.create')}}" class="fa fa-plus"> <span>Add</span></a>
                    @php } @endphp
                </div>
            </div>
		</div>

		<div class="table-responsive">
			<table class="table" id="datatable">
				<thead>
					<tr>
						<th>Tên phân đội</th>
						<th>Trường đại học</th>
						<th>Phân đội trưởng</th>
                        @php if($currentUser->is_admin == 1) { @endphp
						<th>Action</th>
                        @php } @endphp
					</tr>
				</thead>
				<tbody>
				@foreach($phanDois as $phanDoi)
					<tr>
						<td>{{$phanDoi->name_group}}</td>
						<td>{{$phanDoi->school}}</td>
						<td>Chưa có</td>
                        @php if($currentUser->is_admin == 1){ @endphp
                        <td>
                            <div class="list-icons">
                                <a href="{{route('phandoi.edit', $phanDoi->id)}}" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="{{route('phandoi.delete', $phanDoi->id)}}" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
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
