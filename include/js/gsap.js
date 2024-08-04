$(function(){
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time)
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    

    const {innerHeight} = window;

    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    ScrollTrigger.matchMedia({
        // pc
        "(min-width: 1024px)": function() {
    
            gsap.to(".section-slogan video", {
                scale: 8,
                stagger: 0.25,
                duration: 3,
                scrollTrigger: {
                    trigger: ".section-slogan",
                    pin:true,
                    scrub:3,
                    invalidateOnRefresh: true
                }
            })

            gsap.to('.main-section .main-section__inner-video', {
                opacity:1,
                scale:1,
                duration: 2.2
            },2.5)
    
            const workList = gsap.utils.toArray('.section-project .section-project__inner')
    
            workList.forEach(wklist => {
                gsap.to(wklist, {
                    yPercent: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".section-project",
                        scrub: 1,
                    }, 
                });
            });
        },
        // mobile
        "(max-width: 1023px)": function() {
    
            gsap.to(".section-slogan video", {
                scale: 1,
                stagger: 0.25,
                duration: 3,
                scrollTrigger: {
                    trigger: ".section-slogan",
                    pin:false,
                    scrub:3,
                    invalidateOnRefresh: true
                }
            })

            
        }
    });
    
    
    window.addEventListener("resize", ScrollTrigger.update);


    gsap.to('.main-section .main-section__inner-row:nth-child(1) h2 div', {
        y: 0,
        duration: 1
    },.3)

    gsap.to('.main-section .main-section__inner-row:nth-child(2) h2 div', {
        y: 0,
        duration: 1
    },.8)

    gsap.to('.main-section .main-section__inner-row:nth-child(3) h2 div', {
        y: 0,
        duration: 1
    },1.3)

    gsap.to('.main-section .scrollDown', {
        opacity: 1,
        duration: 1
    },4.2)

    


    gsap.to(".section-text .section-text__box.tal p", {
        backgroundPositionX: "0%",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".section-text .section-text__box.tal",
            scrub: 1,
            y:0,
            start: "top center",
            end: "bottom center",
        }
    });

    gsap.to(".section-text .section-text__box.tar p", {
        backgroundPositionX: "0%",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".section-text .section-text__box.tar",
            scrub: 1,
            x:0,
            start: "top 100%",
            end: "bottom 50%",
        }
    });

    const panel = document.querySelector(".section-text");

    ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
    });

    const sec4 = document.querySelector(".section-project");

    ScrollTrigger.create({
        trigger: sec4,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false
    });


    gsap.to(".section-contact .bg-video", {
        scale: 1,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
            trigger: ".section-contact",
            start: "top top",
            pin:true,
            end: `+=${innerHeight}`,
            scrub:2,
            onEnter:function(){
                $('.section-contact .bg-video').addClass("on");
            },
            onLeaveBack:function(){
                $('.section-contact .bg-video').removeClass("on");
            }
        }
    })

    gsap.to(".section-contact .bg-video .videoText div *", {
        y:0,
        ease: 'none',
        duration: 5,
        scrollTrigger: {
            trigger: ".section-contact",
            start: "bottom-=20px 95%",
            end: "bottom-=20px 95%",
            scrub:1,
        }
    })

    gsap.to("section", {
        scrollTrigger: {
            trigger: ".section-parallax",
            start: "20% 20%",
            end: "30% 55%",
            scrub: true,
        }, 
        duration: 0.5,
        stagger: 0.1,
        backgroundColor: "#ffc266",
        color: "#fff",
        ease: "none",
    });

    gsap.to("section", {
        scrollTrigger: {
            trigger: ".section-parallax",
            start: "70% 20%",
            end: "85% 55%",
            scrub: true,
        }, 
        duration: 0.5,
        stagger: 0.1,
        backgroundColor: "#111",
        color: "#fff",
        ease: "none",
    });

    gsap.to("section", {
        scrollTrigger: {
            trigger: ".section-contact",
            start: "top 25%",
            end: "top 25%",
            scrub: true,
        }, 
        duration: 2,
        stagger: 0.1,
        backgroundColor: "#fff",
        ease: "none",
    });

    gsap.to(".section-contact .textWrap", {
        scrollTrigger: {
            trigger: ".section-contact",
            start: "top 25%",
            end: "top 25%",
            scrub: true,
            onEnter:function(){
                $('.section-contact .textWrap').addClass("on");
            },
            onLeaveBack:function(){
                $('.section-contact .textWrap').removeClass("on");
            }
        }, 
        duration: 2,
        stagger: 0.1,
        color: "#111",
        ease: "none",
    });

    const sec3Img = gsap.utils.toArray('.section-parallax .section-parallax__inner > div')

    sec3Img.forEach(image => {
        gsap.to(image, {
            yPercent: -100 * image.dataset.speed,
            ease: "none",
            scrollTrigger: {
                trigger: ".section-parallax",
                scrub: image.dataset.speed
            }, 
        });
    })

    gsap.to('.section-parallax .section-parallax__title span', {
        opacity:1,
        scrollTrigger: {
            trigger: ".section-parallax",
            start: "top 5%",
            end: "10% 35%",
            scrub: .5,
            onEnter:function(){
                $('.section-parallax').css("overflow", "visible");
            },
            onLeaveBack:function(){
                setTimeout(function(){
                    $('.section-parallax').css("overflow", "hidden");
                },400);
            }
        }, 
    });

    gsap.to('.section-parallax .section-parallax__title span', {
        text: "INTERACTIVE",
        delay:0.1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".section-parallax",
            start: "30% 48%",
            end: "30% 52%",
            scrub: .5,
        }, 
    });

    gsap.to('.section-parallax .section-parallax__title span', {
        stagger: 0.1,
        scale:1.2,
        scrollTrigger: {
            trigger: ".section-parallax",
            start: "68% 20%",
            end: "100% 20%",
            scrub: 1,
        }, 
    });


    


    const marqueeAnimation = () => {
        const marquees = document.querySelectorAll(".marquee__inner.forward");
        const marqueesRev = document.querySelectorAll(".marquee__inner.reverse");
        marquees.forEach((marquee) => {
          const marqueeText = marquee.querySelector(".marquee__part");
          const w = marqueeText; // Assign marqueeText element to w
      
      
          const [x, xEnd] = ['0%', (w.scrollWidth - marquee.offsetWidth) * -0.2];

      
          gsap.fromTo(w, { x }, {
            x: xEnd,
            scrollTrigger: {
              trigger: marquee,
              scrub: 0.5
            }
          });
        });

        marqueesRev.forEach((marquee) => {
            const marqueeTextRev = marquee.querySelector(".marquee__part");
            const w = marqueeTextRev; // Assign marqueeText element to w
            const wRev = marqueeTextRev;
        
        
            const [x, yEnd] = ['0%', (w.scrollWidth + marquee.offsetWidth) * 0.1];
  
        
            gsap.fromTo(wRev, { x }, {
              x: yEnd,
              scrollTrigger: {
                trigger: marqueesRev,
                scrub: 0.3
              }
            });
          });
        };

    marqueeAnimation();

    gsap.to('.section-contact .textWrap', {
        y: '-100%',
        scrollTrigger: {
            trigger: ".section-contact",
            start: "top top",
            end: "top 10%",
            scrub: true,
        }, 
    },1.3)

    
        
});