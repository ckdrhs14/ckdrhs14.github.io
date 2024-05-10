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



// 타이핑 이벤트
const $text = document.querySelector(".typing");

// 글자 모음
const letters = ["LEE.c.g Portfolio"];

// 글자 입력 속도
const speed = 150;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
	await wait(speed);
	$text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(1200);
  
  // 지우는 효과
  if (letters[i + 1]) remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
	await wait(speed);
	
	letter.pop();
	$text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i++;
  typing();


}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 3000);


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


	
	$('.pjList').isotope({
	  itemSelector: '.pjList li',
	  transitionDuration: 600,
	  sortBy : 'original-order',
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
		$('header').addClass("on");
	} else {
		$('header').removeClass("on");
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
	$(".listWrap").prepend('<div class="videoBg"><video muted="" autoplay="" loop=""><source src="../../include/video/testVideo4.mp4" type="video/mp4"></video></div>');
});

$(function(){
	moon.animate(
	  { opacity: [.4], },
	  {
		duration: 7500,
		iterations: Infinity,
		direction: "alternate",
		easing: "ease-in-out",
		composite: "add" // *** this is the important line
	  }
	);
});

$(function(){
	gsap.utils.toArray(".scrollBanner").forEach(section => {
		let tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "center center",
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



	gsap.to(".section1 .objectArea", 1.1, {
	  opacity: 1,
	  y: -100,
	  delay: 0.5,
	  duration: 0.5,
	});

	gsap.to(".fix_bn", 0.1, {
	  opacity: 1,
	  y: 34,
	  delay: 1.8,
	  duration: 0.1,
	});

	gsap.to(".section1 .subtxt", 1.1, {
	  opacity: 1,
	  y: -40,
	  delay: 6,
	  duration: 0.5,
	});


	gsap.set('.section2 .innerWrap, .section3 .innerWrap, .section4 .innerWrap, .section5 .innerWrap', { opacity: 0, y: 50,});

	gsap.to('.section2 .innerWrap', {
	  scrollTrigger: {
		trigger: '.section2',
		start: 'top bottom',
		end: '50% 50%',
		scrub: 0.1,
	  },
	  y: 0,
	  opacity: 1,
	  duration: 10,
	  stagger: 10,
	  ease: 'expo'
	});

	gsap.to('.section3 .innerWrap', {
	  scrollTrigger: {
		trigger: '.section3',
		start: 'top bottom',
		end: '50% 50%',
		scrub: 0.1,
	  },
	  y: 0,
	  opacity: 1,
	  duration: 10,
	  stagger: 10,
	  ease: 'expo'
	});

	gsap.to('.section4 .innerWrap', {
	  scrollTrigger: {
		trigger: '.section4',
		start: 'top bottom',
		end: '50% 50%',
		scrub: 0.1,
	  },
	  y: 0,
	  opacity: 1,
	  duration: 10,
	  stagger: 10,
	  ease: 'expo'
	});

	gsap.to('.section5 .innerWrap', {
	  scrollTrigger: {
		trigger: '.section5',
		start: 'top bottom',
		end: '50% 50%',
		scrub: 0.1,
	  },
	  y: 0,
	  opacity: 1,
	  duration: 10,
	  stagger: 10,
	  ease: 'expo'
	});
});
