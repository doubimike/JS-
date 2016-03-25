;
(function($) {
    var Carousel = function(poster) {
    	var self = this;
        // 保存单个旋转木马对象
        this.poster = poster;
        this.posterItemMain = poster.find('ul.poster-list');
        this.nextBtn = poster.find('div.poster-next-btn');
        this.prevBtn = poster.find('div.poster-prev-btn');
        this.posterItems = poster.find('li.poster-item');

        if (this.posterItems.length%2 == 0) {
        	this.posterItemMain.append(this.posterItems.eq(0).clone());
        	this.posterItems = this.posterItemMain.children();
        }


        this.posterFirstItem = this.posterItems.first();
        this.posterLastItem = this.posterItems.last();
        this.rotateFlag = true;




        // 默认参数
        this.setting = {
            width: 1000, // 幻灯片的宽度
            height: 270, // 幻灯片的高度
            posterWidth: 640, // 幻灯片的第一zhen的宽度
            posterHeight: 270, // 幻灯片的第一zhen的高度
            verticalAlign: 'middle', // top bottom
            scale: 0.9, // 记录显示比例关系
            speed: 500,
            autoPlay:false,
            delay:5000,
        }

        $.extend(this.setting, this.getSetting());

        // 设置配置参数
        this.setSettingValue();
        this.setPosterPos();

        // 点击旋转

        this.nextBtn.click(function() {
        	if (self.rotateFlag) {
        		self.rotateFlag = false;
        		self.carouselRotate('left');
        	} 
        });

         this.prevBtn.click(function() {
        	
        	if (self.rotateFlag) {
        		self.rotateFlag = true;
        		self.carouselRotate('right');
        	}
        });

         // 是否开启自动播放
         if (this.setting.autoPlay) {
         	this.autoPlay();
         	this.poster.hover(function() {
         		clearInterval(self.timer)
         	}, function() {
         		self.autoPlay();
         	});
         }

    }


    Carousel.prototype = {
        getSetting: function() {
            var setting = this.poster.attr('data-setting');
            if (setting && setting != '') {
                return $.parseJSON(setting);
            }
            return {};
        },

        // 设置配置参数值去控制基本的高宽度
        setSettingValue: function() {
            this.poster.css({
                width: this.setting.width,
                height: this.setting.height
            });
            this.posterItemMain.css({
                width: this.setting.width,
                height: this.setting.height
            });

            // 计算上下切换按钮的宽度
            var w = (this.setting.width - this.setting.posterWidth) / 2;
            this.nextBtn.css({
                width: w,
                height: this.setting.height,
                zIndex: Math.ceil(this.posterItems.length / 2)
            });
            this.prevBtn.css({
                width: w,
                height: this.setting.height,
                zIndex: Math.ceil(this.posterItems.length / 2)
            });
            this.posterFirstItem.css({
                width: this.setting.posterWidth,
                height: this.setting.posterHeight,
                left: w,
                zIndex: Math.floor(this.posterItems.length / 2)
            });
        },

        // 设置剩余的帧的位置关系
        setPosterPos: function() {
            var self = this;
            var sliceIems = this.posterItems.slice(1),
                sliceSize = sliceIems.length / 2,
                rightSlice = sliceIems.slice(0, sliceSize),
                leftSlice = sliceIems.slice(sliceSize),
                level = Math.floor(this.posterItems.length / 2);



            // 设置右边帧的位置关系
            var rw = this.setting.posterWidth,
                rh = this.setting.posterHeight,
                gap = ((this.setting.width - this.setting.posterWidth) / 2) / level;

            var firstLeft = (this.setting.width - this.setting.posterWidth) / 2;
            var fixOffsetLeft = firstLeft + rw;

            rightSlice.each(function(index, el) {
                level--;
                rw = rw * self.setting.scale;
                rh = rh * self.setting.scale;

                var j = index;


                $(this).css({
                    zIndex: level,
                    width: rw,
                    height: rh,
                    opacity: 1 / (++j),
                    left: fixOffsetLeft + (++index) * gap - rw,
                    top: self.setVerticalAlign(rh)
                });


            });

            // 设置左边的位置关系
            var lw = rightSlice.last().width(),
                lh = rightSlice.last().height(),
                oloop = Math.floor(this.posterItems.length / 2);

            leftSlice.each(function(index, el) {

                $(this).css({
                    zIndex: index,
                    width: lw,
                    height: lh,
                    opacity: 1 / oloop,
                    left: index * gap,
                    top: self.setVerticalAlign(lh)
                });

                lw = lw / self.setting.scale;
                lh = lh / self.setting.scale;
                oloop--;


            });

        },

        // 设置垂直排列对齐
        setVerticalAlign: function(height) {
            var verticalType = this.setting.verticalAlign,
                top = 0;
            switch (verticalType) {
                case "middle":
                    top = (this.setting.height - height) / 2;
                    break;
                case "top":
                    top = 0;
                    break;
                case "bottom":
                    top = this.setting.height - height;
                    break;
                default:
                	top = (this.setting.height - height) / 2;
                	break;
            }
            return top;
        },

        carouselRotate:function (dir) {
        	var _this = this;
        	var zIndexArr = [];
        	  if (dir==='left') {
        	  	this.posterItems.each(function(index, el) {
        	  		var self = $(this),
        	  		prev = self.prev().get(0)?self.prev():_this.posterLastItem,
        	  		width = prev.width(),
        	  		height = prev.height(),
        	  		zIndex = prev.css('zIndex'),
        	  		opacity = prev.css('opacity'),
        	  		left = prev.css('left'),
        	  		top = prev.css('top');
        	  		zIndexArr.push(zIndex);

        	  		self.animate({width: width, height: height,opacity:opacity,left:left,top:top},_this.setting.speed,function () {
        	  			 _this.rotateFlag = true; 
        	  		});
        	  	});
        	  	this.posterItems.each(function(index, el) {
        	  		$(this).css('zIndex',zIndexArr[index]);
        	  	});
        	  } else {
        	  	this.posterItems.each(function(index, el) {
        	  		var self = $(this),
        	  		next = self.next().get(0)?self.next():_this.posterFirstItem,
        	  		width = next.width(),
        	  		height = next.height(),
        	  		zIndex = next.css('zIndex'),
        	  		opacity = next.css('opacity'),
        	  		left = next.css('left'),
        	  		top = next.css('top');
        	  		zIndexArr.push(zIndex);
        	  		self.animate({width: width, height: height,opacity:opacity,left:left,top:top},_this.setting.speed,function () {
        	  			 _this.rotateFlag = true; 
        	  		});
        	  	});
        	  	this.posterItems.each(function(index, el) {
        	  		$(this).css('zIndex',zIndexArr[index]);
        	  	});
        	  }
        },

        autoPlay:function  () {
        	var self = this;
        	 this.timer = setInterval(function () {
        	 	  self.nextBtn.click()
        	 }, self.setting.delay);
        }

    };

    Carousel.init = function(posters) {
        posters.each(function() {
            new Carousel($(this));
        });
    };



    window['Carousel'] = Carousel;
})(jQuery);
