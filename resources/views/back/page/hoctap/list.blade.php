@extends('back.layout.master')

@php
$title = "Quản lý kết quả học tập";
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
                    <a href="{{route('hoctap.create')}}" class="fa fa-plus"> <span>Add</span></a>
                </div>
            </div>
		</div>

		<div class="table-responsive">
			<table class="table" id="datatable">
				<thead>
					<tr>
						<th>Tên học viên</th>
						<th>Kỳ học</th>
						<th>CPA</th>
						<th>GPA</th>
						<th>Chi tiết môn nợ</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Nguyễn Văn Hoàn</td>
						<td>7</td>
						<td>2.9</td>
						<td>3.1</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Nguyễn Văn Hoàn</td>
						<td>7</td>
						<td>2.9</td>
						<td>3.1</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Nguyễn Văn Hoàn</td>
						<td>7</td>
						<td>2.9</td>
						<td>3.1</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Nguyễn Đại Việt</td>
						<td>3</td>
						<td>2.6</td>
						<td>3.0</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Trần Văn Quảng</td>
						<td>4</td>
						<td>2.2</td>
						<td>2.6</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Lê Văn Trúc</td>
						<td>9</td>
						<td>3.3</td>
						<td>3.7</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Lê Thị Tốt</td>
						<td>7</td>
						<td>3.6</td>
						<td>3.8</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Lại Văn Sâm</td>
						<td>8</td>
						<td>3.1</td>
						<td>2.9</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
					<tr>
						<td>Nguyễn Quang Trường</td>
						<td>7</td>
						<td>2.9</td>
						<td>3.1</td>
						<td><a href="">Xem chi tiết</a></td>
						<td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
				@foreach($hocTaps as $hocTap)
					<tr>
						<td><a href="{{route('hoctap.show', $hocTap->id)}}">{{$hocTap->name}}</td>
						<td>{{$hockys[$hocTap->ky_hoc]}}</td>
						<td>{{$hocTap->cpa}}</td>
						<td>{{$hocTap->gpa}}</td>
						<td>{{$hocTap->subject_debt}}</td>
						<td>{{$status[$hocTap->status]}}</td>
                        <td>
                            <div class="list-icons">
                                @if($currentUser->is_admin == 1 || $hocTap->status == 0)
                                    <a href="{{route('hoctap.edit', $hocTap->id)}}" class="list-icons-item text-primary-600"><i class="icon-pencil7"></i></a>
                                    <a href="{{route('hoctap.delete', $hocTap->id)}}" onclick="return deleteConfirm()" class="list-icons-item text-danger-600"><i class="icon-trash"></i></a>
                                @endif
                            </div>
                        </td>
					</tr>
				@endforeach
				</tbody>
			</table>
		</div>
	</div>
	<!-- /basic responsive table -->

</div>
@endsection
