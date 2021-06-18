@extends('back.layout.master')

@php
$title = "Quản lý khen thưởng";
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
                    <a href="{{route('khenthuong.create')}}" class="fa fa-plus"> <span>Add</span></a>
                    @php } @endphp
                </div>
            </div>
		</div>

		<div class="table-responsive">
			<table class="table" id="datatable">
				<thead>
					<tr>
						<th>Tên học viên</th>
						<th>Nội dung</th>
						<th>Ngày khen thưởng</th>
                        @php if($currentUser->is_admin == 1) { @endphp
						<th>Action</th>
                        @php } @endphp
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Nguyễn Văn Hoàn</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>23/1/2021</td>
						<td>
                            <div class="list-icons">
                                <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Trình Văn Lực</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>26/2/2021</td>
						<td>
                            <div class="list-icons">
                                <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Lê Đại Việt</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>14/05/2021</td>
						<td>
                            <div class="list-icons">
                                <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Nguyễn Văn Quảng</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>23/1/2021</td>
						<td>
                            <div class="list-icons">
                                <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Lê Thị Tốt</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>23/1/2021</td>
						<td>
                            <div class="list-icons">
                                <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Nguyễn Hồng Lượng</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>23/1/2021</td>
						<td>
                            <div class="list-icons">
                                <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Trần Khánh Tuấn</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>23/1/2021</td>
						<td>
                            <div class="list-icons">
                                <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Nguyễn Khánh An</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>23/1/2021</td>
						<td>
                            <div class="list-icons">
                                <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                            </div>
                        </td>
					</tr>
				@foreach($khenThuongs as $khenThuong)
					<tr>
						<td>{{$khenThuong->id}}</td>
						<td><a href="{{route('khenthuong.show', $khenThuong->id)}}">{{$khenThuong->username}}</td>
						<td>{{$khenThuong->content}}</td>
						<td>{{$khenThuong->date_echievement}}</td>
                        @php if($currentUser->is_admin == 1) { @endphp
                        <td>
                            <div class="list-icons">
                                <a href="{{route('khenthuong.edit', $khenThuong->id)}}" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                <a href="{{route('khenthuong.delete', $khenThuong->id)}}" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
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
