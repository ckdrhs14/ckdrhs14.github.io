$(function() {
  var kv_length = $(".mainSlider .swiper-slide").length;
  var kv_index = 0;
});
function activeIndex($i) {
  /* mainSliderMax */
  var tem;
  if ($(".section1").hasClass("ver_pc")) {
      tem = ($i * 114) * -1; //( 90 + 24)
  } else if ($(".section1").hasClass("ver_tb")) {
      tem = ($i * 86) * -1; //( 62 + 24)
  } else if ($(".section1").hasClass("ver_mb")) {
      tem = ($i * 69) * -1; //( 45 + 24)
  } else {
      tem = ($i * 38) * -1; //( 22 + 16)
  };
  $(".mainSlider .swiper-slide").removeClass("swiper-slide-active");
  $(".mainSlider .swiper-slide").eq($i).addClass("swiper-slide-active");
  $(".mainSlider .swiper-wrapper").stop().animate({
      left: tem
  }, 400);
  /* kv_typo-area */
  $(".kv_typo-area .typo-list li").removeClass("active");
  $(".kv_typo-area .typo-list li").eq($i).addClass("active");
}
/* <!-- kv swiper --> */
var kvSwiper;
var hardStop = false;
$(function() {
  kvSwiper = new Swiper('.mainSliderSwiper', {
      autoplay: false,
      spaceBetween: 24,
      loop: true,
      autoplayDisableOnInteraction: true,
      pagination: {
          el: '.mainSliderSwiper .pagination',
          type: 'custom',
          renderCustom: function(swiper, current, total) {
                  return '<span class="cur tb3">' + current + '</span><i class="spf spf-action-slash"></i><span class="tot tb3">' + total + '</span>';
              }
      },
      navigation: {
          nextEl: '.mainSliderSwiper .button-next',
          prevEl: '.mainSliderSwiper .button-prev',
      },
      on: {
          transitionStart: function() {
              // console.log('transitionStart');
              if (kvSwiper) {
                  //setIntervalTimeStop()
                  activeIndex(kvSwiper.realIndex);
                  //setIntervalTimePlay();
              }
          }
      }
  });
  /* 좌우버튼 누를때 타이머 켜져있으면, 정지하고 시작 */
  $(".mainSliderSwiper").on('mouseenter', function() {
	if(!hardStop){
		setIntervalTimeStop();
	}
  })
  $(".mainSliderSwiper").on('mouseout', function() {
	if(!hardStop){
		if (!$(".mainSliderSwiper .js-play_pause").hasClass("pause")) {
		setIntervalTimeStop();
		setIntervalTimePlay();
		}
	}
  })
  $('.mainSliderSwiper ').on('mouseover', function() {
      ////console.log('stop autoplay');
      // kvSwiper.autoplay.stop();
	  if(!hardStop){
		$('.mainSliderSwiper .js-play_pause').addClass("pause");
		setIntervalTimeStop();
	  }
  });
  $('.mainSliderSwiper ').on('mouseout', function() {
      ////console.log('start autoplay');
      // kvSwiper.autoplay.start();
	  if(!hardStop){
		$('.mainSliderSwiper .js-play_pause').removeClass("pause");
		setIntervalTimePlay();
	  }
  });
  $(".mainSliderSwiper .button-prev").on("click", function($e) {
	if(!hardStop){
		if (!$(".mainSliderSwiper .js-play_pause").hasClass("pause")) {
			setIntervalTimeStop();
			setIntervalTimePlay();
		}
	}
  })
  $(".mainSliderSwiper .button-next").on("click", function($e) {
	if(!hardStop){
		if (!$(".mainSliderSwiper .js-play_pause").hasClass("pause")) {
			setIntervalTimeStop();
			setIntervalTimePlay();
		}
	}
  })
  $(".mainSliderSwiper").on("click", ".js-play_pause", function($e) {
	// console.log('play btn');
	if(hardStop){
		$('.mainSliderSwiper .js-play_pause').removeClass("pause");
		setIntervalTimePlay();
	} else {
		$('.mainSliderSwiper .js-play_pause').addClass("pause");
		setIntervalTimeStop();
	}
	hardStop = !hardStop;
	});
});
/*  <!-- 타이머 -->  */
var setintervalTime; // setInterval 객체
var setintervalTimeGet = 0; // 현재 진행 시간
var imgdurationTime = 500; // 이미지 (1500 : 15초)
function setIntervalTimePlay() {
  if (setintervalTime == null) {
      // console.log('setIntervalTimePlay');
      setintervalTime = setInterval(tintervalTimeSet, 10);
  }
};
function setIntervalTimeStop() {
  ////console.log('setIntervalTimeStop');
  clearInterval(setintervalTime);
  setintervalTime = null
  setintervalTimeGet = 0;
};
// 재생시간 체크
function tintervalTimeSet() {
  setintervalTimeGet++;
  // 시간 도달 하면 (다음)
  if (imgdurationTime <= setintervalTimeGet) {
      ////console.log("setintervalTimeGet: "+ setintervalTimeGet)
      setintervalTimeGet = 0;
      //setIntervalTimeStop();  // 타이머 초기화;
      kvSwiper.slideNext();
  }
}
/* 시작 */
setIntervalTimePlay();