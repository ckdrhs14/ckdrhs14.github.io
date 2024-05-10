$(function(){
	$('.mar10>li:eq(0)').css('display','block');
	$('.mar20 li').click(function(){
		$('.mar10>li').css('display','none');
		var i=$(this).index();
		$('.mar10>li').eq(i).css('display','block');
	});
});
