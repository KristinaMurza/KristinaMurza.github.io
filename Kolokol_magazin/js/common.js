$(document).ready(function() {
    

    $("#section_model_S").hover(function(){
        $(this).css("#hover_section_model_S");
    });
    

// Кнопка button для раскрытия меню
   $(".main_menu_button").click(function() {
    	$(".main_menu ul").slideToggle();
    	return false;
    });
    
    
// Липкая шапка или фиксированная
    
    // Options
    var options = {
    	offset: 400 //при каких px появляется шапка
    }
 
    // Create a new instance of Headhesive.js and pass in some options
    var header = new Headhesive('.header_shapka', options);
    
    
    //Кнопка поиска открывающаяся при клике
    $('.opacity').css({opacity: 0.7}); 
 
    $(".search_header").click(function(){ 
    	$(".search_popup").show();
    	$(".close_search").show();
    	$(".opacity").show();
    });
 
    $(".close_search").click(function(){
    	$(".search_popup").hide();
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
    
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});