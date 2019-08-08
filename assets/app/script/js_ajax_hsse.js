"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function() {

	$.fn.dataTable.Api.register('column().title()', function() {
		return $(this.header()).text().trim();
	});
	var initTable1 = function() {
		var table = $('#daftar_permintaan_pekerjaan');
		var sifat_pekerjaan = '';

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_pekerjaan_hsse.json',
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
				orderable: false,
			},{
				data: 'pekerjaan',
				title: 'Pekerjaan',
			},{
				data: 'vendor',
				title: 'Vendor',
			},{
				data: 'tanggal',
				title: 'Tanggal',
			},{
				data: 'sifat',
				title: 'Sifat',
				render: function(data, type, full, meta) {
					sifat_pekerjaan = data;
					return sifat_pekerjaan;
				},
			},{
				field: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				// priority: -1,
				width: 100,
				render: function(data, type, full, meta) {
					if (sifat_pekerjaan == "Swakelola") {
						return `<a href="rincian_permintaan_pekerjaan_swakelola.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (sifat_pekerjaan == "ABI") {
						return `<a href="rincian_permintaan_pekerjaan_abi.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (sifat_pekerjaan == "ABO") {
						return `<a href="rincian_permintaan_pekerjaan_abo.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else {
						return `<a href="#" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					}
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
	var initTable2 = function() {
		var table = $('#daftar_riwayat_pekerjaan');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_pekerjaan_ahli_teknik_2.json',
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
				orderable: false,
			},{
				data: 'pekerjaan',
				title: 'Pekerjaan',
			},{
				data: 'vendor',
				title: 'Vendor',
			},{
				data: 'tanggal',
				title: 'Tanggal',
			},{
				data: 'sifat',
				title: 'Sifat',
			},{
				data: 'status',
				title: 'Status',
				render: function(data, type, full, meta) {
					var stateSatu = "draft";
					var stateDua = "belum terverifikasi";
					var stateTiga = "terverifikasi";
					var stateEmpat = "ditolak";
					var stateLima = "berlangsung";
					var stateEnam = "ditunda";
					var stateTujuh = "selesai";

					if (data == stateSatu) {
						return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm btn-label-not-so-brand">Draft</span>';
					}
					else if (data == stateDua) {
						return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm btn-label-warning">Belum Terverifikasi</span>';
					}
					else if (data == stateTiga) {
						return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm btn-label-success">Terverifikasi</span>';
					}
					else if (data == stateEmpat) {
						return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm btn-label-danger">Ditolak</span>';
					}
					else if (data == stateLima) {
						return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm btn-label-brand">Berlangsung</span>';
					}
					else if (data == stateEnam) {
						return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm btn-label-not-so-danger">Ditunda</span>';
					}
					else if (data == stateTujuh) {
						return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm btn-label-primary">Selesai</span>';
					}
					else {
						return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm">' + data + '</span>';
					}

					// var status = {
					// 	terverifikasi: {'title': 'Terverifikasi', 'class': ' btn-label-success'},
					// 	ditolak: {'title': 'Ditolak', 'class': 'btn-label-danger'},
					// 	draft: {'title': 'Draft', 'class': 'btn-label-brand'},
					// 	berlangsung: {'title': 'Berlangsung', 'class': 'btn-label-brand'},
					// 	ditunda: {'title': 'Ditunda', 'class': 'btn-label-warning'},
					// 	selesai: {'title': 'Selesai', 'class': 'btn-label-dark'},
					// };
					// if (typeof status[data] === 'undefined') {
					// 	return data;
					// }
					// return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},{
				field: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_riwayat_pekerjaan.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
	var initTable3 = function() {
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
				orderable: false,
			},{
				data: 'jenis_sika',
				title: 'Jenis SIKA',
			},{
				data: 'no_sika',
				title: 'No. SIKA',
			},{
				data: 'status',
				title: 'Status',
				// width: 70,
				render: function(data, type, full, meta) {
					var status = {
						tidak_aktif: {'title': 'Tidak Aktif', 'class': 'btn-label-danger'},
						aktif: {'title': 'Aktif', 'class': 'btn-label-success'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},{
				field: 'rincian',
				title: 'Rincian',
				responsivePriority: -1,
				className: 'text-center',
				responsivePriority: -1,
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_riwayat_sika.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
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
	var initTable4 = function() {
		var table = $('#tbl_input_data_pekerja_baru');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/input_data_pekerja_baru.json',
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
				orderable: false,
			},{
				data: 'nama_pekerja',
				title: 'Nama Pekerja',
			},{
				data: 'kategori',
				title: 'Kategori',
			},{
				data: 'perusahaan',
				title: 'Perusahaan',
			},{
				field: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					return `
					<button type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="flaticon-more-1"></i>
					</button>
					<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
					<a href="rincian_data_pekerja.html" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary" href="#"> <i class="fa fa-clipboard-list"></i>Rincian</a>
					<button data-toggle="modal" data-target="#terima" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary" href="#"> <i class="fa fa-check"></i>Terima</button>
					<button data-toggle="modal" data-target="#tolak"  class="dropdown-item btn btn-secondary"> <i class="fa fa-times"></i>Tolak</button>`
					;
					/*return `
					<a href="rincian_data_pekerja.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> &nbsp;` +
					'<a data-toggle="modal" data-target="#terima" class="btn btn-sm btn-success" style="color:white;border-radius:20px">Terima</a> &nbsp;' +
					'<a data-toggle="modal" data-target="#tolak" class="btn btn-sm btn-danger" style="color:white;border-radius:20px">Tolak</a>';*/
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
	var initTable5 = function() {
		var table = $('#tbl_list_induksi_lapangan');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/list_induksi_lapangan.json',
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
				orderable: false,
			},{
				data: 'tanggal',
				title: 'Tanggal',
				orderable: false,
			},{
				data: 'lokasi_induksi_lapangan',
				title: 'Lokasi',
				orderable: false,
			}],
			columnDefs: [
			{
				targets: [0,1,2],
				className: 'text-center'
			}
			],
		});
	};
	var initTable6 = function() {
		var table = $('#tbl_list_daftar_pekerjaan');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/list_daftar_pekerjaan.json',
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
				orderable: false,
			},{
				data: 'tanggal',
				title: 'Tanggal',
			},{
				data: 'pekerjaan',
				title: 'Pekerjaan',
			},{
				data: 'posisi',
				title: 'Posisi',
			},{
				data: 'lokasi',
				title: 'Lokasi',
			},{
				data: 'status',
				title: 'Status',
				width: 120,
				render: function(data, type, full, meta) {
					var status = {
						berjalan: {'title': 'Sedang Berjalan', 'class': ' btn-label-danger'},
						selesai: {'title': 'Selesai', 'class': 'btn-label-success'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
		var table = $('#tbl_list_kehadiran');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/list_daftar_kehadiran.json',
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
				orderable: false,
			},{
				data: 'waktu',
				title: 'Waktu',
			},{
				data: 'lokasi',
				title: 'Lokasi',
			},{
				data: 'status',
				title: 'Status',
				render: function(data, type, full, meta) {
					var status = {
						keluar: {'title': 'Keluar', 'class': ' btn-label-danger'},
						masuk: {'title': 'Masuk', 'class': 'btn-label-success'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
	var initTable8 = function() {
		var table = $('#tbl_pekerjaan_saat_ini_pob');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/data_pekerja_baru.json',
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
				orderable: false,
			},{
				data: 'waktu_masuk',
				title: 'Waktu Masuk',
			},{
				data: 'nama_pekerja',
				title: 'Nama',
			},{
				data: 'status',
				title: 'Status',
			},{
				data: 'aktifitas',
				title: 'Aktifitas',
				width: 90,
				render: function(data, type, full, meta) {
					var status = {
						masuk: {'title': 'masuk', 'class': ' btn-label-success'},
						keluar: {'title': 'keluar', 'class': 'btn-label-danger'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:90%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},{
				data: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_data_pekerja.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
	var initTable9 = function() {
		var table = $('#tbl_input_data_pekerja');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/input_data_pekerja_baru.json',
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
				orderable: false,
			},{
				data: 'nama_pekerja',
				title: 'Nama Pekerja',
			},{
				data: 'no_id',
				title: 'No. ID',
			},{
				data: 'perusahaan',
				title: 'Perusahaan',
			},{
				data: 'status',
				title: 'Status',
				width: 120,
				render: function(data, type, full, meta) {
					var status = {
						Aktif: {'title': 'Aktif', 'class': ' btn-label-success'},
						Kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-warning'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},{
				data: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_data_pekerja.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
	var initTable10 = function() {
		var table = $('#tbl_list_nilai_12_slr');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/list_nilai_12_slr.json',
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
				orderable: false,
			},{
				data: 'jenis_tes',
				title: 'Jenis Tes',
				orderable: false,
			},{
				data: 'nilai',
				title: 'Nilai',
				orderable: false,
			}],
			columnDefs: [
			{
				targets: [0,1,2],
				className: 'text-center'
			}
			],
		});
	};
	var initTable11 = function() {
		var table = $('#daftar_sika_pembuatan');
		var status_sika = '';

		// begin first table
		table.DataTable({

			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_sika_pembuatan.json',
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
				orderable: false,
			},{
				data: 'nama_pekerjaan',
				title: 'Nama Pekerjaan',
			},{
				data: 'jenis_sika',
				title: 'Jenis SIKA',
			},{
				data: 'no_sika',
				title: 'No. SIKA',
			},{
				data: 'status',
				title: 'Status',
				// width: 70,
				render: function(data, type, full, meta) {
					var status = {
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang: {'title': 'Perpanjang', 'class': 'btn-label-warning'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					status_sika = data;
					return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
					return status_sika;
				},
			},{
				field: 'rincian',
				title: 'Rincian',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					if (status_sika == "baru") {
						return `
						<a href="rincian_pembuatan_sika.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (status_sika == "perpanjang") {
						return `
						<a href="rincian_perpanjang_sika.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					}
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
	var initTable12 = function() {
		var table = $('#daftar_sika_penyelesaian');

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
				orderable: false,
			},{
				data: 'jenis_sika',
				title: 'Jenis SIKA',
			},{
				data: 'no_sika',
				title: 'No. SIKA',
			},{
				data: 'status',
				title: 'Status',
				// width: 70,
				render: function(data, type, full, meta) {
					var status = {
						tidak_aktif: {'title': 'Tidak Aktif', 'class': 'btn-label-danger'},
						aktif: {'title': 'Aktif', 'class': 'btn-label-success'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},{
				field: 'rincian',
				title: 'Rincian',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_riwayat_sika.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
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
	var initTable13 = function() {
		var table = $('#daftar_pob');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_pob.json',
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
				orderable: false,
			},{
				data: 'nama',
				title: 'Nama',
			},{
				data: 'vendor',
				title: 'Vendor',
			},{
				data: 'pekerjaan',
				title: 'Pekerjaan',
			},{
				data: 'jabatan',
				title: 'Jabatan',
			},{
				data: 'status',
				title: 'Status',
				// width: 70,
				render: function(data, type, full, meta) {
					var status = {
						masuk: {'title': 'Masuk', 'class': 'btn-label-success'},
						keluar: {'title': 'Keluar', 'class': 'btn-label-danger'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:80%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
	return {
		//main function to initiate the module
		init: function() {
			initTable1();
			initTable2();
			initTable3();
			initTable4();
			initTable5();
			initTable6();
			initTable7();
			initTable8();
			initTable9();
			initTable10();
			initTable11();
			initTable12();
			initTable13();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});
