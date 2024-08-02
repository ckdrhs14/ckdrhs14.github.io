$(function(){
	const mouse = document.querySelector('.cursor');


	document.addEventListener('mousemove',function(e){
	  position(e.clientX, e.clientY);
	});
	
	function position(clientX, clientY){
	  mouse.style.left = clientX + "px";
	  mouse.style.top = clientY+ "px";
	}

	function cursor_hover(e) {
		mouse.classList.add('cursor_hover');
	}

	function cursor_remove_hover(e) {
		mouse.classList.remove('cursor_hover');
	}
	
	document.querySelectorAll('a').forEach(item => {
		item.addEventListener('mouseover', cursor_hover);
		item.addEventListener('mouseleave', cursor_remove_hover);
	})
});



$(function(){
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);


	function hasScrolled() {
		var st = $(this).scrollTop();
		
		if(Math.abs(lastScrollTop - st) <= delta){
			return;
		}
		
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('header').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('header').removeClass('nav-up').addClass('nav-down');
			}
		}
		
		lastScrollTop = st;
	}
})

$(window).resize(function(){
	
	const bw = $(window).width();
	if (bw > 900 && bw < 1024) {
		location.reload();
	} else if(bw > 1024) {
		setTimeout(function() {	
			$('html, body').css({'overflow': 'visible'});
		}, 4500);
	}
})

$(document).ready(function(){
	const bw = $(window).width();
	if (bw > 1024) {
		setTimeout(function() {	
			$('html, body').css({'overflow': 'visible'});
		}, 4500);
	} 
	
});
