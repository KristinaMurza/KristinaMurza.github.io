$(document).ready(function() {
  
            //разворачивание/сворачивание окна 
    
    $("#description_show").click(function () { 
    	$(".description_title_text").show();
    	$("#description_line").show();
        $("#description_show").hide();
    });
 
    $("#description_line").click(function () {
    	$(".description_title_text").hide();
        $("#description_line").hide();
        $("#description_show").show();
    });
    
    $("#delivery_show").click(function () { 
    	$(".delivery_title_text").show();
    	$("#delivery_line").show();
        $("#delivery_show").hide();
    });
 
    $("#delivery_line").click(function () {
    	$(".delivery_title_text").hide();
        $("#delivery_line").hide();
        $("#delivery_show").show();
    });
    
    $("#dimensions_show").click(function () { 
    	$(".dimensions_title_text").show();
    	$("#dimensions_line").show();
        $("#dimensions_show").hide();
    });
 
    $("#dimensions_line").click(function () {
    	$(".dimensions_title_text").hide();
        $("#dimensions_line").hide();
        $("#dimensions_show").show();
    });
    
    $("#product_show").click(function () { 
    	$(".product_show_info").show();
    	$("#product_line").show();
        $("#product_show").hide();
    });
 
    $("#product_line").click(function () {
    	$(".product_show_info").hide();
        $("#product_line").hide();
        $("#product_show").show();
    });
    
        //Кнопка поиска открывающаяся при клике
    $('.opacity').css({opacity: 0.7}); 
 
    $(".info_shopping_map").click(function(){ 
    	$(".shopping_popup").show();
    	$(".close_search").show();
    	$(".opacity").show();
    });
 
    $(".close_search").click(function(){
    	$(".shopping_popup").hide();
    	$(".close_search").hide();
    	$(".opacity").hide();
    });
    
        //Кнопка "Наверх".
    $(window).scroll(function(){
    	if ($(this).scrollTop() > 800) {
    		$('.up_button').fadeIn();
    	} else {
    		$('.up_button').fadeOut();
    	}
    });
 
    $('.up_button').click(function(){
    	$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
    });
    
});