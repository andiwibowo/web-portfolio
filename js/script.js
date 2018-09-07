// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap element yang bersangkutan
	var elemenTujuan = $(tujuan);
	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 800, 'easeInOutExpo');
	e.preventDefault();

});