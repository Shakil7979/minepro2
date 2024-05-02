$(document).ready(function(){ 


	// $(document).on('click','.mobile_bars',function(){
	// 	$('.header_menu').slideToggle();
	// });

	var count = 0;

	$(document).on('click','.mobile_bars',function(){
		if(count == 0){ 
			$('.header_menu').fadeIn(); 
			$(this).html('<i class="fa-solid fa-xmark"></i>');
			count = 1;
		}else{
			$('.header_menu').fadeOut(); 
			$(this).html('<i class="fas fa-bars"></i>');
			count = 0;
		}
	})



});