define(['jquery', 'scrollTo'], function($, scrollTo) {

    var scroll = new scrollTo.ScrollTo({ dest: 0, speed: 800 });
    Backtop.prototype.checkPosition = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop < this.opts.pos) {
            $('#backTop').fadeOut();
        } else {
            $('#backTop').fadeIn();
        }
    };

    function Backtop(el, opts) {
        this.opts = $.extend({}, Backtop.DEFAULTS, opts);
        this.$el = el;

        if (this.opts.mode == 'move') {
            this.$el.on('click', function() {
                scroll.move();
            });
        } else {
        	this.$el.on('click', function() {
                scroll.go();
            });
        }

        var a = this;
        $(window).on('scroll', function() {
            a.checkPosition($(window).height());
        });
        a.checkPosition($(window).height());
    }

    Backtop.DEFAULTS = {
        mode: 'move',
        pos: $(window).height()
    }
    return Backtop;
})
