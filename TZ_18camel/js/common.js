$(document).ready(function() {

// Кнопка button для раскрытия меню
   $(".main_menu_button").click(function() {
    	$(".main_menu ul").slideToggle();
    	return false;
    });
    
//    burger menu
    // slide navigation slide down or up

  $("#nav_list").click(function(){
    $(".nav-list").slideToggle();
  });

    
// Липкая шапка или фиксированная
    
    // Options
    var options = {
    	offset: 400 //при каких px появляется шапка
    }
 
    // Create a new instance of Headhesive.js and pass in some options
    var header = new Headhesive('.header_menu', options);// 
        
    
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
    
//    Иконки для сайта
    
    (function() {
      if (window.pluso)if (typeof window.pluso.start == "function") return;
      if (window.ifpluso==undefined) { window.ifpluso = 1;
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }
    })();

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".scroll").click(function() {
		$.scrollTo($(".training_program"), 800, {
			offset: -90
		});
	});
    $(".coach_scroll").click(function() {
		$.scrollTo($(".course_coach"), 800, {
			offset: -90
		});
	});
    $(".check_in_scroll").click(function() {
		$.scrollTo($(".check_in"), 800, {
			offset: -90
		});
	});
    
    
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/


    $(document).ready(function() {
     
      $(".owl-carousel").owlCarousel({
     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
     
    });



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({scrollTop: 0}, 600);
		return false;
	});

});