$(function(){
	$('.menu_btn').on('click',function(){
		if($('body').hasClass('open_status')){
			toggleMenu('close');
		}else{
			toggleMenu('open');
		}
	})

	$('.overlay').on('click',function(){
		if($('body').hasClass('open_status')){
			toggleMenu('close');
		}
	})

	function toggleMenu(str){
		if(str=="open"){
			$('body').addClass('open_status');
			$('.hamburger_menu').addClass('on');
			$('.overlay').addClass('on');
		}
		else if(str=="close"){
			$('body').removeClass('open_status');
			$('.hamburger_menu').removeClass('on');
			$('.overlay').removeClass('on');
		}
	}
})