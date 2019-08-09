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
		var table = $('#daftar_sika');

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
						/*draft: {'title': 'Draft', 'class': ' btn-label-dark'},
						belum_terverifikasi: {'title': 'Belum Terverifikasi', 'class': 'btn-label-bold'},
						baru: {'title': 'baru', 'class': 'btn-label-brand'},
						ditolak: {'title': 'Ditolak', 'class': 'btn-label-danger'},
						berlangsung: {'title': 'Berlangsung', 'class': 'btn-label-primary'},
						ditunda: {'title': 'Ditunda', 'class': 'btn-label-warning'},
						selesai: {'title': 'Selesai', 'class': 'btn-label-success'},*/
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
				field: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						kadaluarsa: {'href': 'draft_pekerjaan.html'},
						draft: {'href': 'edit_pekerjaan.html'},
						perpanjang: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						resubmit: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						baru: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						ditolak: {'href': 'rincian_pekerjaan_ditolak.html'},
						berlangsung: {'href': 'rincian_pekerjaan_berlangsung.html'},
						ditunda: {'href': 'rincian_pekerjaan_ditunda.html'},
						selesai: {'href': 'rincian_pekerjaan_selesai.html'},
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
						/*draft: {'title': 'Draft', 'class': ' btn-label-dark'},
						belum_terverifikasi: {'title': 'Belum Terverifikasi', 'class': 'btn-label-bold'},
						baru: {'title': 'baru', 'class': 'btn-label-brand'},
						ditolak: {'title': 'Ditolak', 'class': 'btn-label-danger'},
						berlangsung: {'title': 'Berlangsung', 'class': 'btn-label-primary'},
						ditunda: {'title': 'Ditunda', 'class': 'btn-label-warning'},
						selesai: {'title': 'Selesai', 'class': 'btn-label-success'},*/
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
				field: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						kadaluarsa: {'href': 'draft_pekerjaan.html'},
						draft: {'href': 'edit_pekerjaan.html'},
						perpanjang: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						resubmit: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						baru: {'href': 'rincian_pekerjaan_belum_terverifikasi.html'},
						ditolak: {'href': 'rincian_pekerjaan_ditolak.html'},
						berlangsung: {'href': 'rincian_pekerjaan_berlangsung.html'},
						ditunda: {'href': 'rincian_pekerjaan_ditunda.html'},
						selesai: {'href': 'rincian_pekerjaan_selesai.html'},
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
	return {
		//main function to initiate the module
		init: function() {
			initTable1();
			initTable2();
			initTable3();
			initTable4();
			initTable5();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});