"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function() {

	$.fn.dataTable.Api.register('column().title()', function() {
		return $(this.header()).text().trim();
	});

	var initTable1 = function() {
		var table = $('#tbl_draft');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: false,
			ajax: {
				url: '../source/tabel_draft.json',
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
				title: 'Tanggal'
			},{
				data: 'nama',
				title: 'Nama',
			},{
				data: 'tipe',
				title: 'Tipe Pekerja',
			},{
				data: 'aksi',
				title: 'Aksi',
				responsivePriority: -1,
				className: 'text-center',
				orderable: false,
				width: 100,
				render: function(data, type, full, meta) {
					return `
					<a href="#" class="btn btn-sm btn-success" style="color:white;border-radius:20px">Lanjutkan</a> &nbsp;`;
				},
			}],
			columnDefs: [
			{
				targets: [0,1,2,3,4],
				className: 'text-center',
				orderable: false
			}
			],
		});
	};

	return {
		//main function to initiate the module
		init: function() {
			initTable1();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});