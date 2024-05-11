// 햄버거 메뉴  

const body = $("body");



$(".icon-wrap").click(function(){

	$(".icon").toggleClass("animation");

	// body.toggleClass("open");



     if(!$("body").hasClass('open')) {

         body.addClass('open');

         body.removeClass('close');

     } else {

         body.removeClass('open');

         body.addClass('close');

     }



    

});



// overview 부분 

$('.ov_img_hv1').hover(function() {

    $(".ov_img1 img").addClass( "active_ov_img" );

    $(".about-text p, .ov_img_hv2, .ov_img_hv3").css("color", "#4e4e4e");

  }, function(){

    $( '.ov_img1 img' ).removeClass( 'active_ov_img' );

    $(".about-text p, .ov_img_hv2, .ov_img_hv3").css("color", "#f9f9f9");

  });



  $('.ov_img_hv2').hover(function() {

    $(".ov_img2 img").addClass( "active_ov_img" );

    $(".about-text p, .ov_img_hv1, .ov_img_hv3 ").css("color", "#4e4e4e");

  }, function(){

    $( '.ov_img2 img' ).removeClass( 'active_ov_img' );

    $(".about-text p, .ov_img_hv1, .ov_img_hv3").css("color", "#f9f9f9");

  });



  $('.ov_img_hv3').hover(function() {

    $(".ov_img3 img").addClass( "active_ov_img" );

    $(".about-text p, .ov_img_hv1 , .ov_img_hv2").css("color", "#4e4e4e");

  }, function(){

    $( '.ov_img3 img' ).removeClass( 'active_ov_img' );

    $(".about-text p, .ov_img_hv1 , .ov_img_hv2").css("color", "#f9f9f9");

  });



  $('.ov_small_img_hv1').hover(function() {

    $(".ov_small_img1 img").addClass( "active_ov_img" );

    $(".about-text p").css("color", "#4e4e4e");

  }, function(){

    $( '.ov_small_img1 img' ).removeClass( 'active_ov_img' );

    $(".about-text p").css("color", "#f9f9f9");

  });





//커서 움직임 효과

    $(document).mousemove(function(e){

    gsap.to(".cursor", {duration: 0.4, left: e.pageX - 5, top: e.pageY - 5 });

});



//커서 오버 효과1

$(".intro .main_cont ").hover(function(){

    $(".cursor").addClass("active");

}, function(){

    $(".cursor").removeClass("active");

});



//커서 오버 효과2

$(".next_area ").hover(function(){

    $(".cursor").addClass("active2");

}, function(){

    $(".cursor").removeClass("active2");

});





// page transition

 setTimeout(function () {

    document.getElementById("cover").classList.add("cover-left");

});



function pageClick() {

    document.querySelectorAll(".page_click").forEach((elem) => {

      elem.addEventListener("click", (e) => {

        e.preventDefault();

        const dataName = elem.getAttribute('data-name');

        console.log(dataName);

        document.getElementById("cover").classList.add("cover-right");

        setTimeout(() => {

          window.location.href =

            "http://leeboa.com/" + dataName + ".html";

        }, 2000);

      });

    });

  }

  pageClick();





//공통 인트로 텍스트 애니메이션



Splitting();



 TweenMax.staggerFrom('.char', 1.3, {

    y: 70,

    delay: 1.1,

    rotation:90,

    rotationX:-50, 

    opacity: 0,

    transformOrigin:"50% 50%", 

    ease: Back.easeInOut.config(1.3)}, 0.05); 



// 공통 인트로 모션 애니메이션 

let side_img =  gsap.timeline();



side_img.from("#intro_sec1 .intro-img", 0.8, {

  opacity: 0,

  y: -30,

  delay: 2.2,

  duration: 1,

  ease: Back.easeOut.config(1.1)

});





let left_tit = gsap.timeline();



left_tit.from(".main-top-area .left-tit", 0.3, {

  opacity: 0,

  x: -30,

  delay: 2.9,

  duration: 1,

  ease: Back.easeOut.config(1.1)

});



let center_nav1 = gsap.timeline();



center_nav1.from(".center-nav", 0.5, {

  opacity: 0,

  x: -30,

  delay:3.7,

  duration: 1,

  ease: Back.easeOut.config(1.1)

});



let right_btn = gsap.timeline();



right_btn.from(".right-btn-wrap", 0.5, {

  opacity: 0,

  x: -30,

  delay: 4.1,

  duration: 1,

  ease: Back.easeOut .config(1.1)

});



let left_nav =  gsap.timeline();



left_nav.from(".left-nav, .icon-wrap", 0.5, {

  opacity: 0,

  delay: 4.6,

  duration: 1,

  ease: Back.easeOut.config(1.3)

});



$(window).scroll(function() {



    let scroll = $(window).scrollTop();

    let sec2_top = $("#intro_sec1 .main-title h1").offset().top ;



    if( scroll > sec2_top) {

        gsap.to(".overview span", {duration: 0.9, opacity: 1, x: 3,})

        gsap.to(".about-text p:nth-child(1)", {duration: 0.7, stagger: 0.015, opacity: 1, y: 3 , delay: 0.3})

    }



});