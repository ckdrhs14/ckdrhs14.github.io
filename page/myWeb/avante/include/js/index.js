function calcPrice(){
	let cbArray = document.getElementsByName('price');
	let priceArray = new Array();
	for(let i = 0; i < cbArray.length; i++){
		if(cbArray[i].checked == true){
			let spanId = cbArray[i].id.replace('cb', 'price');
			let priceTag = document.getElementById(spanId).innerText;
			let regex = /[^0-9]/g;
			let results = priceTag.replace(regex, "");

			priceArray.push(results);
		}
	}

	let total = 26910000;

	for(let i = 0; i < priceArray.length; i++){
		total += parseInt(priceArray[i]);

	}

	const priceResult = total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	
	document.getElementById('result').innerText = priceResult + " 원";
	
}


$(".header_bottom li:first").addClass("on");
$('.right_body__inner .tab:first').show();
var clickEle = $('.header_bottom li');
clickEle.click(function () {

   $(window).scrollTop(0);
   
   var indexNo = $(this).index();

   if(indexNo >= 2){
	   alert("색상을 선택 후 NEXT를 눌러주세요.");
   } else {
	   $(".header_bottom li").removeClass("on");
	   $(this).addClass("on");
	   $('.right_body__inner .tab').hide();
	   $('.right_body__inner .tab').eq(indexNo).fadeIn(500);
   }
});

$(".tab.preview .innerBottom").on("click", function(){
	$(".header_bottom li").removeClass("on");
	$(".header_bottom li:eq(1)").addClass("on");
	$('.right_body__inner .tab').hide();
	$('.right_body__inner .tab').eq(1).fadeIn(500);
	$(window).scrollTop(0);
});

$(".tab.color .innerBottom, .btnGroup .btn.back").on("click", function(){
	$(".header_bottom li").removeClass("on");
	$(".header_bottom li:eq(2)").addClass("on");
	$('.right_body__inner .tab').hide();
	$('.right_body__inner .tab').eq(2).fadeIn(500);
	$(window).scrollTop(0);
});

$(".tab.option .innerBottom").on("click", function(){
	$(".header_bottom li").removeClass("on");
	$(".header_bottom li:eq(3)").addClass("on");
	$('.right_body__inner .tab').hide();
	$('.right_body__inner .tab').eq(3).fadeIn(500);
	$(window).scrollTop(0);
});

$(".colorbox input[type='radio']").on("click", function(){
	const colorStr = $(this).attr("id");
	var result5 = colorStr.slice(-2);

	$(".carImg").attr('src', 'include/image/avante_color_' + result5 + '.png');

	const colorTxt = $(this).siblings("label").find("p").text();

	$(".colorTit").text(colorTxt);
});

var counting = ["1975", "16", "1598"];

$({ val : 0 }).animate({ val : counting[0] }, {
  duration: 1500,
  step: function() {
	var num = numberWithCommas(Math.floor(this.val));
	$(".counter1").text(num);
  },
  complete: function() {
	var num = numberWithCommas(Math.floor(this.val));
	$(".counter1").text(num);
  }
});

$({ val : 0 }).animate({ val : counting[1] }, {
  duration: 1500,
  step: function() {
	var num = numberWithCommas(Math.floor(this.val));
	$(".counter2").text(num);
  },
  complete: function() {
	var num = numberWithCommas(Math.floor(this.val));
	$(".counter2").text(num);
  }
});

$({ val : 0 }).animate({ val : counting[2] }, {
  duration: 1500,
  step: function() {
	var num = numberWithCommas(Math.floor(this.val));
	$(".counter3").text(num);
  },
  complete: function() {
	var num = numberWithCommas(Math.floor(this.val));
	$(".counter3").text(num);
  }
});

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


gsap.utils.toArray(".scrollBanner").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "bottom center",
				// makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	  // animate the container one way...
	  tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});


var carInfoSwiper = new Swiper(".carInfoSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed : 700,
  autoplay: false,
  pagination: {
	el: ".carInfoSwiper .swiper-pagination",
	type: "progressbar",
  },
  navigation: {
	nextEl: ".carInfoSwiper .swiper-button-next",
	prevEl: ".carInfoSwiper .swiper-button-prev",
  },
});

$(".selectTit").on("click", function(){
	$(".selectList").hide();
	$(this).not($(this).next(".selectList").show());

	$(".selectList li").on("click", function(){
		$(this).parents(".selectList").hide();
	});

	$(this).addClass("on");



	/*if ($(this).hasClass("on")){

	} else {

	}*/

	if($(".selectList").css("display") == "block"){
		$('.selectList li').click(function() {
			var maintext = $(".selectTit").text();
			var text = $(this).text();
			text = text.replace("", "");
			$(this).parent(".selectList").prev(".selectTit").text(text);
			$(".selectTit").removeClass("on");
		});
	}
});

$(".selectWrap .depth2:first").show();
$(".selectList.depth1 li").click(function(){
	var depth1Value = $(this).attr("class");
	var depth2Value = $(".depth2").attr("class");

	$(this).parents(".selectList").parents("div").siblings(".depth2").each(function(){


		if(depth2Value){
			$(".depth2").not("." + depth1Value).hide();
			$("." + depth1Value).show();
		} else{
			$(".depth2").hide();
		}
	});

});


$(".selectWrap .depth2 li").on("click", function(){

	const commissionValue1 = "264,000 원";
	const commissionValue2 = "289,000 원";
	const commissionValue3 = "198,000 원";

	const cityValue = $(this).parents(".depth2").attr("class").split(' ');
	const cityValueDetail = cityValue[1];

	if(cityValueDetail == "seoul"){
		$(".commissionSubmit span").text(commissionValue1);
	} else if(cityValueDetail == "gyeonggi" || cityValueDetail == "gyeongbuk" || cityValueDetail == "gyeongnam") {
		$(".commissionSubmit span").text(commissionValue2);
	} else {
		$(".commissionSubmit span").text(commissionValue3);
	}

});

$(function(){
	$(".popBtn").on("click", function(){
		const popTit = $(this).attr("data-name");
		const popInfo = $(".popContainer .box").attr("data-name");

		$(".popContainer, .popDimmed").fadeIn();
		 $("body").css("overflow", "hidden");

		$(".popContainer .box").each(function(e){
			if($(this).attr("data-name") == popTit){
				$(this).show();
			}
		});
	});
	$(".popDimmed, .popClose").on("click", function(){
		$(".popContainer, .popDimmed").fadeOut();
		$(".popContainer .box").fadeOut();
		$("body").removeAttr("style");
		setTimeout(function(){
			$(".popContainer").scrollTop(0);
		}, 300);
	});
});


 $(window).scroll(function() {
	var wintop = $(window).scrollTop(), docheight = $('body').height(), winheight = $(window).height();
	var totalScroll = (wintop/(docheight-winheight))*100;
	$(".progress-bar").css("width",totalScroll+"%");

});