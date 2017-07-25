$(document).ready(function() {
    

    $("#section_model_S").hover(function(){
        $(this).css("#hover_section_model_S");
    });
    
    
    //разворачивание/сворачивание окна 
    
$("#query_1").click(function(){
    $("#ans_1__text").slideToggle();
});   
    
$("#query_2").click(function(){
    $("#ans_2__text").slideToggle();
});
    
$("#query_3").click(function(){
    $("#ans_3__text").slideToggle();
});
    
$("#query_4").click(function(){
    $("#ans_4__text").slideToggle();
});
    
$("#query_5").click(function(){
    $("#ans_5__text").slideToggle();
});
    
$("#query_6").click(function(){
    $("#ans_6__text").slideToggle();
});
    
$("#query_7").click(function(){
    $("#ans_7__text").slideToggle();
});
    
$("#query_8").click(function(){
    $("#ans_8__text").slideToggle();
});
    
var slideWidth=300;
var sliderTimer;
$(function(){
$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,2500);
    $('.viewport').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide,2500);
    });
});

//function nextSlide(){
////    var currentSlide=parseInt($('.slidewrapper').data('current'));
//    currentSlide++;
//    if(currentSlide>=$('.slidewrapper').children().size())
//    {
//        currentSlide=-1;   
//    }
//    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
//}
    
   
$('#myTurntable').turntable(); // 3D обзор товара
   

    
    $('.center').slick({
  centerMode: true, //текущий слайд по центру
          variableWidth: true, //установим переменную ширину
  centerPadding: '70px', //слегка увеличиваем текущий слайд
  slidesToShow: 3,
  responsive: [ //сообщает, при какой ширине экрана нужно включать настройки
    {
      breakpoint: 768, // ширина экрана
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3 //количество слайдов для показа
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    
});