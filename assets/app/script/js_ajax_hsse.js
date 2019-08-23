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
				url: '../source/daftar_permintaan_pekerjaan.json',
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
					return data;
				},
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
						'pengajuan awal': {'title': 'Pengajuan Awal', 'class': 'btn-label-danger'},
						'pengajuan ulang': {'title': 'Pengajuan Ulang', 'class': 'btn-label-danger'},
						perpanjang: {'title': 'Perpanjang', 'class': 'btn-label-danger'},
						tutup:{'title': 'Tutup', 'class': 'btn-label-danger'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
				targets: [0,1,2,3,4,5,6],
				className: 'text-center'
			}
			],
		});
	};
	var initTable2 = function() {
		var table = $('#daftar_riwayat_pekerjaan');
		var status_validasi = "";

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_pekerjaan_hsse_2.json',
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
				data: 'validasi',
				title: 'Validasi',
				responsivePriority: -1,
				render: function(data, type, full, meta) {
					if (data == "hsse") {
						if (status_validasi == "progress" || status_validasi == "selesai") {
							return `
							`;
						}
						else {
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
						}
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
						'pengajuan awal': {'title': 'Pengajuan Awal', 'class': 'btn-label-danger'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-danger'},
						'pengajuan ulang' : {'title' : 'Pengajuan Ulang', 'class' : 'btn-label-danger'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						progress : {'title' : 'Progress', 'class' : 'btn-label-warning'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-danger'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-danger'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success'}
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					status_validasi = data;
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
				targets: [0,1,2,3,4,5,6],
				className: 'text-center'
			}
			],
		});
	};
	var initTable3 = function() {
		var table = $('#daftar_sika_pekerjaan');
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
						'pengajuan awal': {'title': 'Pengajuan Awal', 'class': 'btn-label-danger'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-danger'},
						'pengajuan ulang' : {'title' : 'Pengajuan Ulang', 'class' : 'btn-label-danger'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						progress : {'title' : 'Progress', 'class' : 'btn-label-warning'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-danger'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-danger'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success'}
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
					<a href="rincian_riwayat_sika.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
				targets: [0,1,2,3,4,5,6],
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
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
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
						'pengajuan awal': {'title': 'Pengajuan Awal', 'class': 'btn-label-danger'},
						'pengajuan ulang': {'title': 'Pengajuan Ulang', 'class': 'btn-label-danger'},
						'perpanjang': {'title': 'Perpanjang', 'class': 'btn-label-danger'},
						'tutup': {'title': 'Tutup', 'class': 'btn-label-danger'},
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
					if (status_sika == "pengajuan awal") {
						return `
						<a href="rincian_permintaan_sika_pembuatan.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (status_sika == "perpanjang") {
						return `
						<a href="rincian_permintaan_sika_perpanjang.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (status_sika == "pengajuan ulang"){
						return `
						<a href="rincian_permintaan_sika_resubmit.html" class="btn btn-sm btn-brand" style="color:white;border-radius:20px">Rincian</a> `;
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
				render: function(data, type, full, meta) {
					var status = {
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
						'pengajuan awal': {'title': 'Pengajuan Awal', 'class': 'btn-label-danger'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-danger'},
						'pengajuan ulang' : {'title' : 'Pengajuan Ulang', 'class' : 'btn-label-danger'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						progress : {'title' : 'Progress', 'class' : 'btn-label-warning'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-danger'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-danger'}
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
						'pengajuan awal': {'title': 'Pengajuan Awal', 'class': 'btn-label-danger'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-danger'},
						'pengajuan ulang' : {'title' : 'Pengajuan Ulang', 'class' : 'btn-label-danger'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						progress : {'title' : 'Progress', 'class' : 'btn-label-warning'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-danger'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-danger'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success'}
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
					<a href="rincian_riwayat_sika.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
				targets: [0,1,2,3,4,5,6],
				className: 'text-center'
			}
			],
		});
	};
	var initTable14 = function() {
		// begin first table
		var table = $('#daftar_pob').DataTable({
			responsive: true,
			// Pagination settings
			dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
			// read more: https://datatables.net/examples/basic_init/dom.html

			lengthMenu: [5, 10, 25, 50],

			pageLength: 10,

			language: {
				'lengthMenu': 'Display _MENU_',
			},

			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_pob.json',
				type: 'POST',
				data: {
					// parameters for custom backend script demo
					columnsDef: [
					'no', 'depot', 'vendor', 'pekerjaan', 'sifat',
					'tanggal', 'status', 'aksi',],
				},
			},
			columns: [
			{
				data: 'no',
				title: 'No.',
				orderable: false,
			},{
				data: 'kategori',
				title: 'Kategori',
			},{
				data: 'nama',
				title: 'Nama',
			},{
				data: 'jabatan',
				title: 'Jabatan',
			},{
				data: 'vendor',
				title: 'Vendor',
			},{
				data: 'tanggal',
				title: 'Tanggal',
			},{
				data: 'waktu',
				title: 'Waktu',
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

			initComplete: function() {
				this.api().columns().every(function() {
					var column = this;

					switch (column.title()) {
						case 'Kategori':
						column.data().unique().sort().each(function(d, j) {
							$('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
						});
						break;
						// case 'Waktu':
						// column.data().unique().sort().each(function(d, j) {
						// 	$('.kt-input[data-col-index="5"]').append('<option value="' + d + '">' + d + '</option>');
						// });
						// break;
					}
				});
			},

			columnDefs: [
			{
				targets: [0,1,2,3,4,5,6],
				className: 'text-center'
			}
			],
		});

		var filter = function() {
			var val = $.fn.dataTable.util.escapeRegex($(this).val());
			table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
		};

		var asdasd = function(value, index) {
			var val = $.fn.dataTable.util.escapeRegex(value);
			table.column(index).search(val ? val : '', false, true);
		};

		$('#kt_search_kategori').on('change', function(e) {
			e.preventDefault();
			var params = {};
			$('.kt-input').each(function() {
				var i = $(this).data('col-index');
				if (params[i]) {
					params[i] += '|' + $(this).val();
				}
				else {
					params[i] = $(this).val();
				}
			});
			$.each(params, function(i, val) {
				// apply search params to datatable
				table.column(i).search(val ? val : '', false, false);
			});
			table.table().draw();
		});

		$('#kt_search_waktu').on('change', function(e) {
			e.preventDefault();
			var params = {};
			$('.kt-input').each(function() {
				var i = $(this).data('col-index');
				if (params[i]) {
					params[i] += '|' + $(this).val();
				}
				else {
					params[i] = $(this).val();
				}
			});
			$.each(params, function(i, val) {
				// apply search params to datatable
				table.column(i).search(val ? val : '', false, false);
			});
			table.table().draw();
		});

		$('#kt_search_all').on( 'keyup', function () {
		    table.search( this.value ).draw();
		} );

		$('#kt_reset').on('click', function(e) {
			e.preventDefault();
			$('.kt-input').each(function() {
				$(this).val('');
				table.column($(this).data('col-index')).search('', false, false);
			});
			table.table().draw();
		});
		$('#kt_datepicker').datepicker({
            todayHighlight: true,
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>',
            },
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
			initTable14();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});
