$(document).ready(function () {
    $('#grid').masonry({
        // options
        itemSelector: '.item',
        columnWidth: '.item'
    });
});

//$(function () {
//	// jcarousel
//    $('.jcarousel').jcarousel({
//    });
//});

//$(function() {
//    $('.jcarousel').jcarousel({
//        wrap: 'circular',
//        transitions: {
//          transforms: true
//        }
//    });
//    $('.jcarousel-prev').jcarouselControl({
//        target: '-=1'
//    });
//
//    $('.jcarousel-next').jcarouselControl({
//        target: '+=1'
//    });
//
//    $('.jcarousel').jcarouselAutoscroll({
//      interval: 5000,
//      target: '+=1',
//      autostart: true
//    }); 
//
//     $('.jcarousel-pagination')
//       .on('jcarouselpagination:active', 'a', function() {
//           $(this).addClass('isActive');
//       })
//       .on('jcarouselpagination:inactive', 'a', function() {
//           $(this).removeClass('isActive');
//       })
//       .on('click', function(e) {
//           e.preventDefault();
//       })
//       .jcarouselPagination({
//           item: function(page) {
//               return '<a href="#' + page + '"></a>';
//           }
//       });
//});
var text_slide_cur=0;
function showtext_slide(){
    $('#text_slide'+(text_slide_cur+1)).css({opacity: 0}).animate({opacity: 1.0,left: "50px"}, 1000);
    setTimeout(hidetext_slide, 3000);
}
function hidetext_slide(){
    $('#text_slide'+(text_slide_cur+1)).css({opacity: 1}).animate({opacity: 0,left: "-50px"}, 1000,function(){showtext_slide();});
    text_slide_cur=(text_slide_cur+1)%5;
}
$(document).ready(function() {
    showtext_slide();
})