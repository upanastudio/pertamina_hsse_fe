"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function() {

	$.fn.dataTable.Api.register('column().title()', function() {
		return $(this.header()).text().trim();
	});
	var initTable1 = function() {
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
				responsivePriority: -1,
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
	var initTable2 = function() {
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
				title: 'Vendor',
			},{
				data: 'sifat',
				title: 'Sifat',
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
				field: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						draft: {'href': 'edit_pekerjaan_abi.html'},
						'pengajuan awal': {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						'pengajuan ulang': {'href': 'rincian_pekerjaan_pengajuan_ulang.html'},
						perpanjang: {'href': 'rincian_pekerjaan_perpanjang.html'},
						ditolak: {'href': 'rincian_pekerjaan_ditolak.html'},
						tutup: {'href': 'rincian_pekerjaan_tutup.html'},
						ditunda: {'href': 'rincian_pekerjaan_ditunda.html'},
						progress: {'href': 'rincian_pekerjaan_berlangsung.html'},
						selesai: {'href': 'rincian_pekerjaan_selesai.html'},
						kadaluarsa: {'href': 'rincian_pekerjaan_kadaluarsa.html'},
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
		var table = $('#daftar_sika');

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
					console.log(status[full.status].class);
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
					return `
					<button type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="flaticon-more-1"></i>
					</button>
					<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
					<a href="perpanjang_sika.html" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary"> <i class="fa fa-angle-double-up"></i> Perpanjang</a>
					<a href="tutup_sika.html"  class="dropdown-item btn btn-secondary">  <i class="fa fa-ban"></i> Tutup</a>` 
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
	var initTable5 = function() {
		var table = $('#daftar_sika_cold_pekerjaan');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_sika_pekerjaan_ahli_teknik_cold.json',
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
				targets: [0,1,2,3,4,5],
				className: 'text-center'
			}
			],
		});
	};
	var initTable6 = function() {
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
					console.log(status[full.status].class);
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
	var initTable7 = function() {
		var table = $('#daftar_sika_cold_novalidasi');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/daftar_sika_pekerjaan_ahli_teknik_cold.json',
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
					return `
					<button type="button" class="btn btn-hover-brand btn-elevate-hover btn-icon btn-sm btn-icon-md btn-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="flaticon-more-1"></i>
					</button>
					<div style="min-width:9rem;padding:5px;" class="dropdown-menu dropdown-menu-right">
					<a href="perpanjang_sika_cold.html" style="margin-bottom:5px;" class="dropdown-item btn btn-secondary"> <i class="fa fa-angle-double-up"></i> Perpanjang</button>
					<a href="tutup_sika_cold.html"  class="dropdown-item btn btn-secondary">  <i class="fa fa-ban"></i> Tutup</a>` 
					;
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
	var initTable8 = function() {
		var table = $('#daftar_sika_pekerjaan_novalidasi');

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
					console.log(status[full.status].class);
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
				targets: [0,1,2,3,4,5],
				className: 'text-center'
			}
			],
		});
	};
	var initTable9 = function() {
		var table = $('#daftar_pekerja');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '#',
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
				data: 'jabatan',
				title: 'Jabatan',
				className: 'text-center',
				orderable: false,
				width: 220,
				render: function(data, type, full, meta) {
					return `
					<input class="form-control" type="text" placeholder="input pekerjaan" kale" id="pekerjaan" name="pekerjaan">`;
				},
			},{
				field: 'Absensi',
				title: 'Absensi',
				responsivePriority: -1,
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
	var initTable10 = function() {
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
	var initTable11 = function() {
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
	var initTable12 = function() {
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
	var initTable13 = function() {
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
	var initTable14 = function() {
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
	var initTable15 = function() {
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
	var initTable16 = function() {
		var table = $('#tbl_total_karyawan');

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
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});