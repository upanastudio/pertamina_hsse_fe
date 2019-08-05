"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function() {

	$.fn.dataTable.Api.register('column().title()', function() {
		return $(this.header()).text().trim();
	});
	var initTable2 = function() {
		var table = $('#daftar_nama_pekerja');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_nama_pekerja_ahli_teknik.json',
				type: 'POST',
				data: {
					pagination: {
						perpage: 50,
					},
				},
			},
			columns: [
			{
				data: 'no',
				title: 'No.',
			},{
				data: 'nama',
				title: 'Nama',
			},{
				data: 'pekerjaan',
				title: 'Jabatan',
				className: 'text-center',
				orderable: false,
				width: 220,
				render: function(data, type, full, meta) {
					return `
					<input class="form-control" type="text" placeholder="input pekerjaan" kale" id="pekerjaan" name="pekerjaan">`;
				},
			},{
				field: 'aksi',
				title: 'Aksi',
				className: 'text-center',
				orderable: false,
				width: 220,
				render: function(data, type, full, meta) {
					return `
					<button type="button" class="btn btn-sm btn-secondary" style="border-radius:20px"> <i class="fa fa-times"></i> hapus</button>`;
				},
			}],
			columnDefs: [
			{
				targets: [0,1,2,3],
				className: 'text-center'
			}
			],
		});
	};
	var initTable3 = function() {
		var table = $('#daftar_sika');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_sika_ahli_teknik.json',
				type: 'POST',
				data: {
					pagination: {
						perpage: 50,
					},
				},
			},
			columns: [
			{
				data: 'no',
				title: 'No.',
			},{
				data: 'no_sika',
				title: 'No. SIKA',
			},{
				data: 'nama_pekerjaan',
				title: 'Nama Pekerjaan',
			},{
				data: 'jenis_sika',
				title: 'Jenis SIKA',
			},{
				data: 'status',
				title: 'Status',
				render: function(data, type, full, meta) {
					var status = {
						terverifikasi: {'title': 'terverifikasi', 'class': ' btn-label-success'},
						ditutup: {'title': 'Ditutup', 'class': 'btn-label-danger'},
						aktif: {'title': 'Aktif', 'class': 'btn-label-success'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},{
				field: 'aksi',
				title: 'Aksi',
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_sika.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
				},
			}],
			columnDefs: [
			{
				targets: [0,1,2,3,4,5],
				className: 'text-center'
			}
			],
		});
	};
	var initTable7 = function() {
		var table = $('#daftar_pekerjaan_alpha');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_pekerjaan_ahli_teknik.json',
				type: 'POST',
				data: {
					pagination: {
						perpage: 50,
					},
				},
			},
			columns: [
			{
				data: 'no',
				title: 'No.',
			},{
				data: 'pekerjaan',
				title: 'Pekerjaan',
			},{
				data: 'vendor',
				title: 'Pekerjaan',
			},{
				data: 'tanggal',
				title: 'Tanggal',
			},{
				data: 'status',
				title: 'Status',
				render: function(data, type, full, meta) {
					var status = {
						terverifikasi: {'title': 'terverifikasi', 'class': ' btn-label-success'},
						ditolak: {'title': 'Ditolak', 'class': 'btn-label-warning'},
						draft: {'title': 'Draft', 'class': 'btn-label-brand'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:70%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},{
				field: 'aksi',
				title: 'Aksi',
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_pekerjaan.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
				},
			}],
			columnDefs: [
			{
				targets: [0,1,2,3,4,5],
				className: 'text-center'
			}
			],
		});
	};
	var initTable8 = function() {
		var table = $('#daftar_sika_pekerjaan');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_sika_pekerjaan_ahli_teknik.json',
				type: 'POST',
				data: {
					pagination: {
						perpage: 50,
					},
				},
			},
			columns: [
			{
				data: 'no',
				title: 'No.',
			},{
				data: 'jenis_sika',
				title: 'Jenis SIKA',
			},{
				data: 'no_sika',
				title: 'No. SIKA',
			},{
				data: 'status',
				title: 'Status',
				render: function(data, type, full, meta) {
					var status = {
						tidak_aktif: {'title': 'Tidak Aktif', 'class': 'btn-label-danger'},
						aktif: {'title': 'Aktif', 'class': 'btn-label-success'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:70%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},{
				field: 'rincian',
				title: 'Rincian',
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_sika.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
				},
			},{
				field: 'aksi',
				title: 'Aksi',
				width: 100,
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<button type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="flaticon-more-1"></i>
					</button>
					<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
					<button style="margin-bottom:5px;" class="dropdown-item btn btn-secondary" href="#"> <i class="fa fa-angle-double-up"></i> Extend</button>
					<button style="margin-bottom:5px;" class="dropdown-item btn btn-secondary" href="#"> <i class="fa fa-ban"></i> Suspend</button>
					<a href="tutup_sika.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-times"></i> Close</a>` 
					;
					/*return `
					<button class="btn btn-sm btn-primary" style="color:white;border-radius:20px"> <i class="fa fa-angle-double-up"></i> Perbarui</button>&nbsp; `+
					'<button class="btn btn-sm btn-warning" style="color:white;border-radius:20px"> <i class="fa fa-angle-double-up"></i> Suspend</button>&nbsp;'+
					'<a href="tutup_sika.html" class="btn btn-sm btn-danger" style="color:white;border-radius:20px"> <i class="fa fa-times"></i> Tutup</a>';*/
				},
			}],
			columnDefs: [
			{
				targets: [0,1,2,3,4],
				className: 'text-center'
			}
			],
		});
	};
	return {
		//main function to initiate the module
		init: function() {
			initTable2();
			initTable3();
			initTable7();
			initTable8();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});