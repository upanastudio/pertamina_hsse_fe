/*=====PERIZINAN=====*/
$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_amdal").click(function () {
		console.log(i);
		$("#container_amdal").append('<div data-id="'+i+'" class="input-berkas berkas_amdal">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input" required>'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document" required>'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_amdal').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_amdal[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_ukl_upl").click(function () {
		console.log(i);
		$("#container_ukl_upl").append('<div data-id="'+i+'" class="input-berkas berkas_ukp_upl">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_ukl_upl').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_ukp_upl[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_dplh").click(function () {
		console.log(i);
		$("#container_dplh").append('<div data-id="'+i+'" class="input-berkas berkas_dplh">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_dplh').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_dplh[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_imb").click(function () {
		console.log(i);
		$("#container_imb").append('<div data-id="'+i+'" class="input-berkas berkas_imb">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_imb').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_imb[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_persetujuan_layanan").click(function () {
		console.log(i);
		$("#container_persetujuan_layanan").append('<div data-id="'+i+'" class="input-berkas berkas_persetujuan_layanan">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_persetujuan_layanan').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_persetujuan_layanan[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_serah_terima_lahan").click(function () {
		console.log(i);
		$("#container_serah_terima_lahan").append('<div data-id="'+i+'" class="input-berkas berkas_serah_terima">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_serah_terima_lahan').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_serah_terima[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_izin_terminal").click(function () {
		console.log(i);
		$("#container_izin_terminal").append('<div data-id="'+i+'" class="input-berkas berkas_izin_terminal">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_izin_terminal').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_izin_terminal[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_perundangan_lainnya").click(function () {
		console.log(i);
		$("#container_perundangan_lainnya").append('<div data-id="'+i+'" class="input-berkas berkas_perundangan_lain">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_perundangan_lainnya').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_perundangan_lain[data-id="' + id + '"]').remove();
	});
})
/*====END: PERIZINAN=====*/

/*=====CSMS=====*/
$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_pja").click(function () {
		console.log(i);
		$("#container_pja").append('<div data-id="'+i+'" class="input-berkas berkas_pja">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input" required>'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document" required>'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_pja').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_pja[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_hse_plan").click(function () {
		console.log(i);
		$("#container_hse_plan").append('<div data-id="'+i+'" class="input-berkas berkas_hse_plan">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_hse_plan').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_hse_plan[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_kpi_project").click(function () {
		console.log(i);
		$("#container_kpi_project").append('<div data-id="'+i+'" class="input-berkas berkas_kpi_projek">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_kpi_project').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_kpi_projek[data-id="' + id + '"]').remove();
	});
})
/*====END: CSMS=====*/

/*=====JSA=====*/
$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_hazard").click(function () {
		console.log(i);
		$("#container").append('<div data-id="'+i+'" class="input-berkas berkas_hazard">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-5">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input" required>'+
			'</div>'+
			'<div class="col-sm-6">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document" required>'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input_hazard" name="btn_hapus_input_hazard" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container').on('click','#btn_hapus_input_hazard', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_hazard[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_heavy_equipment").click(function () {
		console.log(i);
		$("#container_heavy_equipment").append('<div data-id="'+i+'" class=" input-berkas berkas_heavy">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-5">'+
			'<input class="form-control" type="text" placeholder="heavy equipment" id="input_heavy_equipment" name="input_heavy_equipment">'+
			'</div>'+
			'<div class="col-sm-3">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="sop_doc" name="sop_doc">'+
			'<label class="custom-file-label" for="customFile">Pilih SOP</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-3">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="sertifikat_doc" name="sertifikat_doc">'+
			'<label class="custom-file-label" for="customFile">Pilih Sertifikat</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input_heavy" name="btn_hapus_input_heavy" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_heavy_equipment').on('click','#btn_hapus_input_heavy', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_heavy[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_lifting_plan").click(function () {
		console.log(i);
		$("#container_lifting_plan").append('<div data-id="'+i+'" class=" input-berkas berkas_lifting_plan">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-5">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-6">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_lifting_plan').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_lifting_plan[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_prosedur_kerja").click(function () {
		console.log(i);
		$("#container_prosedur_kerja").append('<div data-id="'+i+'" class="input-berkas berkas_prosedur_kerja">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_prosedur_kerja').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_prosedur_kerja[data-id="' + id + '"]').remove();
	});
})
/*====END: JSA=====*/

/*=====MOC=====*/
$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_isolasi_energi").click(function () {
		console.log(i);
		$("#container_isolasi_energi").append('<div data-id="'+i+'" class="input-berkas berkas_isolasi_energi">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input" required>'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document" required>'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_isolasi_energi').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_isolasi_energi[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_prosedur").click(function () {
		console.log(i);
		$("#container_prosedur").append('<div data-id="'+i+'" class="input-berkas berkas_prosedur">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_prosedur').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_prosedur[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_training").click(function () {
		console.log(i);
		$("#container_training").append('<div data-id="'+i+'" class=" input-berkas berkas_training">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_training').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_training[data-id="' + id + '"]').remove();
	});
})
/*====END: MOC=====*/

/*=====SIMLOK=====*/
$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_dasar_pekerjaan").click(function () {
		console.log(i);
		$("#container_dasar_pekerjaan").append('<div data-id="'+i+'" class="input-berkas berkas_dasar_pekerjaan">'+
			'<div  class="row inputan">'+
			'<div class="col-sm-11">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document" required	>'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_dasar_pekerjaan').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_dasar_pekerjaan[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_dasar_kontrak_spmp").click(function () {
		console.log(i);
		$("#container_dasar_kontrak_spmp").append('<div data-id="'+i+'" class="input-berkas berkas_dasar_spmp">'+
			'<div  class="row inputan">'+
			'<div class="col-sm-11">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document" required>'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_dasar_kontrak_spmp').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_dasar_spmp[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_nama_pekerjaan").click(function () {
		console.log(i);
		$("#container_nama_pekerjaan").append('<div data-id="'+i+'" class="input-berkas berkas_nama_pekerjaan">'+
			'<div  class="row inputan">'+
			'<div class="col-sm-11">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_nama_pekerjaan').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_nama_pekerjaan[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_surat_permohonan_pekerja").click(function () {
		console.log(i);
		$("#container_surat_permohonan_pekerja").append('<div data-id="'+i+'" class=" input-berkas berkas_surat_permohonan">'+
			'<div  class="row inputan">'+
			'<div class="col-sm-11">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_surat_permohonan_pekerja').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_surat_permohonan[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_gambar_kerja").click(function () {
		console.log(i);
		$("#container_gambar_kerja").append('<div data-id="'+i+'" class="input-berkas berkas_gambar_kerja">'+
			'<div  class="row inputan">'+
			'<div class="col-sm-11">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_gambar_kerja').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_gambar_kerja[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_dokumen_peralatan").click(function () {
		console.log(i);
		$("#container_dokumen_peralatan").append('<div data-id="'+i+'" class="input-berkas berkas_peralatan">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_dokumen_peralatan').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_peralatan[data-id="' + id + '"]').remove();
	});
})

$(document).ready(function() {
	let i = 1;
	$("#btn_tambah_form_inspeksi").click(function () {
		console.log(i);
		$("#container_form_inspeksi").append('<div data-id="'+i+'" class="input-berkas berkas_inspeksi">'+
			'<div  class="row inputan">'+
			'<div  class="col-sm-6">'+
			'<input class="form-control" type="text" placeholder="input text" id="input" name="input">'+
			'</div>'+
			'<div class="col-sm-5">'+
			'<div class="custom-file">'+
			'<input type="file" class="custom-file-input" id="document" name="document">'+
			'<label class="custom-file-label" for="customFile">Pilih berkas</label>'+
			'</div>'+
			'</div>'+
			'<div class="col-sm-1">' +
			'<button type="button" data-id="'+i+'" id="btn_hapus_input" name="btn_hapus_input" class="btn btn-secondary btn_hapus">'+
			'<span class="fa fa-trash-alt"></span>'+
			'</button>' +
			'</div>' +
			'</div></div>');
		i++; 

	});

	$('#container_form_inspeksi').on('click','#btn_hapus_input', function (e) {
		let id = $(this).data('id');
		console.log(id);
		$('.berkas_inspeksi[data-id="' + id + '"]').remove();
	});
})
/*====END: SIMLOK=====*/