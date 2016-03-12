requirejs.config({
    paths: {
        jquery: "jquery.min",
    }
});

requirejs(['jquery'], function($) {
    $("backTop").on('click', go);
    $(window).on('scroll', function() {
        checkPosition($(window).height());
    });
    checkPosition($(window).height());

    function move() {
        $('html,body').animate({ scrollTop: 0 }, 800);
    }

    function go () {
    	 // body... 
    	 $('html,body').scrollTop(0) 
    }

    function checkPosition(pos) {
        if ($(window).scrollTop() > pos) {
            // statement
            $('#backTop').fadeIn();
        } else {
            $("#backTop").fadeOut();
        }

    }
});
