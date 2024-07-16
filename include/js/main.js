$(function(){
	
	// gsap.to(".section1 .objectArea", 1.1, {
	//   opacity: 1,
	//   y: -100,
	//   delay: 0.5,
	//   duration: 0.5,
	// });

	// gsap.to(".fix_bn", 0.1, {
	//   opacity: 1,
	//   y: 34,
	//   delay: 1.8,
	//   duration: 0.1,
	// });

	// gsap.to(".section1 .subtxt", 1.1, {
	//   opacity: 1,
	//   y: -40,
	//   delay: 6,
	//   duration: 0.5,
	// });


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

// $(function(){
// 	moon.animate(
// 	  { opacity: [.4], },
// 	  {
// 		duration: 7500,
// 		iterations: Infinity,
// 		direction: "alternate",
// 		easing: "ease-in-out",
// 		composite: "add" // *** this is the important line
// 	  }
// 	);
// });

$(window).scroll(function() {
	var wintop = $(window).scrollTop(), docheight = $('body').height(), winheight = $(window).height();
	var totalScroll = (wintop/(docheight-winheight))*100;
	$(".progress-bar").css("width",totalScroll+"%");

});



