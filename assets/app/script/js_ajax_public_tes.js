"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function() {

  $.fn.dataTable.Api.register('column().title()', function() {
    return $(this.header()).text().trim();
  });

  var initTable1 = function() {
    var table = $('#hasil_tes_lsr');

    // begin first table
    table.DataTable({
      responsive: true,
      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/hasil_tes_lsr.json',
        type: 'POST',
        data: {
          pagination: {
            perpage: 50,
          },
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
        width: 30,
        className: 'text-center',
        orderable: false,
      }, {
        data: 'tes',
        title: 'Tes',
        orderable: false,
      }, {
        data: 'poin',
        title: 'Poin',
        orderable: false,
      }],
      columnDefs: [{
        targets: [0, 1, 2],
        className: 'text-center'
      }],
    });
  };
  var initTable2 = function() {
    var table = $('#daftar_pertanyaan');

    // begin first table
    table.DataTable({
      responsive: true,
      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/hasil_tes_lsr.json',
        type: 'POST',
        data: {
          pagination: {
            perpage: 50,
          },
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
        width: 30,
        className: 'text-center',
        orderable: false,
      }, {
        data: 'pertanyaan',
        title: 'Pertanyaan',
        orderable: false,
      }, {
        field: 'aksi',
        title: 'Aksi',
        className: 'text-center',
        orderable: false,
        width: 160,
        render: function(data, type, full, meta) {
          return `
					<a href="rincian_pertanyaan.html" class="btn btn-sm btn-primary" style="border-radius:20px;color:white">Rincian</a>
					<button  type="button" class="btn btn-sm btn-secondary" style="border-radius:20px">Hapus</button>
					`;
        },
      }],
      columnDefs: [],
    });
  };
  var initTable3 = function() {
    var table = $('#daftar_vendor');

    // begin first table
    table.DataTable({
      responsive: true,
      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_vendor.json',
        type: 'POST',
        data: {
          pagination: {
            perpage: 50,
          },
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
        width: 30,
        className: 'text-center',
        orderable: false,
      }, {
        data: 'nama_vendor',
        title: 'Nama Vendor',
      }, {
        data: 'alamat',
        title: 'Alamat',
      }, {
        field: 'aksi',
        title: 'Aksi',
        className: 'text-center',
        orderable: false,
        width: 150,
        render: function(data, type, full, meta) {
          return `
					<a href="rincian_vendor.html" class="btn btn-sm btn-primary" style="border-radius:20px;color:white">Rincian</a>
					<button type="button" class="btn btn-sm btn-secondary" style="border-radius:20px">Hapus</button>
					`;
        },
      }],
      columnDefs: [{
        targets: [0, 1, 2, 3],
        className: 'text-center'
      }],
    });
  };
  var initTable4 = function() {
    // begin first table
    var table = $('#daftar_sika').DataTable({
      responsive: true,
      /*order: [[1, "desc"], [2, "desc"]],*/
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
        url: '../source/daftar_sika_pekerjaan_ahli_teknik.json',
        type: 'POST',
      },
      columns: [{
        data: 'null',
        title: 'No.',
        render: function(data, type, row, meta) {
          return meta.row + meta.settings._iDisplayStart + 1;
        },
      }, {
        data: 'depot',
        title: 'Depot',
      }, {
        data: 'pekerjaan',
        title: 'Pekerjaan',
      }, {
        data: 'jenis_sika',
        title: 'Jenis SIKA',
      }, {
        data: 'no_sika',
        title: 'No. SIKA',
      }, {
        data: 'status',
        title: 'Status',
        width: 160,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'title': 'Draft', 'class': 'btn-label-bold bold-status' },
            'pengajuan awal': { 'title': 'Pengajuan Awal', 'class': 'btn-label-danger' },
            'pengajuan ulang': { 'title': 'Pengajuan Ulang', 'class': 'btn-label-danger' },
            perpanjang: { 'title': 'Perpanjang', 'class': 'btn-label-danger' },
            ditolak: { 'title': 'Ditolak', 'class': 'btn-label-danger' },
            tutup: { 'title': 'Tutup', 'class': 'btn-label-danger' },
            ditunda: { 'title': 'Interupsi/Ditunda', 'class': 'btn-label-danger' },
            progress: { 'title': 'Progress', 'class': 'btn-label-warning' },
            selesai: { 'title': 'Selesai', 'class': 'btn-label-success' },
            kadaluarsa: { 'title': 'Kadaluarsa', 'class': 'btn-label-dark' },
          };
          if (typeof status[data] === 'undefined') {
            return data;
          }
          return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
        },
      }, {
        field: 'rincian',
        title: 'Rincian',
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          return `
					<a href="rincian_sika.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
        },
      }],

      initComplete: function() {
        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Depot':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });

        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Status':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="5"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });
      },



      columnDefs: [{
        targets: [0, 1, 2, 3, 4, 5, 6],
        className: 'text-center',
        orderable: false,
      }],
    });

    var filter = function() {
      var val = $.fn.dataTable.util.escapeRegex($(this).val());
      table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
    };

    var asdasd = function(value, index) {
      var val = $.fn.dataTable.util.escapeRegex(value);
      table.column(index).search(val ? val : '', false, true);
    };

    $('#kt_search_depot').on('change', function(e) {
      e.preventDefault();
      var params = {};
      $('.kt-input').each(function() {
        var i = $(this).data('col-index');
        if (params[i]) {
          params[i] += '|' + $(this).val();
        } else {
          params[i] = $(this).val();
        }
      });
      $.each(params, function(i, val) {
        // apply search params to datatable
        table.column(i).search(val ? val : '', false, false);
      });
      table.table().draw();
    });
    $('#kt_search_status').on('change', function(e) {
      e.preventDefault();
      var params = {};
      $('.kt-input').each(function() {
        var i = $(this).data('col-index');
        if (params[i]) {
          params[i] += '|' + $(this).val();
        } else {
          params[i] = $(this).val();
        }
      });
      $.each(params, function(i, val) {
        // apply search params to datatable
        table.column(i).search(val ? val : '', false, false);
      });
      table.table().draw();
    });
    $('#kt_search_all').on('keyup', function() {
      table.search(this.value).draw();
    });
    $('#kt_reset').on('click', function(e) {
      e.preventDefault();
      $('.kt-input').each(function() {
        $(this).val('');
        table.column($(this).data('col-index')).search('', false, false);
      });
      table.table().draw();
    });

  };
  var initTable5 = function() {
    // begin first table
    var table = $('#daftar_pekerjaan_alpha').DataTable({
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
        url: '../source/daftar_pekerjaan_ahli_teknik_admin.json',
        type: 'POST',
      },
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'depot',
        title: 'Depot',
      }, {
        data: 'vendor',
        title: 'Vendor',
      }, {

        data: 'pekerjaan',
        title: 'Pekerjaan',
      }, {
        data: 'sifat',
        title: 'Sifat',
      }, {
        data: 'tanggal',
        title: 'Tanggal Mulai',
      }, {
        data: 'status',
        title: 'Status',
        responsivePriority: -1,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'title': 'Draft', 'class': 'btn-label-bold bold-status' },
            'pengajuan awal': { 'title': 'Pengajuan Awal', 'class': 'btn-label-danger' },
            'pengajuan ulang': { 'title': 'Pengajuan Ulang', 'class': 'btn-label-danger' },
            perpanjang: { 'title': 'Perpanjang', 'class': 'btn-label-danger' },
            ditolak: { 'title': 'Ditolak', 'class': 'btn-label-danger' },
            tutup: { 'title': 'Tutup', 'class': 'btn-label-danger' },
            ditunda: { 'title': 'Interupsi/Ditunda', 'class': 'btn-label-danger' },
            progress: { 'title': 'Progress', 'class': 'btn-label-warning' },
            selesai: { 'title': 'Selesai', 'class': 'btn-label-success' },
            kadaluarsa: { 'title': 'Kadaluarsa', 'class': 'btn-label-dark' },
          };
          if (typeof status[data] === 'undefined') {
            return data;
          }
          return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
        },
      }, {
        field: 'aksi',
        title: 'Aksi',
        responsivePriority: -1,
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'href': 'edit_pekerjaan_abi.html' },
            'pengajuan awal': { 'href': 'rincian_pekerjaan.html' },
            'pengajuan ulang': { 'href': 'rincian_pekerjaan_pengajuan_ulang.html' },
            perpanjang: { 'href': 'rincian_pekerjaan.html' },
            ditolak: { 'href': 'rincian_pekerjaan_ditolak.html' },
            tutup: { 'href': 'rincian_pekerjaan.html' },
            ditunda: { 'href': 'rincian_pekerjaan_ditunda.html' },
            progress: { 'href': 'rincian_pekerjaan_berlangsung.html' },
            selesai: { 'href': 'rincian_pekerjaan.html' },
            kadaluarsa: { 'href': 'rincian_pekerjaan_kadaluarsa.html' },
          };
          return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
        },
      }],

      initComplete: function() {
        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Depot':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });
      },

      columnDefs: [{
        targets: [0, 1, 2, 3, 4, 5, 6],
        className: 'text-center'
      }],
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
        } else {
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
  };
  var initTable6 = function() {
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
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'jenis_sika',
        title: 'Jenis SIKA',
      }, {
        data: 'no_sika',
        title: 'No. SIKA',
      }, {
        data: 'status',
        title: 'Status',
        width: 150,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'title': 'Draft', 'class': 'btn-label-bold bold-status' },
            'pengajuan awal': { 'title': 'Pengajuan Awal', 'class': 'btn-label-danger' },
            'pengajuan ulang': { 'title': 'Pengajuan Ulang', 'class': 'btn-label-danger' },
            perpanjang: { 'title': 'Perpanjang', 'class': 'btn-label-danger' },
            ditolak: { 'title': 'Ditolak', 'class': 'btn-label-danger' },
            tutup: { 'title': 'Tutup', 'class': 'btn-label-danger' },
            ditunda: { 'title': 'Interupsi/Ditunda', 'class': 'btn-label-danger' },
            progress: { 'title': 'Progress', 'class': 'btn-label-warning' },
            selesai: { 'title': 'Selesai', 'class': 'btn-label-success' },
            kadaluarsa: { 'title': 'Kadaluarsa', 'class': 'btn-label-dark' },
          };
          if (typeof status[data] === 'undefined') {
            return data;
          }
          return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
        },
      }, {
        field: 'rincian',
        title: 'Rincian',
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          return `
					<a href="rincian_sika.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
        },
      }],
      columnDefs: [{
        targets: [0, 1, 2, 3, 4],
        className: 'text-center'
      }],
    });
  };
  var initTable7 = function() {
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
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'jenis_sika',
        title: 'Jenis SIKA',
      }, {
        data: 'no_sika',
        title: 'No. SIKA',
      }, {
        data: 'status',
        title: 'Status',
        width: 160,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'title': 'Draft', 'class': 'btn-label-bold bold-status' },
            'pengajuan awal': { 'title': 'Pengajuan Awal', 'class': 'btn-label-danger' },
            'pengajuan ulang': { 'title': 'Pengajuan Ulang', 'class': 'btn-label-danger' },
            perpanjang: { 'title': 'Perpanjang', 'class': 'btn-label-danger' },
            ditolak: { 'title': 'Ditolak', 'class': 'btn-label-danger' },
            tutup: { 'title': 'Tutup', 'class': 'btn-label-danger' },
            ditunda: { 'title': 'Interupsi/Ditunda', 'class': 'btn-label-danger' },
            progress: { 'title': 'Progress', 'class': 'btn-label-warning' },
            selesai: { 'title': 'Selesai', 'class': 'btn-label-success' },
            kadaluarsa: { 'title': 'Kadaluarsa', 'class': 'btn-label-dark' },
          };
          if (typeof status[data] === 'undefined') {
            return data;
          }
          return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
        },
      }, {
        field: 'rincian',
        title: 'Rincian',
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          return `
					<a href="rincian_sika.html" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
        },
      }],
      columnDefs: [{
        targets: [0, 1, 2, 3, 4],
        className: 'text-center'
      }],
    });
  };
  var initTable8 = function() {
    var table = $('#daftar_peserta');

    // begin first table
    table.DataTable({
      responsive: true,
      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_peserta.json',
        type: 'POST',
        data: {
          pagination: {
            perpage: 50,
          },
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
        width: 30,
        className: 'text-center',
        orderable: false,
      }, {
        data: 'nama_peserta',
        title: 'Nama Peserta',
        orderable: false,
      }, {
        data: 'tanggal_tes',
        title: 'Tanggal Tes',
      }, {
        data: 'status',
        title: 'Status',
        width: 140,
        responsivePriority: -1,
        render: function(data, type, full, meta) {
          var status = {
            lulus: { 'title': 'Lulus', 'class': 'btn-label-success' },
            tidak_lulus: { 'title': 'Tidak Lulus', 'class': 'btn-label-danger' },
          };
          if (typeof status[data] === 'undefined') {
            return data;
          }
          return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
        },
      }, {
        field: 'aksi',
        title: 'Aksi',
        className: 'text-center',
        orderable: false,
        width: 160,
        render: function(data, type, full, meta) {
          return `
					<a href="rincian_hasil_tes.html" class="btn btn-sm btn-primary" style="border-radius:20px;color:white">Rincian</a>
					`;
        },
      }],
      columnDefs: [{
        targets: [0, 1, 2, 3],
        className: 'text-center'
      }],
    });
  };
  var initTable9 = function() {
    var table = $('#kt_table_pekerjaan').DataTable({
      responsive: true,
      dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

      lengthMenu: [5, 10, 25, 50],

      pageLength: 10,

      language: {
        'lengthMenu': 'Display _MENU_',
      },

      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_pekerjaan_ahli_teknik_admin.json',
        type: 'POST',
        data: {
          columnsDef: [
            'no', 'depot', 'vendor', 'pekerjaan', 'sifat',
            'tanggal', 'status', 'aksi',
          ],
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'depot',
        title: 'Depot',
        responsivePriority: -1,
        render: function(data, type, full, meta) {
          var status = {
            'depot satu': { 'title': 'Depot Satu', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot dua': { 'title': 'Depot Dua', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot tiga': { 'title': 'Depot Tiga', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot empat': { 'title': 'Depot Empat', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot lima': { 'title': 'Depot Lima', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot enam': { 'title': 'Depot Enam', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot tujuh': { 'title': 'Depot Tujuh', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot delapan': { 'title': 'Depot Delapan', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot sembilan': { 'title': 'Depot Sembilan', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
            'depot sepuluh': { 'title': 'Depot Sepuluh', 'href': 'rincian_depot.html', 'class': 'btn-label-success' },
          };
          if (typeof status[data] === 'undefined') {
            return data;
          }
          return '<a href="' + status[data].href + '" style="width:100%" class="btn btn-sm ' + status[data].class + '">' + status[data].title + '</a>';
        },
      }, {
        data: 'vendor',
        title: 'Vendor',
      }, {

        data: 'pekerjaan',
        title: 'Pekerjaan',
      }, {
        data: 'sifat',
        title: 'Sifat',
      }, {
        data: 'tanggal',
        title: 'Tanggal Mulai',
      }, {
        data: 'status',
        title: 'Status',
        responsivePriority: -1,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'title': 'Draft', 'class': 'btn-label-bold bold-status' },
            'pengajuan awal': { 'title': 'Pengajuan Awal', 'class': 'btn-label-danger' },
            'pengajuan ulang': { 'title': 'Pengajuan Ulang', 'class': 'btn-label-danger' },
            perpanjang: { 'title': 'Perpanjang', 'class': 'btn-label-danger' },
            ditolak: { 'title': 'Ditolak', 'class': 'btn-label-danger' },
            tutup: { 'title': 'Tutup', 'class': 'btn-label-danger' },
            ditunda: { 'title': 'Interupsi/Ditunda', 'class': 'btn-label-danger' },
            progress: { 'title': 'Progress', 'class': 'btn-label-warning' },
            selesai: { 'title': 'Selesai', 'class': 'btn-label-success' },
            kadaluarsa: { 'title': 'Kadaluarsa', 'class': 'btn-label-dark' },
          };
          if (typeof status[data] === 'undefined') {
            return data;
          }
          return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
        },
      }, {
        field: 'aksi',
        title: 'Aksi',
        responsivePriority: -1,
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'href': 'edit_pekerjaan_abi.html' },
            'pengajuan awal': { 'href': 'rincian_pekerjaan.html' },
            'pengajuan ulang': { 'href': 'rincian_pekerjaan_pengajuan_ulang.html' },
            perpanjang: { 'href': 'rincian_pekerjaan.html' },
            ditolak: { 'href': 'rincian_pekerjaan_ditolak.html' },
            tutup: { 'href': 'rincian_pekerjaan.html' },
            ditunda: { 'href': 'rincian_pekerjaan_ditunda.html' },
            progress: { 'href': 'rincian_pekerjaan_berlangsung.html' },
            selesai: { 'href': 'rincian_pekerjaan.html' },
            kadaluarsa: { 'href': 'rincian_pekerjaan_kadaluarsa.html' },
          };
          return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
        },
      }],

      initComplete: function() {
        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Depot':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });

        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Pekerjaan':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="3"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });
      },

      columnDefs: [{
        targets: [0, 1, 2, 3, 4, 5, 6],
        className: 'text-center'
      }],
    });

    var filter = function() {
      var val = $.fn.dataTable.util.escapeRegex($(this).val());
      table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
    };

    var asdasd = function(value, index) {
      var val = $.fn.dataTable.util.escapeRegex(value);
      table.column(index).search(val ? val : '', false, true);
    };

    $('#kt_search_depot').on('change', function(e) {
      e.preventDefault();
      var params = {};
      $('.kt-input').each(function() {
        var i = $(this).data('col-index');
        if (params[i]) {
          params[i] += '|' + $(this).val();
        } else {
          params[i] = $(this).val();
        }
      });
      $.each(params, function(i, val) {
        // apply search params to datatable
        table.column(i).search(val ? val : '', false, false);
      });
      table.table().draw();
    });
    $('#kt_search_pekerjaan').on('change', function(e) {
      e.preventDefault();
      var params = {};
      $('.kt-input').each(function() {
        var i = $(this).data('col-index');
        if (params[i]) {
          params[i] += '|' + $(this).val();
        } else {
          params[i] = $(this).val();
        }
      });
      $.each(params, function(i, val) {
        // apply search params to datatable
        table.column(i).search(val ? val : '', false, false);
      });
      table.table().draw();
    });
    $('#kt_search_all').on('keyup', function() {
      table.search(this.value).draw();
    });
    $('#kt_reset').on('click', function(e) {
      e.preventDefault();
      $('.kt-input').each(function() {
        $(this).val('');
        table.column($(this).data('col-index')).search('', false, false);
      });
      table.table().draw();
    });

  };
  var initTable10 = function() {
    var table = $('#daftar_depot');

    // begin first table
    table.DataTable({
      responsive: true,
      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_depot.json',
        type: 'POST',
        data: {
          pagination: {
            perpage: 50,
          },
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
        width: 30,
        className: 'text-center',
        orderable: false,
      }, {
        data: 'nama_depot',
        title: 'Nama Depot',
        orderable: false,
      }, {
        field: 'aksi',
        title: 'Aksi',
        className: 'text-center',
        orderable: false,
        width: 160,
        render: function(data, type, full, meta) {
          return `
					<a href="rincian_depot.html" class="btn btn-sm btn-primary" style="border-radius:20px;color:white">Rincian</a>
					`;
        },
      }],
      columnDefs: [{
        targets: [0, 1, 2],
        className: 'text-center'
      }],
    });
  };
  var initTable11 = function() {
    var table = $('#kt_table_pekerjaan_depot');

    // begin first table
    table.DataTable({
      responsive: true,
      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_pekerjaan_ahli_teknik_admin.json',
        type: 'POST',
        data: {
          pagination: {
            perpage: 50,
          },
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'vendor',
        title: 'Vendor',
      }, {

        data: 'pekerjaan',
        title: 'Pekerjaan',
      }, {
        data: 'sifat',
        title: 'Sifat',
      }, {
        data: 'tanggal',
        title: 'Tanggal Mulai',
      }, {
        data: 'status',
        title: 'Status',
        responsivePriority: -1,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'title': 'Draft', 'class': 'btn-label-bold bold-status' },
            'pengajuan awal': { 'title': 'Pengajuan Awal', 'class': 'btn-label-danger' },
            'pengajuan ulang': { 'title': 'Pengajuan Ulang', 'class': 'btn-label-danger' },
            perpanjang: { 'title': 'Perpanjang', 'class': 'btn-label-danger' },
            ditolak: { 'title': 'Ditolak', 'class': 'btn-label-danger' },
            tutup: { 'title': 'Tutup', 'class': 'btn-label-danger' },
            ditunda: { 'title': 'Interupsi/Ditunda', 'class': 'btn-label-danger' },
            progress: { 'title': 'Progress', 'class': 'btn-label-warning' },
            selesai: { 'title': 'Selesai', 'class': 'btn-label-success' },
            kadaluarsa: { 'title': 'Kadaluarsa', 'class': 'btn-label-dark' },
          };
          if (typeof status[data] === 'undefined') {
            return data;
          }
          return '<span style="width:100%" class="btn btn-bold btn-sm btn-font-sm ' + status[data].class + '">' + status[data].title + '</span>';
        },
      }, {
        field: 'aksi',
        title: 'Aksi',
        responsivePriority: -1,
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          var status = {
            draft: { 'href': 'edit_pekerjaan_abi.html' },
            'pengajuan awal': { 'href': 'rincian_pekerjaan.html' },
            'pengajuan ulang': { 'href': 'rincian_pekerjaan_pengajuan_ulang.html' },
            perpanjang: { 'href': 'rincian_pekerjaan.html' },
            ditolak: { 'href': 'rincian_pekerjaan_ditolak.html' },
            tutup: { 'href': 'rincian_pekerjaan.html' },
            ditunda: { 'href': 'rincian_pekerjaan_ditunda.html' },
            progress: { 'href': 'rincian_pekerjaan_berlangsung.html' },
            selesai: { 'href': 'rincian_pekerjaan.html' },
            kadaluarsa: { 'href': 'rincian_pekerjaan_kadaluarsa.html' },
          };
          return `
					<a href="${status[full.status].href}" class="btn btn-sm btn-primary" style="color:white;border-radius:20px">Rincian</a>`;
        },
      }],
      columnDefs: [{
        targets: [0, 1, 2, 3, 5, 6],
        className: 'text-center'
      }],
    });
  };
  var initTable12 = function() {
    var table = $('#total_karyawan').DataTable({
      scrollY: "500px",
      scrollX: true,
      scrollCollapse: true,
      paging: true,
      orderable: false
    });

  };
  var initTable13 = function() {
    var table = $('#kt_table_pja').DataTable({
      responsive: true,
      dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

      lengthMenu: [5, 10, 25, 50],

      pageLength: 10,

      language: {
        'lengthMenu': 'Display _MENU_',
      },

      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_pekerjaan_ahli_teknik_admin.json',
        type: 'POST',
        data: {
          columnsDef: [
            'no', 'depot', 'vendor', 'pekerjaan', 'sifat',
            'tanggal', 'status', 'aksi',
          ],
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'namaPekerjaan',
        title: 'Nama Pekerjaan',
      }, {
        data: 'uraian',
        title: 'Uraian',
      }, {

        data: 'nilai',
        title: 'Nilai',
      }, {
        field: 'aksi',
        title: 'Aksi',
        responsivePriority: -1,
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          return `
					<a target="_blank" href="#" class="btn  btn-outline-primary" style="border-radius:20px">Lihat File</a>`;
        },
      }],

      initComplete: function() {
        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Depot':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });

        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Pekerjaan':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="3"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });
      },

      columnDefs: [{
        targets: [0, 1, 2, 3, 4],
        className: 'text-center'
      }],
    });

    var filter = function() {
      var val = $.fn.dataTable.util.escapeRegex($(this).val());
      table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
    };

    var asdasd = function(value, index) {
      var val = $.fn.dataTable.util.escapeRegex(value);
      table.column(index).search(val ? val : '', false, true);
    };

    $('#kt_search_all').on('keyup', function() {
      table.search(this.value).draw();
    });
    $('#kt_reset').on('click', function(e) {
      e.preventDefault();
      $('.kt-input').each(function() {
        $(this).val('');
        table.column($(this).data('col-index')).search('', false, false);
      });
      table.table().draw();
    });

  };
  var initTable14 = function() {
    var table = $('#kt_table_jsa').DataTable({
      responsive: true,
      dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

      lengthMenu: [5, 10, 25, 50],

      pageLength: 10,

      language: {
        'lengthMenu': 'Display _MENU_',
      },

      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_pekerjaan_ahli_teknik_admin.json',
        type: 'POST',
        data: {
          columnsDef: [
            'no', 'depot', 'vendor', 'pekerjaan', 'sifat',
            'tanggal', 'status', 'aksi',
          ],
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'namaPekerjaan',
        title: 'Nama Pekerjaan',
      }, {
        data: 'uraian',
        title: 'Uraian',
      },{
        field: 'aksi',
        title: 'Aksi',
        responsivePriority: -1,
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          return `
					<a target="_blank" href="#" class="btn  btn-outline-primary" style="border-radius:20px">Lihat File</a>`;
        },
      }],

      initComplete: function() {
        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Depot':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });

        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Pekerjaan':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="3"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });
      },

      columnDefs: [{
        targets: [0, 1, 2, 3],
        className: 'text-center'
      }],
    });

    var filter = function() {
      var val = $.fn.dataTable.util.escapeRegex($(this).val());
      table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
    };

    var asdasd = function(value, index) {
      var val = $.fn.dataTable.util.escapeRegex(value);
      table.column(index).search(val ? val : '', false, true);
    };

    $('#kt_search_all').on('keyup', function() {
      table.search(this.value).draw();
    });
    $('#kt_reset').on('click', function(e) {
      e.preventDefault();
      $('.kt-input').each(function() {
        $(this).val('');
        table.column($(this).data('col-index')).search('', false, false);
      });
      table.table().draw();
    });

  };
  var initTable15 = function() {
    var table = $('#kt_table_isolasiEnergi').DataTable({
      responsive: true,
      dom: `<'row'<'col-sm-12'tr>>
      <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

      lengthMenu: [5, 10, 25, 50],

      pageLength: 10,

      language: {
        'lengthMenu': 'Display _MENU_',
      },

      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_pekerjaan_ahli_teknik_admin.json',
        type: 'POST',
        data: {
          columnsDef: [
            'no', 'depot', 'vendor', 'pekerjaan', 'sifat',
            'tanggal', 'status', 'aksi',
          ],
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'namaPekerjaan',
        title: 'Nama Pekerjaan',
      }, {
        data: 'uraian',
        title: 'Uraian',
      },{
        field: 'aksi',
        title: 'Aksi',
        responsivePriority: -1,
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          return `
          <a target="_blank" href="#" class="btn  btn-outline-primary" style="border-radius:20px">Lihat File</a>`;
        },
      }],

      initComplete: function() {
        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Depot':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });

        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Pekerjaan':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="3"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });
      },

      columnDefs: [{
        targets: [0, 1, 2, 3],
        className: 'text-center'
      }],
    });

    var filter = function() {
      var val = $.fn.dataTable.util.escapeRegex($(this).val());
      table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
    };

    var asdasd = function(value, index) {
      var val = $.fn.dataTable.util.escapeRegex(value);
      table.column(index).search(val ? val : '', false, true);
    };

    $('#kt_search_all').on('keyup', function() {
      table.search(this.value).draw();
    });
    $('#kt_reset').on('click', function(e) {
      e.preventDefault();
      $('.kt-input').each(function() {
        $(this).val('');
        table.column($(this).data('col-index')).search('', false, false);
      });
      table.table().draw();
    });

  };
  var initTable16 = function() {
    var table = $('#kt_table_dasarPekerjaan').DataTable({
      responsive: true,
      dom: `<'row'<'col-sm-12'tr>>
      <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

      lengthMenu: [5, 10, 25, 50],

      pageLength: 10,

      language: {
        'lengthMenu': 'Display _MENU_',
      },

      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_pekerjaan_ahli_teknik_admin.json',
        type: 'POST',
        data: {
          columnsDef: [
            'no', 'depot', 'vendor', 'pekerjaan', 'sifat',
            'tanggal', 'status', 'aksi',
          ],
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'namaPekerjaan',
        title: 'Nama Pekerjaan',
      },{
        field: 'aksi',
        title: 'Aksi',
        responsivePriority: -1,
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          return `
          <a target="_blank" href="#" class="btn  btn-outline-primary" style="border-radius:20px">Lihat File</a>`;
        },
      }],

      initComplete: function() {
        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Depot':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });

        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Pekerjaan':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="3"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });
      },

      columnDefs: [{
        targets: [0, 1, 2],
        className: 'text-center'
      }],
    });

    var filter = function() {
      var val = $.fn.dataTable.util.escapeRegex($(this).val());
      table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
    };

    var asdasd = function(value, index) {
      var val = $.fn.dataTable.util.escapeRegex(value);
      table.column(index).search(val ? val : '', false, true);
    };

    $('#kt_search_all').on('keyup', function() {
      table.search(this.value).draw();
    });
    $('#kt_reset').on('click', function(e) {
      e.preventDefault();
      $('.kt-input').each(function() {
        $(this).val('');
        table.column($(this).data('col-index')).search('', false, false);
      });
      table.table().draw();
    });

  };
  var initTable17 = function() {
    var table = $('#kt_table_dasarKontrak').DataTable({
      responsive: true,
      dom: `<'row'<'col-sm-12'tr>>
      <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

      lengthMenu: [5, 10, 25, 50],

      pageLength: 10,

      language: {
        'lengthMenu': 'Display _MENU_',
      },

      searchDelay: 500,
      processing: true,
      serverSide: false,
      ajax: {
        url: '../source/daftar_pekerjaan_ahli_teknik_admin.json',
        type: 'POST',
        data: {
          columnsDef: [
            'no', 'depot', 'vendor', 'pekerjaan', 'sifat',
            'tanggal', 'status', 'aksi',
          ],
        },
      },
      columns: [{
        data: 'no',
        title: 'No.',
      }, {
        data: 'namaPekerjaan',
        title: 'Nama Pekerjaan',
      },{
        field: 'aksi',
        title: 'Aksi',
        responsivePriority: -1,
        className: 'text-center',
        orderable: false,
        render: function(data, type, full, meta) {
          return `
          <a target="_blank" href="#" class="btn  btn-outline-primary" style="border-radius:20px">Lihat File</a>`;
        },
      }],

      initComplete: function() {
        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Depot':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="1"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });

        this.api().columns().every(function() {
          var column = this;

          switch (column.title()) {
            case 'Pekerjaan':
              column.data().unique().sort().each(function(d, j) {
                $('.kt-input[data-col-index="3"]').append('<option value="' + d + '">' + d + '</option>');
              });
              break;
          }
        });
      },

      columnDefs: [{
        targets: [0, 1, 2],
        className: 'text-center'
      }],
    });

    var filter = function() {
      var val = $.fn.dataTable.util.escapeRegex($(this).val());
      table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
    };

    var asdasd = function(value, index) {
      var val = $.fn.dataTable.util.escapeRegex(value);
      table.column(index).search(val ? val : '', false, true);
    };

    $('#kt_search_all').on('keyup', function() {
      table.search(this.value).draw();
    });
    $('#kt_reset').on('click', function(e) {
      e.preventDefault();
      $('.kt-input').each(function() {
        $(this).val('');
        table.column($(this).data('col-index')).search('', false, false);
      });
      table.table().draw();
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



    },

  };

}();

jQuery(document).ready(function() {
  KTDatatablesSearchOptionsAdvancedSearch.init();
});
