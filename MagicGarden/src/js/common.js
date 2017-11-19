$(document).ready(function () {
    function test(sum) {
        $(".name-seminars p").text($(".box_sentence_seminars").val()); //откуда

        var sentence = $(".box_sentence__text").prop("checked");
        if (sentence) {
            $(".name-seminars p").text($(".box_sentence_seminars").val());
            $(".box_sentence_seminars").show();
        }

    }


    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
