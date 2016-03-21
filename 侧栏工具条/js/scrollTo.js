define(['jquery'], function($) {
    function ScrollTo(opts) {
        var opts = $.extend({}, ScrollTo.DEFAULTS, opts);
        this.dest = opts.dest;
        this.speed = opts.speed;
        this.$el = $('html, body');
    }

    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800
    }

    ScrollTo.prototype.move = function() {
        var dest = this.dest,
            speed = this.speed;
        // 判断到没到达目的地
        if ($(window).scrollTop() != dest) {
            // 判断是否在运动
            if (!this.$el.is(':animated')) {
                this.$el.animate({
                    scrollTop: dest
                }, speed);
            }
        }
    }

    ScrollTo.prototype.go = function() {
        var dest = this.dest;
        if ($(window).scrollTop() != dest) {
            this.$el.scrollTop(dest);
        }
    }

    return {
        ScrollTo: ScrollTo
    }
})
