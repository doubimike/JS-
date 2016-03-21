requirejs.config({
    paths: {
        jquery: "jquery.min",
    }
});

requirejs(['jquery', 'scrollTo'], function($, scrollTo) {
    var scroll = new scrollTo.ScrollTo({
        dest: 0,
        speed: 800
    });
    $('#backTop').on('click', function() {
        scroll.move()
    });


    $(window).on('scroll', function() {
        checkPosition($(window).height());
    });

    checkPosition($(window).height());

    function checkPosition(pos) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop < pos) {
            $('#backTop').fadeOut();
        } else {
            $('#backTop').fadeIn();
        }
    }

});
