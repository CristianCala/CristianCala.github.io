window.onload = function() {
	var contenedor = document.getElementById('contenedor_carga');

	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0'
}

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});