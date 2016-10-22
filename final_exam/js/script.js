$(document).ready(function () {
    $('#grid').masonry({
        // options
        itemSelector: '.item',
        columnWidth: '.item'
    });
});





jQuery(document).ready(function(){
	
//// ---> Проверка на существование элемента на странице
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

//// ---> Слайдер
$(function(){
  if($('.slider').exists()) {

    $('.slider').each(function(){

      var slider = $(this);

      var sliderContainer = slider.find('.slider-container'),
          nextSlide = slider.find('.next-slide'),
          prevSlide = slider.find('.prev-slide'),
          slideWidth = slider.find('.slide-item').outerWidth(),
          scrollSlider = slideWrap.position().left - slideWidth;

      /* Клик на следующий слайд */
      nextSlide.click(function(){
        if(!sliderContainer.is(':animated')) {
          sliderContainer.animate({left: scrollSlider}, 500, function(){
            sliderContainer
              .find('.slide-item:first')
              .appendTo(sliderContainer)
              .parent()
              .css({'left': 0});
            });
          }
       });

      /* Клик на предыдующий слайд */
      prevSlide.click(function(){
      if(!sliderContainer.is(':animated')) {
        sliderContainer
          .css({'left': scrollSlider})
          .find('.slide-item:last')
          .prependTo(sliderContainer)
          .parent()
          .animate({left: 0}, 500);
        }
      });

    });

  }

});

});