;(function ($) {
	 var LightBox = function () {
	 	
	 	var self = this;
	 	 // js输出html结构
	 	 this.popupMask= $('<div id="G-lightbox-mask">');
	 	 this.popupWin = $('<div id="G-lightbox-popup">'); 

	 	 this.bodyNode = $('body'); 

	 	 // 渲染剩余的dom，并且插入到body
	 	 this.renderDom();

	 	 this.picViewArea = this.popupWin.find('lightbox-pic-view');//图片预览区域

	 	 this.popupPic = this.popupWin.find('img.lightbox-imgage');//图片
	 	 this.picCaptionArea = this.popupWin.find('div.lightbox-pic-caption') //图片描述区域

	 	 // 准备开发委托事件，获取组数据
	 	 this.groupName = null;
	 	 this.groudData  = [];
	 	 this.bodyNode.delegate('.js-lightbox', 'click', function(e) {
	 	 	// 阻止事件冒泡
	 	 	e.stopPropagation();
	 	 	var currentGroupName = $(this).attr('data-group');
	 	 	if (currentGroupName!=self.groupName) {
	 	 		self.groupName = currentGroupName;
	 	 		//  根据当前组名获取同一组数据
	 	 		self.getGroup();
	 	 	}
	 	 });
	 };

	 LightBox.prototype = {
	 	getGroup:function () {
	 		var self = this;

	 		 	  // 根据当前组别名称获取页面中所有相同组别的对象
	 		 	  var groupList = this.bodyNode.find('*[data-group='+this.groupName+']');

	 		 	  //  清空数组数据
	 		 	  self.groudData.length = 0;	

	 		 	  groupList.each(function(index, el) {
	 		 	  	self.groudData.push({
	 		 	  		src:$(this).attr( 'data-source'),
	 		 	  		id:$(this).attr( 'data-id'),
	 		 	  		caption:$(this).attr( 'data-caption'),
	 		 	  	})
	 		 	  });


	 		 	  console.log(self.groudData);
	 	},
	 	renderDom:function () {
	 		var strDom = '<div class="lightbox-pic-view">'+
            '<span class="lightbox-btn lightbox-prev-btn"><</span>'+
            '<img src="" alt="" class="lightbox-image">'+
            '<span class="lightbox-btn lightbox-next-btn">></span>'+
        '</div>'+
        '<div class="lightbox-pic-caption">'+
            '<div class="lightbox-caption-area">'+
                '<p class="lightbox-pic-desc"></p>'+
                '<span class="lightbox-of-index">当前索引：0 of 0</span>'+
            '</div>'+
            '<span class="lightbox-close-btn"></span>'+
        '</div>';
        // 插入
        this.popupWin.html(strDom);
        this.bodyNode.append(this.popupMask,this.popupWin);
	 	},
	 };

	 window.LightBox = LightBox;
})(jQuery);