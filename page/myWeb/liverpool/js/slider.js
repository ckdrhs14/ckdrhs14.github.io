$(function(){
	var id=setInterval(leftMoving,3000);
	function leftMoving(){
		$('.photo').animate({left:'-='+190+'px'},400,function(){
			$('.photo li').first().appendTo('.photo');
			$('.photo').css({'left':'+='+190+'px'})
		});
	}

	function rightMoving(){
		$('.photo').animate({left:'+='+190+'px'},400,function(){
			$('.photo li').first().prependTo('.photo');
			$('.photo').css({'left':'+='+190+'px'})
		});
	}
})