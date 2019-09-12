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
						<div style="pointer-events: none" class="kt-checkbox-list">
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
						<div style="pointer-events: none" class="kt-checkbox-list">
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
						<div style="pointer-events: none" class="kt-checkbox-list">
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
						if (full.status == "perpanjang") {
							return `<a href="rincian_permintaan_pekerjaan_swakelola_perpanjang.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						} else if (full.status == "tutup") {
							return `<a href="rincian_permintaan_pekerjaan_swakelola_tutup.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						} else {
							return `<a href="rincian_permintaan_pekerjaan_swakelola.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						}
					} else if (sifat_pekerjaan == "ABI") {
						if (full.status == "perpanjang") {
							return `<a href="rincian_permintaan_pekerjaan_abi_perpanjang.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						} else if (full.status == "tutup") {
							return `<a href="rincian_permintaan_pekerjaan_abi_tutup.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						} else {
							return `<a href="rincian_permintaan_pekerjaan_abi.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						}
					} else if (sifat_pekerjaan == "ABO") {
						if (full.status == "perpanjang") {
							return `<a href="rincian_permintaan_pekerjaan_abo_perpanjang.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						} else if (full.status == "tutup") {
							return `<a href="rincian_permintaan_pekerjaan_abo_tutup.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						} else {
							return `<a href="rincian_permintaan_pekerjaan_abo.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
						}
					} else {
						return `<a href="#" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
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
						if (full.status == "progress" || full.status == "selesai") {
							return `
							`;
						}
						else {
							return `
							<div style="pointer-events: none" class="kt-checkbox-list">
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
						if (full.status == "progress" || full.status == "selesai") {
							return `
							`;
						}
						else {
							return `
							<div style="pointer-events: none" class="kt-checkbox-list">
								<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
									<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
									<span></span>
								</label>
								<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
									<input disabled checked id="gsi_validation" name="gsi_validation" type="checkbox">GSI
									<span></span>
								</label>
							</div>`;
						}
					} else {
						return `
						<div style="pointer-events: none" class="kt-checkbox-list">
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
					var status = {
						kadaluarsa: {'href': 'rincian_pekerjaan_kadaluarsa.html'},
						'pengajuan awal': {'href': 'rincian_riwayat_pekerjaan.html'},
						perpanjang : {'href': 'rincian_riwayat_pekerjaan.html'},
						'pengajuan ulang' : {'href': 'rincian_pekerjaan_pengajuan_ulang.html'},
						ditolak : {'href': 'rincian_pekerjaan_ditolak.html'},
						progress : {'href': 'rincian_pekerjaan_berlangsung.html'},
						ditunda : {'href': 'rincian_pekerjaan_ditunda.html'},
						tutup : {'href': 'rincian_riwayat_pekerjaan.html'},
						selesai : {'href': 'rincian_pekerjaan_selesai.html'}
					};
					return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
						if (full.status == "progress" || full.status == "selesai") {
							return `
							`;
						}
						else {
							return `
							<div style="pointer-events: none" class="kt-checkbox-list">
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
						if (full.status == "progress" || full.status == "selesai") {
							return `
							`;
						}
						else {
							return `
							<div style="pointer-events: none" class="kt-checkbox-list">
								<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
									<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
									<span></span>
								</label>
								<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
									<input disabled checked id="gsi_validation" name="gsi_validation" type="checkbox">GSI
									<span></span>
								</label>
							</div>`;
						}
					} else {
						return `
						<div style="pointer-events: none" class="kt-checkbox-list">
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
					var status = {
						kadaluarsa: {'href': 'rincian_sika_kadaluarsa.html'},
						'pengajuan awal': {'href': 'rincian_sika_baru.html'},
						perpanjang : {'href': 'rincian_sika_perpanjang.html'},
						'pengajuan ulang' : {'href': 'rincian_sika_resubmit.html'},
						ditolak : {'href': 'rincian_sika_ditolak.html'},
						progress : {'href': 'rincian_riwayat_sika.html'},
						ditunda : {'href': 'rincian_sika_tunda.html'},
						tutup : {'href': 'rincian_sika_tutup.html'},
						selesai : {'href': 'rincian_riwayat_sika.html'}
					};
					return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
				},
			},{
				field: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				width: 100,
				className: 'text-center',
				orderable: false,
				/*render: function(data, type, full, meta) {
					if (tunda == "ditolak"||tunda =="ditunda"||tunda == "tutup") {
						return `
						<btn disabled href="#.html" class="btn btn-sm btn-secondary" style="background-color:#f4f5f8;border-radius:20px">Tunda</btn>`;
					} else {
						return `
						<a href="penundaan_sika.html" class="btn btn-sm btn-danger" style="color:white;border-radius:20px">Tunda</a>`;
					}

				},*/
				render: function(data, type, full, meta) {
					var status = {
						draft: {'class': 'btn-label-bold bold-status'},
						'pengajuan awal': {'class': 'btn-label-danger'},
						'pengajuan ulang': {'class': 'btn-label-danger'},
						perpanjang: {'class': 'btn-label-danger'},
						ditolak: {'class': 'btn-label-danger'},
						tutup: {'class': 'btn-label-danger'},
						ditunda: {'class': 'btn-label-danger'},
						progress: {'class': 'btn-label-warning'},
						selesai: {'class': 'btn-label-success'},
						kadaluarsa: {'class': 'btn-label-dark'},
					};
					if (status[full.status].class == 'btn-label-danger') {
						return `
						<button  type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<i class="flaticon-more-1"></i>
						</button>
						<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
						<button disabled="" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary"> <i class="fa fa-angle-double-up"></i> Perpanjang</button>
						<a href="tutup_sika_cold.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-ban"></i> Tutup</a>` 
						;
					}
					return `
					<button type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="flaticon-more-1"></i>
					</button>
					<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
					<a href="perpanjang_sika_cold.html" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary"> <i class="fa fa-angle-double-up"></i> Perpanjang</button>
					<a href="tutup_sika_cold.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-ban"></i> Tutup</a>` 
					;
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
						<div style="pointer-events: none" class="kt-checkbox-list">
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
						<div style="pointer-events: none" class="kt-checkbox-list">
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
						<div style="pointer-events: none" class="kt-checkbox-list">
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
						<a href="rincian_permintaan_sika_pembuatan.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (status_sika == "perpanjang") {
						return `
						<a href="rincian_permintaan_sika_perpanjang.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (status_sika == "pengajuan ulang"){
						return `
						<a href="rincian_permintaan_sika_resubmit.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
					} else if (status_sika == "tutup"){
						return `
						<a href="rincian_permintaan_sika_tutup.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
					} else {
						return `
						<a href="rincian_permintaan_sika_pembuatan.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a> `;
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
						if (full.status == "progress" || full.status == "selesai") {
							return `
							`;
						}
						else {
							return `
							<div style="pointer-events: none" class="kt-checkbox-list">
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
						if (full.status == "progress" || full.status == "selesai") {
							return `
							`;
						}
						else {
							return `
							<div style="pointer-events: none" class="kt-checkbox-list">
								<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
									<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
									<span></span>
								</label>
								<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
									<input disabled checked id="gsi_validation" name="gsi_validation" type="checkbox">GSI
									<span></span>
								</label>
							</div>`;
						}
					} else {
						return `
						<div style="pointer-events: none" class="kt-checkbox-list">
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
					var status = {
						kadaluarsa: {'href': 'rincian_sika_kadaluarsa.html'},
						'pengajuan awal': {'href': 'rincian_sika_baru.html'},
						perpanjang : {'href': 'rincian_sika_perpanjang.html'},
						'pengajuan ulang' : {'href': 'rincian_sika_resubmit.html'},
						ditolak : {'href': 'rincian_sika_ditolak.html'},
						progress : {'href': 'rincian_riwayat_sika.html'},
						ditunda : {'href': 'rincian_sika_tunda.html'},
						tutup : {'href': 'rincian_sika_tutup.html'},
						selesai : {'href': 'rincian_riwayat_sika.html'}
					};
					return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
				url: '../source/daftar_sika_pekerjaan_hsse_cold.json',
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
						if (full.status == "progress" || full.status == "selesai") {
							return `
							`;
						}
						else {
							return `
							<div style="pointer-events: none" class="kt-checkbox-list">
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
						if (full.status == "progress" || full.status == "selesai") {
							return `
							`;
						}
						else {
							return `
							<div style="pointer-events: none" class="kt-checkbox-list">
								<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
									<input disabled checked id="hsse_validation" name="hsse_validation" type="checkbox">HSSE
									<span></span>
								</label>
								<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success">
									<input disabled checked id="gsi_validation" name="gsi_validation" type="checkbox">GSI
									<span></span>
								</label>
							</div>`;
						}
					} else {
						return `
						<div style="pointer-events: none" class="kt-checkbox-list">
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
					var status = {
						kadaluarsa: {'href': 'rincian_sika_kadaluarsa.html'},
						'pengajuan awal': {'href': 'rincian_sika_baru.html'},
						perpanjang : {'href': 'rincian_sika_perpanjang.html'},
						'pengajuan ulang' : {'href': 'rincian_sika_resubmit.html'},
						ditolak : {'href': 'rincian_sika_ditolak.html'},
						progress : {'href': 'rincian_riwayat_sika.html'},
						ditunda : {'href': 'rincian_sika_tunda.html'},
						tutup : {'href': 'rincian_sika_tutup.html'},
						selesai : {'href': 'rincian_riwayat_sika.html'}
					};
					return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
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
			dom: `<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
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
				data: 'null',
				title: 'No',
				render: function (data, type, row, meta) {
					return meta.row + meta.settings._iDisplayStart + 1;
				},
				// title: 'No.',
				// orderable: false,
			},{
				data: 'tanggal',
				title: 'Tanggal',
			},{
				data: 'waktu',
				title: 'Waktu',
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
							$('.kt-input[data-col-index="3"]').append('<option value="' + d + '">' + d + '</option>');
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
				className: 'text-center',
				orderable: false,
			}
			],
		});

		table.on( 'order.dt search.dt', function () {
	        table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
	            cell.innerHTML = i+1;
	        } );
	    } ).draw();

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

		$.fn.datepicker.dates['id'] = {
		    days: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
		    daysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
		    daysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
		    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
		    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
		    today: "Hari ini",
		    clear: "Reset",
		    format: "dd MM yyyy",
		    titleFormat: "MM yyyy"
		};

		$('#kt_search_waktu').datepicker({
            todayHighlight: true,
			language: 'id',
			rtl: KTUtil.isRTL(),
            todayBtn: "linked",
            clearBtn: true,
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>',
            },
        }).datepicker("setDate", new Date());
	};
	var initTable15 = function() {
		function format ( d, tds ) {
			var trs='';
			$.each($(d.no_child),function(key,value){
				var validasi = `
				<div class="kt-checkbox-list">
				<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success validasi_check">
				<input disabled checked="" type="checkbox" id="check_hsse" name="check_hsse"> HSSE
				<span></span>
				</label>
				<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success validasi_check">
				<input disabled checked="" type="checkbox" id="check_gsi" name="check_hsse"> GSI
				<span></span>
				</label>
				</div>`;

				var status = {
					draft: {'title': 'Draft', 'class': 'btn-lablel-bold bold-status', 'href': 'edit_pekerjaan_abi.html'},
					'pengajuan awal': {'title': 'Pengajuan Awal', 'class': 'btn-label-danger', 'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
					'pengajuan ulang': {'title': 'Pengajuan Ulang', 'class': 'btn-label-danger','href': 'rincian_pekerjaan_belum_terverifikasi.html'},
					perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-danger','href': 'rincian_pekerjaan_perpanjang.html'},
					ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger','href': 'rincian_pekerjaan_ditolak.html'},
					tutup : {'title' : 'Tutup', 'class' : 'btn-label-danger','href': 'rincian_pekerjaan_tutup.html'},
					ditunda : {'title' : 'Intruspi/Ditunda', 'class' : 'btn-label-danger','href': 'rincian_pekerjaan_ditunda.html'},
					progress : {'title' : 'Progress','class' : 'btn-label-warning','href': 'rincian_pekerjaan_berlangsung.html'},
					selesai : {'title' : 'Selesai', 'class' : 'btn-label-success done-status','href': 'rincian_pekerjaan_selesai.html'},
					kadaluarsa : {'title' : 'Kadaluarsa', 'class' : 'btn-label-dark','href': 'rincian_pekerjaan_kadaluarsa.html'},
				};
				var return_status = '<span  class="btn btn-bold btn-sm btn-font-sm ' + status[d.status_child[key]].class + '">' + status[d.status_child[key]].title + '</span>';
				
				var aksi = '<a href="'+status[d.status_child[key]].href+'" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>';
				trs+='<tr><td style="width:30px"></td><td>'+value+
				'</td><td>'+d.pekerjaan_child[key]+
				'</td><td>'+d.vendor_child[key]+
				'</td><td>'+d.sifat_child[key]+
				'</td><td>'+d.tipe_child[key]+
				'</td><td>'+d.tanggal_child[key]+
				'</td><td>'+validasi+
				'</td><td>'+return_status+
				'</td><td>'+aksi+
				'</td></tr>';

			})
			return '<table  class="table text-center">'+trs+	
			'</table>';
		}

		var table = $('#childrow_contoh').DataTable({
			"ajax": '../source/childrow_data.json',
			columns: [
			{
				class:          'details-control',
				orderable:      false,
				data:           '#',
				title : '#',
				defaultContent: '',
				width: 20
			},
			{
				data: 'no',
				orderable:      false,
				title: 'No.',
			},{
				data: 'pekerjaan',
				title: 'Pekerjaan',
			},{
				data: 'vendor',
				title: 'Vendor',
			},{
				data: 'sifat',
				title: 'Sifat',
			},{
				data: 'tipe',
				title: 'Tipe',
			},{
				data: 'tanggal',
				title: 'Tanggal Mulai',
			},{
				data: 'validasi',
				title: 'Validasi',
				responsivePriority: -1,
				render: function(data, type, full, meta) {
					return `
					<div class="kt-checkbox-list">
					<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success validasi_check">
					<input disabled checked="" type="checkbox" id="check_hsse" name="check_hsse"> HSSE
					<span></span>
					</label>
					<label class="kt-checkbox kt-checkbox--bold kt-checkbox--success validasi_check">
					<input disabled checked="" type="checkbox" id="check_gsi" name="check_hsse"> GSI
					<span></span>
					</label>
					</div>`;
				},
			},{
				data: 'status',
				title: 'Status',
				responsivePriority: -1,
				render: function(data, type, full, meta) {
					var status = {
						draft: {'title': 'Draft', 'class': 'btn-label-bold bold-status'},
						'pengajuan awal': {'title': 'Pengajuan Awal', 'class': 'btn-label-danger'},
						'pengajuan ulang' : {'title' : 'Pengajuan Ulang', 'class' : 'btn-label-danger'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-danger'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-danger'},
						ditunda : {'title' : 'Interupsi/Ditunda','class' : 'btn-label-danger'},
						progress : {'title' : 'Progress', 'class' : 'btn-label-warning'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success'},
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
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
				render: function(data, type, full, meta) {
					var status = {
						draft: {'href': 'rincian_sika.html'},
						'pengajuan awal': {'href': 'rincian_sika.html'},
						'pengajuan ulang': {'href': 'rincian_sika.html'},
						perpanjang: {'href': 'rincian_sika.html'},
						ditolak: {'href': 'rincian_sika.html'},
						tutup: {'href': 'rincian_sika.html'},
						ditunda: {'href': 'rincian_sika.html'},
						progress: {'href': 'rincian_sika.html'},
						selesai: {'href': 'rincian_sika.html'},
						kadaluarsa: {'href': 'rincian_sika.html'},
					};

					return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
				},
			},{
				field: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				width: 70,
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						draft: {'class': 'btn-label-bold bold-status'},
						'pengajuan awal': {'class': 'btn-label-danger'},
						'pengajuan ulang': {'class': 'btn-label-danger'},
						perpanjang: {'class': 'btn-label-danger'},
						ditolak: {'class': 'btn-label-danger'},
						tutup: {'class': 'btn-label-danger'},
						ditunda: {'class': 'btn-label-danger'},
						progress: {'class': 'btn-label-warning'},
						selesai: {'class': 'btn-label-success'},
						kadaluarsa: {'class': 'btn-label-dark'},
					};
					if (status[full.status].class == 'btn-label-danger') {
						return `
						<button  type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<i class="flaticon-more-1"></i>
						</button>
						<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
						<button disabled="" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary"> <i class="fa fa-angle-double-up"></i> Perpanjang</button>
						<a href="tutup_sika_cold.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-ban"></i> Tutup</a>` 
						;
					}
					return `
					<button type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="flaticon-more-1"></i>
					</button>
					<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
					<a href="perpanjang_sika_cold.html" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary"> <i class="fa fa-angle-double-up"></i> Perpanjang</button>
					<a href="tutup_sika_cold.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-ban"></i> Tutup</a>` 
					;
				},
			}],
			columnDefs: [
			{
				targets: [0,1,2,3,4,5,6,7,8],
				className: 'text-center'
			}
			]
		});
		$('#childrow_contoh tbody').on('click', 'td.details-control', function () {
			var tr = $(this).closest('tr');
			var row = table.row( tr );

			if ( row.child.isShown() ) {
				row.child.hide();
				tr.removeClass('shown');
			}
			else {
				row.child( format(row.data(), tr.children('td')) ).show();
				tr.addClass('shown');
				/*tr.next('tr').children('td').css('padding', '0px');*/
			}

		});
	};
	var initTable16 = function() {
		var table = $('#tbl_list_kehadiran_onsite');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/list_karyawan_onsite.json',
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
				orderable: false,
			},{
				data: 'jabatan',
				title: 'Jabatan',
			},{
				data: 'vendor',
				title: 'Vendor',
			},{
				data: 'waktu',
				title: 'Waktu',
				orderable: false,

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
				targets: [0,1,2,3,4,5],
				className: 'text-center'
			}
			],
		});
	};
	var initTable17 = function() {
		var table = $('#tbl_list_kehadiran_outsite');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/list_karyawan_outsite.json',
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
				data: 'jabatan',
				title: 'Jabatan',
			},{
				data: 'vendor',
				title: 'Vendor',
			}],
			columnDefs: [
			{
				targets: [0,1,2,3],
				className: 'text-center'
			}
			],
		});
	};
	var initTable18 = function() {
		var table = $('#tbl_total_karyawan');
		var status_validasi = "";

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/total_karyawan.json',
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
				width: 30,
				title: 'No.',
				orderable: false,
			},
			{
				data: 'nama',
				title: 'Nama'
			},
			{
				data: '1',
				title: '01',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						masuk: {'title': 'Masuk', 'class': 'btn-label-success'},
						absen: {'title': 'Absen', 'class': 'btn-label-danger'},
						outsite: {'title' : 'Outsite', 'class' : 'btn-label-dark'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},
			{
				data: '2',
				title: '02',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						masuk: {'title': 'Masuk', 'class': 'btn-label-success'},
						absen: {'title': 'Absen', 'class': 'btn-label-danger'},
						outsite: {'title' : 'Outsite', 'class' : 'btn-label-dark'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},
			{
				data: '3',
				title: '03',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						masuk: {'title': 'Masuk', 'class': 'btn-label-success'},
						absen: {'title': 'Absen', 'class': 'btn-label-danger'},
						outsite: {'title' : 'Outsite', 'class' : 'btn-label-dark'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},
			{
				data: '4',
				title: '04',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						masuk: {'title': 'Masuk', 'class': 'btn-label-success'},
						absen: {'title': 'Absen', 'class': 'btn-label-danger'},
						outsite: {'title' : 'Outsite', 'class' : 'btn-label-dark'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},
			{
				data: '5',
				title: '05',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						masuk: {'title': 'Masuk', 'class': 'btn-label-success'},
						absen: {'title': 'Absen', 'class': 'btn-label-danger'},
						outsite: {'title' : 'Outsite', 'class' : 'btn-label-dark'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			}
			],
			columnDefs: [
			{
				targets: [0,1],
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
			initTable14();
			initTable15();
			initTable16();
			initTable17();
			initTable18();

		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});
