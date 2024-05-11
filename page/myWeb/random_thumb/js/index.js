// about 이미지 섹션 부분 
gsap.set('#intro_sec3', { opacity: 0});

gsap.to('#intro_sec3', {
  scrollTrigger: {
    trigger: '.background',
    start: 'top bottom',
    end: '50% 75%',
    scrub: 0.6 },

  opacity: 1,
  duration: 3,
  stagger: 0.6,
  ease: 'linear' });


gsap.to('#intro_sec3', {
  scrollTrigger: {
    trigger: ' h2.title ',
    start: 'top bottom',
    end: 'center center',
    scrub: 0.6 },

  duration: 3,
  ease: 'linear' });

  
  // svg 애니메이션
  
$(function() {
    $(window).scroll(function() {

        let scroll = $(window).scrollTop();
        let sec2_top = $("#intro_sec1 .main-title h1 ").offset().top ;
        let sec3_top = $('#intro_sec3').offset().top;
        let sec3_df_top = $('.about-text p:nth-child(2)').offset().top;
        let sec4_df_top = $("#intro_sec3 .more_inf .small_img").offset().top ;
        let sec4_top = $("#intro_sec4 .skill_container ol").offset().top ;


        if( scroll > sec2_top) {
            gsap.to(".about-text p:nth-child(2)", {duration: 0.7, stagger: 0.015, opacity: 1, y: 3, delay: 0.8})
        }

        if (scroll > sec3_df_top){
            gsap.to("#intro_sec3 .about-img-area .img_text_cont .title", {duration: 0.6, stagger: 0.015, opacity: 1, y:3})
        }

        if ($(this).scrollTop() >= Math.ceil(sec3_top)) {
            gsap.to("#intro_sec3 .background img", {duration: 0.8, stagger: 0.015, opacity: 1, x:3, delay:0.45})
            gsap.to("#intro_sec3 .more_inf", {duration: 0.8, stagger: 0.015, opacity: 1,  delay:1.2})
            $(".more_inf .small_img").addClass("anm_none");
            $(".circle_point_path").addClass("active_dash");
        } else {
            $(".circle_point_path").removeClass("active_dash");
        }

        if( scroll > sec4_df_top ) {
            gsap.to(".small_skill_text span", {duration: 0.7, opacity: 1, delay:0.5})
            gsap.to(".main_skill_text", {duration: 0.7, stagger: 0.015, opacity: 1, delay: 0.8})
            gsap.to(".skill_container ol li:nth-child(2)", {duration: 0.8, stagger: 0.015, opacity: 1, x: 3, delay: 1.1})
            gsap.to(".skill_container ol li:nth-child(3)", {duration: 0.8, stagger: 0.015, opacity: 1, x: 5, delay: 1.55}) 
        }
        if( scroll > sec4_top ) {
            gsap.to(".skill_container ol li:nth-child(4)", {duration: 0.8, stagger: 0.015, opacity: 1, x: 3, delay: 0.45})
            gsap.to(".skill_container ol li:nth-child(5)", {duration: 0.8, stagger: 0.015, opacity: 1, x: 5, delay: 0.85})


        }
    });

});
