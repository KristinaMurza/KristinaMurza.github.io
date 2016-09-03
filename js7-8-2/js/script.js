$(document).ready(function () {
    var inputTitle = $('input');
    var tooltip;
    $(inputTitle).hover(function () {
        tooltip = $(this).attr('title');
        $(this).removeAttr('title');
        $('<span class=' + 'tooltip' + '>' + tooltip + '</span>').insertAfter(this);
    },
        function () {
            $('.tooltip').remove();
            $(this).attr('title', tooltip);
        });
    $('.show_help').on('click', function () {
        $('.tooltip').remove();
        $(inputTitle).each(function () {
            tooltip = $(this).attr('title');
            $('<span class=' + 'tooltip' + '>' + tooltip + '</span>').insertAfter(this);
        });
    });
});