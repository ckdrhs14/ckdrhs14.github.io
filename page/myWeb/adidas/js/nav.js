$(document).ready(function(){  
    $(".main_gnb li a").on('mouseenter',function(){
        $('.main_lnb').slideDown();
    })
    
    $(".header_top,.header_logo,.content").on('mouseenter',function(){
        $('.main_lnb').slideUp();
    })
    
    
//  $(".main_gnb").hover(function() {                    //마우스를 topnav에 오버시
//   $(this).parent().find(".main_lnb").slideDown('normal').show(); //subnav가 내려옴.
//   $(this).parent().hover(function() { 
//       
//   }, function(){  
//   $(this).parent().find(".main_lnb").slideUp('slow');//subnav에서 마우스 벗어났을 시 원위치시킴  
//   });  
//  });  
   
 }); 