            jQuery(document).ready(function() {
                let url = window.location.href.match(/^[^\#\?]+/)[0];

                function param(name) {
                    return (location.search.split(name + '=')[1] || '').split('&')[0];
                }

                function init_daterange(start, end, label) {
                    var title = '';
                    var range = '';
                    if (param('s') !== '') {
                        title = 'Filter:';
                        let end = param('e') !== '' ? ' - ' + tgl_indo(param('e')) : '';
                        range = tgl_indo(param('s')) + end;
                        if ((param('s') === moment().add(1, 'days').format('YYYY-MM-DD').toString()) && (param('e') === moment().add(1, 'days').format('YYYY-MM-DD').toString()))
                            range = 'Semua Hari';
                        else if ((param('s') === moment().format('YYYY-MM-DD').toString()) && (param('e') === moment().format('YYYY-MM-DD').toString())) {
                            title = 'Hari Ini:';
                            range = tgl_indo(start.format('YYYY-MM-DD').toString());
                        } else if ((param('s') === moment().subtract(1, 'days').format('YYYY-MM-DD').toString()) && (param('e') === moment().subtract(1, 'days').format('YYYY-MM-DD').toString())) {
                            title = 'Kemarin:';
                            range = tgl_indo(start.format('YYYY-MM-DD').toString());
                        }
                    } else {
                        if ((end - start) < 100) {
                            title = 'Hari Ini:';
                            range = tgl_indo(start.format('YYYY-MM-DD').toString());
                        }
                    }

                    picker.find('.m-subheader__daterange-title').html(title);
                    picker.find('.m-subheader__daterange-date').html(' ' + range);
                }

                if ($('#m_dashboard_daterangepicker').length == 0) {
                    return;
                }
                var picker = $('#m_dashboard_daterangepicker');
                var start = param('s') !== '' ? moment(param('s'), 'YYYY-MM-DD') : moment();
                var end = param('e') !== '' ? moment(param('e'), 'YYYY-MM-DD') : moment();

                function cb(start, end, label) {
                    if ((end - start) >= 100) {
                        if (label == 'Semua Hari') window.location.replace(url + '?s=' + start.format('YYYY-MM-DD').toString() + '&e=' + end.format('YYYY-MM-DD').toString());
                        else window.location.replace(url + '?s=' + start.format('YYYY-MM-DD').toString() + '&e=' + end.format('YYYY-MM-DD').toString());
                    }
                }
picker.daterangepicker({
                    startDate: start,
                    endDate: end,
                    opens: 'left',
                    ranges: {
                        'Hari Ini': [moment(), moment()],
                        'Kemarin': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        '7 Hari Terakhir': [moment().subtract(6, 'days'), moment()],
                        '30 Hari Terakhir': [moment().subtract(29, 'days'), moment()],
                        'Bulan Ini': [moment().startOf('month'), moment().endOf('month')],
                        'Bulan Lalu': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                        'Semua Hari': [moment().add(1, 'days'), moment().add(1, 'days')]
                    },
                    locale: {
                        "format": "DD-MM-YYYY",
                        "separator": " - ",
                        "applyLabel": "Oke",
                        "cancelLabel": "Batal",
                        "fromLabel": "Dari",
                        "toLabel": "Ke",
                        "customRangeLabel": "Atur Sendiri",
                        "weekLabel": "W",
                        "daysOfWeek": ["M", "S", "S", "R", "K", "J", "S"],
                        "monthNames": ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                        "firstDay": 1
                    }
                }, cb);

                init_daterange(start, end, '');
            });
