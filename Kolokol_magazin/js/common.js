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
    
    
    
    
    
    $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
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