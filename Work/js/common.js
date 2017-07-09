$(document).ready(function() {

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
      $(".owl-carousel").owlCarousel({
 
      navigation : true, // Show next and prev buttons
          navigationText : ["<",">"],
 
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
 
  });
});