$(function () {
			var trigger = $('.lnb');   // #trigger이름을 가진 요소를  trigger변수에 저장
			var menu = $('nav ul');
			$(trigger).on('click', function (e) { // trigger에 click이벤트를연결해 실행할 함수를 정의
				e.preventDefault(); //트리거에 사용한 <a>태그의 기본 기능 취소
				menu.slideToggle(); //변수 menu에 저장한 nav ul을 slideToggle()메서드를 적용해서 slideUp과slideDown을 반복
			});
			$(window).resize(function () {
				var w = $(window).width();
				if (w > 320 && menu.is(':hidden')) { //화면 너비가 320px이상이 되어서 내비게이션이 사라지면 
					menu.removeAttr('style'); // 변수 menu에 저장된 스타일을 제거
				}
			});
		});