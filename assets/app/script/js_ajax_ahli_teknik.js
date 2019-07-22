"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function() {

	$.fn.dataTable.Api.register('column().title()', function() {
		return $(this.header()).text().trim();
	});

	var initTable1 = function() {
		// begin first table
		var table = $('#daftar_pekerjaan').DataTable({
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
			serverSide: true,
			ajax: {
				url: '../source/daftar_pekerjaan_ahli_teknik.json',
				type: 'POST',
				
			},
			columns: [
			{data: 'no'},
			{data: 'pekerjaan'},
			{data: 'vendor'},
			{data: 'tanggal'},
			{data: 'tipe'},
			{data: 'status'},
			{data: 'aksi'},
			],

			initComplete: function() {
				this.api().columns().every(function() {
					var column = this;


				});
			},

			columnDefs: [
			{
				targets: [0,1,2,3,4,5,6],
				className: 'text-center'
			},
			{
				targets: -1,
				title: 'Aksi',
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<a href="#" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
				},
			},
			{
				targets: -2,
				render: function(data, type, full, meta) {
					var status = {
						terverifikasi: {'title': 'terverifikasi', 'class': ' btn-label-success'},
						ditolak: {'title': 'Ditolak', 'class': 'btn-label-warning'},
						draft: {'title': 'Draft', 'class': 'btn-label-brand'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},
			{
				targets: -3,
				render: function(data, type, full, meta) {
					var status = {
						hot: {'title': 'Hot', 'class': ' btn-label-danger'},
						cold: {'title': 'Cold', 'class': 'btn-label-primary'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},
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

		$('#generalSearch').on('click', function(e) {
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
	var initTable2 = function() {
		// begin first table
		var table = $('#daftar_nama_pekerja').DataTable({
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
			serverSide: true,
			ajax: {
				url: '../source/daftar_nama_pekerja_ahli_teknik.json',
				type: 'POST',
				
			},
			columns: [
			{data: 'no'},
			{data: 'nama'},
			{data: 'pekerjaan'},
			{data: 'aksi'},
			],

			initComplete: function() {
				this.api().columns().every(function() {
					var column = this;


				});
			},

			columnDefs: [
			{
				targets: [0,1,2,3],
				className: 'text-center'
			},
			{
				targets: -1,
				title: 'Aksi',
				width:130,
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<button type="button" class="btn btn-sm btn-secondary" style="border-radius:20px"> <i class="fa fa-times"></i> hapus</button>`;
				},
			},
			{
				targets: -2,
				width:270,
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<input class="form-control" type="text" placeholder="input pekerjaan" kale" id="pekerjaan" name="pekerjaan">`;
				},
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

		$('#generalSearch').on('click', function(e) {
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
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});