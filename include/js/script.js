/*document.write('<script src="include/js/meteor.js"></script>');*/

$(document).ready(function(){
	$(".menu").on("click", function() {
	  $(".path").addClass("is-active");
	  $(".overlay").addClass("is-open");
	  $(".overlay").fadeIn();
	  $(".overlay ul li, .overlay .closeBtn").css("opacity", "1");
	  $(".overlay ul li").css({"transform":"translatey(0)"});
	  $(".closeBtn").click(function(){
		  $(".overlay").fadeOut();
		  setTimeout(function(){
			  $(".overlay").removeClass("is-open");
		  }, 700);
		  $(".overlay ul li, .overlay .closeBtn").css("opacity", "0");
		  $(".overlay ul li").css({"transform":"translatey(-50px)"});
		  $(".path, .closeBtn").removeClass("is-active");
	  });
	});
});



$(function(){
	$(".tab div").not(".glider").click(function(){
		
		$(".tab div").removeClass("on");
		$(this).addClass("on");
		if($(".tab div").eq(0).hasClass("on") === true){
			$(".glider").css({"transform":"translateX(0)"});
		} else if($(".tab div").eq(1).hasClass("on") === true) {
			$(".glider").css({"transform":"translateX(100%)"});
		} else if($(".tab div").eq(2).hasClass("on") === true) {
			$(".glider").css({"transform":"translateX(200%)"});
		} else if($(".tab div").eq(3).hasClass("on") === true) {
			$(".glider").css({"transform":"translateX(300%)"});
		} else if($(".tab div").eq(4).hasClass("on") === true) {
			$(".glider").css({"transform":"translateX(400%)"});
		}
	});



	
	  


	$('.tab').on( 'click', 'div', function() {
	  var filterValue = $(this).children().attr('data-filter');
	  $('.pjList').isotope({ filter: filterValue });
	  $('.tab div').removeClass('on');
	  $(this).addClass('on');
	});
});

$(window).scroll(function() {
	if($(window).scrollTop() > 1) {
		$('header, .topBtn').addClass("on");
	} else {
		$('header, .topBtn').removeClass("on");
	}

	const section1Height = $(".section1").height() - 60;
	const section2Height = $(".section2").height();
	
	if($(window).scrollTop() > 1) {
		$(".fix_bn").addClass("on");
	} else {
		$(".fix_bn").removeClass("on");
	}
});

$(function(){
	$(".listWrap").prepend("<div class='videoBg'><video muted='' autoplay='' loop=''><source src='../../include/video/testVideo4.mp4' type='video/mp4'></video></div>");
});





$(function(){
	$("body").append('<div class="topBtn"></div>');
	$(".topBtn").on("click",function(){
		$("html").animate({scrollTop : 0}, 200);
	});
});
