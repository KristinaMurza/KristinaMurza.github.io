$(function () {
	// jcarousel
    $('jcarousel').jcarousel({
    });
    
    // checkbox
    function customCheckbox(checkboxName) {
        var checkBox = $('input[name="' + checkboxName + '"]');
        $(checkBox).each(function () {
            $(this).wrap("<span class='custom-checkbox'></span>");
            if ($(this).is(':checked')) {
                $(this).parent().addClass("selected");
            }
            if ($(this).is(':disabled')) {
                $(this).parent().addClass("disabled");
            }
        });
        $(checkBox).click(function () {
            $(this).parent().toggleClass("selected");
        });
    }
    $(document).ready(function () {
        customCheckbox("jQ");
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for MASONRY but it's not going to work in IE8, no soution found to work with requirejs                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function (Masonry) {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
     // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 10,
        percentPosition: true
    });

    // Add filter to all grid-item elements

    var items = document.getElementsByClassName("grid-item");
    //console.log(items);
    for (var i = 0; i < items.length; i++){
        items[i].innerHTML = '<div><a></a></div>';
    }

    function sendRequest(key){
        var request;
        var url = "https://pixabay.com/api/?key=3531240-ec0d55581e7ceac4acc8e28c0&image_type=photo&pretty=true&per_page=7&orientation=horizontal&q=" + key;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else {
            // code for older browsers
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.onreadystatechange = function(data) {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);
                updatePhotos(data);
            }
        };
        request.open("GET", url, true);
        request.send();
    }


    function updatePhotos(data){
        var items = document.getElementsByClassName("grid-item");

        for(var i = 0; i < data.hits.length; i++){
            // add photos to masonry layout
            items[i].style.background = "url('"+ data.hits[i].webformatURL +"') no-repeat center center"; 
            items[i].style.backgroundSize = "cover";

            // here we also must add text
            items[i].childNodes[0].childNodes[0].innerHTML = data.hits[i].tags;
            // after text added top property must be calculated and set
            items[i].childNodes[0].childNodes[0].style.top = (items[i].offsetHeight - items[i].childNodes[0].childNodes[0].offsetHeight) / 3 + "px";
        }

    }
    
    // when we load the page we upload random pics out 10 queries
    var randomKey = ["Sport and Activity", "Wellnes and Health", "Extreme Sports and Expeditions", "Games", "Culture and Education", "Relaxation", "Travelling"];
    var index = Math.floor(Math.random() * 10);
    sendRequest(randomKey[index]);

    window.addEventListener("resize", function(){
        // updating text position on window size changed;
        var items = document.getElementsByClassName("grid-item");
        for(var i = 0; i < items.length; i++){
            items[i].childNodes[0].childNodes[0].style.top = (items[i].offsetHeight - items[i].childNodes[0].childNodes[0].offsetHeight) / 2 + "px";
        }
    });      
});