"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function() {

	$.fn.dataTable.Api.register('column().title()', function() {
		return $(this.header()).text().trim();
	});
	var initTable1 = function() {
		var table = $('#daftar_permintaan_pekerjaan');

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
				field: 'aksi',
				title: 'Aksi',
				className: 'text-center',
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					return `
					<a href="rincian_permintaan_pekerjaan.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
				data: 'status',
				title: 'Status',
				render: function(data, type, full, meta) {
					var status = {
						terverifikasi: {'title': 'terverifikasi', 'class': ' btn-label-success'},
						ditolak: {'title': 'Ditolak', 'class': 'btn-label-danger'},
						draft: {'title': 'Draft', 'class': 'btn-label-brand'},
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
				width: 70,
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
<<<<<<< HEAD
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
				data: 'validasi',
				title: 'Validasi',
				responsivePriority: -1,
				render: function(data, type, full, meta) {
					if (data == "hsse") {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					} else if (data == "gsi") {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					} else {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					}
				},
			},{
				data: 'status',
				title: 'Status',
				// width: 70,
				render: function(data, type, full, meta) {
					var status = {
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang: {'title': 'Perpanjang', 'class': 'btn-label-warning'},
						tutup: {'title': 'Tutup', 'class': 'btn-label-success'},
						resubmit: {'title': 'Resubmit', 'class': 'btn-label-bold bold-status'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					status_sika = data;
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
						<a href="rincian_permintaan_sika_pembuatan.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (status_sika == "perpanjang") {
						return `
						<a href="rincian_permintaan_sika_perpanjang.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (status_sika == "tutup"){
						return `
						<a href="rincian_permintaan_sika_tutup.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else {
						return `
						<a href="rincian_permintaan_sika_pembuatan.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					}
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
	var initTable12 = function() {
		var table = $('#daftar_semua_sika');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_sika_semua.json',
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
				data: 'validasi',
				title: 'Validasi',
				responsivePriority: -1,
				render: function(data, type, full, meta) {
					if (data == "hsse") {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					} else if (data == "gsi") {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					} else {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					}
				},
			},{
				data: 'status',
				title: 'Status',
				// render: function(data, type, full, meta) {
				// 	var stateSatu = "baru";
				// 	var stateDua = "berjalan";
				// 	var stateTiga = "ditunda";
				// 	var stateEmpat = "perpanjang";
				// 	var stateLima = "tutup";
				// 	var stateEnam = "ditolak";
				// 	var stateTujuh = "kadaluarsa";
				//
				// 	if (data == stateSatu) {
				// 		return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm btn-label-not-so-brand">Baru</span>';
				// 	}
				// 	else if (data == stateDua) {
				// 		return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm btn-label-brand">Berjalan</span>';
				// 	}
				// 	else if (data == stateTiga) {
				// 		return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm btn-label-warning">Ditunda</span>';
				// 	}
				// 	else if (data == stateEmpat) {
				// 		return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm btn-label-not-so-danger">Perpanjang</span>';
				// 	}
				// 	else if (data == stateLima) {
				// 		return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm btn-label-primary">Tutup</span>';
				// 	}
				// 	else if (data == stateEnam) {
				// 		return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm btn-label-danger">Ditolak</span>';
				// 	}
				// 	else if (data == stateTujuh) {
				// 		return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm btn-label-dark">Kadaluarsa</span>';
				// 	}
				// 	else {
				// 		return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm">' + data + '</span>';
				// 	}
				// },
				render: function(data, type, full, meta) {
					var status = {
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning'},
						resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-success'}
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
	var initTable14 = function() {
		var table = $('#daftar_sika_cold_pekerjaan');
		var tunda = "";

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_sika_semua.json',
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
				data: 'validasi',
				title: 'Validasi',
				responsivePriority: -1,
				render: function(data, type, full, meta) {
					if (data == "hsse") {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					} else if (data == "gsi") {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled checked id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					} else {
						return `
						<div class="kt-checkbox-list">
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
								<span></span>
							</label>
							<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
								<input disabled id="gsi_validation" name="gsi_validation" type="checkbox">GSI
								<span></span>
							</label>
						</div>`;
					}
				},
			},{
				data: 'status',
				title: 'Status',
				render: function(data, type, full, meta) {
					var status = {
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
						draft: {'title': 'Draft', 'class': 'btn-label-dark dark-blue'},
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning'},
						resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-success'}
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					tunda = data;
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
					return tunda;
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
				responsivePriority: -1,
				width: 100,
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					if (tunda == "ditolak"||tunda =="ditunda"||tunda == "tutup") {
						return `
						<btn disabled href="#.html" class="btn btn-sm btn-secondary" style="background-color:#f4f5f8;border-radius:20px">Tunda</btn>`;
					} else {
						return `
						<a href="penundaan_sika.html" class="btn btn-sm btn-danger" style="color:white;border-radius:20px">Tunda</a>`;
					}

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
	// var initTable15 = function() {
	// 	var table = $('#daftar_sika_pekerjaan');
	//
	// 	// begin first table
	// 	table.DataTable({
	// 		responsive: true,
	// 		searchDelay: 500,
	// 		processing: true,
	// 		serverSide: false,
	// 		ajax: {
	// 			url: '../source/daftar_sika_pekerjaan_ahli_teknik.json',
	// 			type: 'POST',
	// 			data: {
	// 				pagination: {
	// 					perpage: 50,
	// 				},
	// 			},
	// 		},
	// 		columns: [
	// 		{
	// 			data: 'no',
	// 			title: 'No.',
	// 		},{
	// 			data: 'jenis_sika',
	// 			title: 'Jenis SIKA',
	// 		},{
	// 			data: 'no_sika',
	// 			title: 'No. SIKA',
	// 		},{
	// 			data: 'validasi',
	// 			title: 'Validasi',
	// 			responsivePriority: -1,
	// 			render: function(data, type, full, meta) {
	// 				return `
	// 				<div class="kt-checkbox-list">
	// 				<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success validasi_check">
	// 				<input disabled checked="" type="checkbox" id="check_hsse" name="check_hsse"> HSSE
	// 				<span></span>
	// 				</label>
	// 				<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success validasi_check">
	// 				<input disabled checked="" type="checkbox" id="check_gsi" name="check_hsse"> GSI
	// 				<span></span>
	// 				</label>
	// 				</div>`;
	// 			},
	// 		},{
	// 			data: 'status',
	// 			title: 'Status',
	// 			render: function(data, type, full, meta) {
	// 				var status = {
	// 					kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
	// 					draft: {'title': 'Draft', 'class': 'btn-label-dark dark-blue'},
	// 					baru: {'title': 'Baru', 'class': 'btn-label-brand'},
	// 					perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning'},
	// 					resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status'},
	// 					ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
	// 					berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary'},
	// 					ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status'},
	// 					selesai : {'title' : 'Selesai', 'class' : 'btn-label-success'}
	// 				};
	// 				if (typeof status[data] === 'undefined') {
	// 					return data;
	// 				}
	// 				return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
	// 			},
	// 		},{
	// 			field: 'rincian',
	// 			title: 'Rincian',
	// 			className: 'text-center',
	// 			orderable: false,
	// 			render: function(data, type, full, meta) {
	// 				return `
	// 				<a href="rincian_sika.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
	// 			},
	// 		},{
	// 			field: 'aksi',
	// 			title: 'Aksi',
	// 			responsivePriority: -1,
	// 			width: 100,
	// 			className: 'text-center',
	// 			orderable: false,
	// 			render: function(data, type, full, meta) {
	// 				return `
	// 				<button type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	// 				<i class="flaticon-more-1"></i>
	// 				</button>
	// 				<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
	// 				<a href="perpanjang_sika.html" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary"> <i class="fa fa-angle-double-up"></i> Perpanjang</a>
	// 				<a href="tutup_sika.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-check"></i> Selesai</a>`
	// 				;
	//
	// 			},
	// 		}],
	// 		columnDefs: [
	// 		{
	// 			targets: [0,1,2,3,4,5,6],
	// 			className: 'text-center'
	// 		}
	// 		],
	// 	});
	// };
=======
>>>>>>> ded8825bb35afc491e313bd116149c79adcfa0a6
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
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});