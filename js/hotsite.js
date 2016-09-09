$(window).scroll(function(event) {
	if ($(this).scrollTop() > 180) {
        $('section.assigns.as-tres').fadeIn(2000);	
    } else {
        $('section.assigns.as-tres').fadeOut(1200);
		};
	if ($(this).scrollTop() > 550) {
        $('section.assigns.as-quatro').fadeIn(2000);	
    } else {
        $('section.assigns.as-quatro').fadeOut(1200);
		} ;     
	if ($(this).scrollTop() > 850) {
        $('section.assigns.ultimo-assign').fadeIn(2000);	
    } else {
        $('section.assigns.ultimo-assign').fadeOut(1200);
        $('.englob-img.dois.maofechada img').attr('src', 'mao-aberta.png');
		} ;  
});
$(document).ready(function(){
	$('.englob-img.dois.maofechada img').mouseover(function(){
	  $('.englob-img.dois.maofechada img').attr('src', 'mao-fechada.png');
	});
});
