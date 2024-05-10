$(document).ready(function(){  
  
    $("ul.subnav").parent().append("<span></span>"); //제이쿼리 시동하고 ul.subnav뒤에 비어있는 span태그를 추가  
  
    $("ul.topnav li a").click(function() { //클릭시 다음 이벤트를 subnav에 적용 
  
        $(this).parent().find("ul.subnav").slideDown('fast').show(); //클릭시 subnav을 아래로 내림
  
        $(this).parent().hover(function() {  
        }, function(){  
            $(this).parent().find("ul.subnav").slideUp('fast'); //마우스 벗어났을때 원위치시킴  
        });  
  
        
        }).hover(function() {  
            $(this).addClass("subhover"); //마우스 오버시 subhover 클래스 추가  
        }, function(){  //On Hover Out  
            $(this).removeClass("subhover"); //마우스 아웃시 subhover클래스 제거  
    });  
  
});  
