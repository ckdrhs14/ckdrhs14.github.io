$(function(){
	var n=0;
	$('#btn0 a').addClass('act');
	var id=setInterval(slideTarget, 3000);
	
	$('.btn_group a').click(function(e){
		e.preventDefault();
		n=$(this).parent().attr('id').substr(3,1);//index()
		//console.log(n);
		slideTarget()
	});

	$('.btn_group a').hover(function(){
		clearInterval(id);
	},function(){
		id=setInterval(slideTarget, 3000);
	})

	function slideTarget(){
		var pos=n*(-1200);
		$('.viewer').stop().animate({left:pos},500);
		$('.btn_group li a').removeClass('act');
		$('.btn_group li').eq(n).find('a').addClass('act');
		n++;
		if(n==4){n=0}
	}
	



})