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
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
						draft: {'title': 'Draft', 'class': 'btn-label-dark dark-blue'},
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning'},
						resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success done-status'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-success'},
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
						kadaluarsa: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						draft: {'href': 'edit_pekerjaan_abi.html'},
						perpanjang: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						resubmit: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						baru: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						ditolak: {'href': 'rincian_pekerjaan_ditolak.html'},
						berlangsung: {'href': 'rincian_pekerjaan_berlangsung.html'},
						ditunda: {'href': 'rincian_pekerjaan_ditunda.html'},
						selesai: {'href': 'rincian_pekerjaan_selesai.html'},
						tutup: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
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
					<a href="tutup_sika.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-check"></i> Selesai</a>` 
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
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
						draft: {'title': 'Draft', 'class': 'btn-label-dark dark-blue'},
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning'},
						resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success'}
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
					<a href="tutup_sika.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-check"></i> Selesai</a>` 
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
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
						draft: {'title': 'Draft', 'class': 'btn-label-dark dark-blue'},
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning'},
						resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success'}
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
					<a href="tutup_sika_cold.html"  class="dropdown-item btn btn-secondary"> <i class="fa fa-check"></i> Selesai</a>` 
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
	/*var initTable6 = function() {
		function format ( d ) {
			console.log(d.no_child);
			var trs='';
			$.each($(d.no_child),function(key,value){
				trs+='<tr><td>'+value+
				'</td><td>'+d.pekerjaan_child[key]+
				'</td><td>'+d.vendor_child[key]+
				'</td><td>'+d.sifat_child[key]+
				'</td><td>'+d.tipe_child[key]+
				'</td><td>'+d.tanggal_child[key]+
				'</td><td>'+d.validasi_child[key]+
				'</td><td>'+d.status_child[key]+
				'</td><td>'+d.aksi_child[key]+
				'</td></tr>';

			})
			return '<table  class="table table-border table-hover">'+
			'<thead>'+
			'<th>No.</th>'+
			'<th>Pekerjaan</th>'+
			'<th>Vendor</th>'+
			'<th>Sifat</th>'+
			'<th>Tipe</th>'+
			'<th>Tanggal Mulai</th>'+
			'<th>Validasi</th>'+
			'<th>Status</th>'+
			'<th>Aksi</th>'+
			'</thead><tbody>' +

			trs+
			'</tbody></table>';
		}
		var table = $('#childrow_contoh').DataTable({
			"ajax": '../source/childrow_data.json',
			columns: [
			{
				class:          'details-control',
				orderable:      false,
				data:           '#',
				title : '#',
				defaultContent: ''
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
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
						draft: {'title': 'Draft', 'class': 'btn-label-dark dark-blue'},
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning'},
						resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success done-status'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-success'},
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
						kadaluarsa: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						draft: {'href': 'edit_pekerjaan_abi.html'},
						perpanjang: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						resubmit: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						baru: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						ditolak: {'href': 'rincian_pekerjaan_ditolak.html'},
						berlangsung: {'href': 'rincian_pekerjaan_berlangsung.html'},
						ditunda: {'href': 'rincian_pekerjaan_ditunda.html'},
						selesai: {'href': 'rincian_pekerjaan_selesai.html'},
						tutup: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
					};
					return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
				},
			}],
			columnDefs: [
			{
				targets: [0,1,2,3,4,5,6,7],
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
				row.child( format(row.data()) ).show();
				tr.addClass('shown');
			}
		});
	};*/
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
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark', 'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						draft: {'title': 'Draft', 'class': 'btn-label-dark dark-blue', 'href': 'edit_pekerjaan_abi.html'},
						baru: {'title': 'Baru', 'class': 'btn-label-brand','href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning','href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status','href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger','href': 'rincian_pekerjaan_ditolak.html'},
						berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary','href': 'rincian_pekerjaan_berlangsung.html'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status','href': 'rincian_pekerjaan_ditunda.html'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success done-status','href': 'rincian_pekerjaan_selesai.html'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-success','href': 'rincian_pekerjaan_belum_terverifikasi.html'},
					};
				var return_status = '<span class="btn btn-bold btn-sm btn-font-sm ' + status[d.status_child[key]].class + '">' + status[d.status_child[key]].title + '</span>';
				
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
			return '<table  class="table text-center">'+
			'<thead><tr>'+
			'<td></td>'+
			'<td>No.</td>'+
			'<td>Pekerjaan</td>'+
			'<td>Vendor</td>'+
			'<td>Sifat</td>'+
			'<td>Tipe</td>'+
			'<td>Tanggal Mulai</td>'+
			'<td>Validasi</td>'+
			'<td>Status</td>'+
			'<td>Aksi</td></tr>'+
			'</thead><tbody>' +trs+

			'</tbody></table>';
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
						kadaluarsa: {'title': 'Kadaluarsa', 'class': 'btn-label-dark'},
						draft: {'title': 'Draft', 'class': 'btn-label-dark dark-blue'},
						baru: {'title': 'Baru', 'class': 'btn-label-brand'},
						perpanjang : {'title': 'Perpanjang', 'class': 'btn-label-warning'},
						resubmit : {'title' : 'Resubmit', 'class' : 'btn-label-bold bold-status'},
						ditolak : {'title' : 'Ditolak', 'class' : 'btn-label-danger'},
						berlangsung : {'title' : 'Berlangsung', 'class' : 'btn-label-primary'},
						ditunda : {'title' : 'Ditunda','class' : 'btn-label-dark dark-status'},
						selesai : {'title' : 'Selesai', 'class' : 'btn-label-success done-status'},
						tutup : {'title' : 'Tutup', 'class' : 'btn-label-success'},
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
						kadaluarsa: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						draft: {'href': 'edit_pekerjaan_abi.html'},
						perpanjang: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						resubmit: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						baru: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						ditolak: {'href': 'rincian_pekerjaan_ditolak.html'},
						berlangsung: {'href': 'rincian_pekerjaan_berlangsung.html'},
						ditunda: {'href': 'rincian_pekerjaan_ditunda.html'},
						selesai: {'href': 'rincian_pekerjaan_selesai.html'},
						tutup: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
					};
					return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
				},
			}],
			columnDefs: [
			{
				targets: [0,1,2,3,4,5,6,7],
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
	return {
		//main function to initiate the module
		init: function() {
			initTable1();
			initTable2();
			initTable3();
			initTable4();
			initTable5();
			initTable6();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});