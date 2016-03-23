define(['jquery', 'scrollTo'], function($, scrollTo) {
    Backtop.prototype._checkPosition = function() {
        var $el = this.$el;
        if ($(window).scrollTop() < this.opts.pos) {
            $el.fadeOut();
        } else {
            $el.fadeIn();
        }
    };

    Backtop.prototype._move = function() {
        this.scroll.move();
    }
    Backtop.prototype._go = function() {
        this.scroll.go();
    }

    function Backtop(el, opts) {
        this.opts = $.extend({}, Backtop.DEFAULTS, opts);
        this.$el = el;
        this.scroll = new scrollTo.ScrollTo({
            dest: this.opts.dest,
            speed: this.opts.speed
        });

        if (this.opts.mode == 'move') {
            this.$el.on('click', $.proxy(this._move, this));
        } else {
            this.$el.on('click', $.proxy(this._go, this));
        }

        $(window).on('scroll', $.proxy(this._checkPosition, this));
        this._checkPosition($(window).height());
    }

    Backtop.DEFAULTS = {
        mode: 'move',
        pos: $(window).height(),
        speed: 800,
        dest: 0
    }

    // $.fn.extend({
    //     backtop: function(opts) {
    //         return this.each(function() {
    //             new BackTop(this, opts);
    //         });
    //     }
    // });
    return Backtop;
});
