//"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function() {

	$.fn.dataTable.Api.register('column().title()', function() {
		return $(this.header()).text().trim();
	});

	var initTable1 = function() {
		// begin first table
		var table = $('#tbl_list_pekerja_baru').DataTable({
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
				url: '../source/input_data_pekerja_baru.json',
				type: 'POST',
				
			},
			columns: [
			{data: 'no'},
			{data: 'nama_pekerja'},
			{data: 'perusahaan'},
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
				targets: -1,
				title: 'Aksi',
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `<a href="" class="btn btn-sm btn-danger btn-pill" style="color:white;">Tolak</a> <a href="" class="btn btn-sm btn-success btn-pill" style="color:white;">Terima</a>`;
				},
			},
			{
				targets: [0, 1, 2, 3, 4],
				className: 'text-center'
			},
			{
				targets: -2,
				width: 220,
				render: function(data, type, full, meta) {
					return `<a href="" class="btn btn-sm btn-info btn-pill" style="color:white;">Details</a>`;
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

		$('#kt_search').on('click', function(e) {
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
		var table = $('#tbl_list_tes_lsr').DataTable({
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
				url: '../source/input_data_pekerja_baru.json',
				type: 'POST',
				
			},
			columns: [
			{data: 'no'},
			{data: 'nama_pekerja'},
			{data: 'perusahaan'},
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
				targets: -1,
				title: 'Aksi',
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<a href="" class="btn btn-sm btn-danger btn-pill" style="color:white;">Tolak</a> <a href="" class="btn btn-sm btn-success btn-pill" style="color:white;">Terima</a>`;
				},
			},
			{
				targets: [0, 1, 2, 3, 4],
				className: 'text-center'
			},
			{
				targets: -2,
				width: 220,
				render: function(data, type, full, meta) {
					return `<a href="" class="btn btn-sm btn-info btn-pill" style="color:white;">Details</a>`;
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

		$('#kt_search').on('click', function(e) {
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

	var initTable3 = function() {
		// begin first table
		var table = $('#tbl_list_kesehatan').DataTable({
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
				url: '../source/input_data_pekerja_baru.json',
				type: 'POST',
				
			},
			columns: [
			{data: 'no'},
			{data: 'nama_pekerja'},
			{data: 'perusahaan'},
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
				targets: -1,
				title: 'Aksi',
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					return `
					<a href="" class="btn btn-sm btn-warning btn-pill" style="color:white;">Unfit</a> <a href="" class="btn btn-sm btn-success btn-pill" style="color:white;">Fit</a>`;
				},
			},
			{
				targets: [0, 1, 2, 3, 4],
				className: 'text-center'
			},
			{
				targets: -2,
				width: 220,
				render: function(data, type, full, meta) {
					return `<a href="" class="btn btn-sm btn-info btn-pill" style="color:white;">Details</a>`;
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

		$('#kt_search').on('click', function(e) {
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

	var initTable4 = function() {
		// begin first table
		var table = $('#tbl_list_log_kesehatan').DataTable({
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
				url: '../source/list_log_kesehatan.json',
				type: 'POST',
				
			},
			columns: [
			{data: 'no'},
			{data: 'nama_pekerja'},
			{data: 'perusahaan'},
			{data: 'detail'},
			{data: 'kondisi'},
			],

			initComplete: function() {
				this.api().columns().every(function() {
					var column = this;


				});
			},

			columnDefs: [
			{
				targets: -1,
				title: 'Status',
				className: 'text-center',
				orderable: false,
				render: function(data, type, full, meta) {
					var status = {
						Fit: {'title': 'Fit', 'class': ' btn-label-success'},
						Unfit: {'title': 'Unfit', 'class': 'btn-label-warning'},
					};
					if (typeof status[data] === 'undefined') {
						return data;
					}
					return '<span class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
				},
			},
			{
				targets: [0, 1, 2, 3, 4],
				className: 'text-center'
			},
			{
				targets: -2,
				width: 220,
				render: function(data, type, full, meta) {
					return `<a href="" class="btn btn-sm btn-info btn-pill" style="color:white;">Details</a>`;
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

		$('#kt_search').on('click', function(e) {
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
			initTable3();
			initTable4();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});