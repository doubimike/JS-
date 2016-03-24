;(function ($) {
	  var Carousel = function (poster) {
	  	this.name=1;
	  };

	  Carousel.prototype.m = function(){
	  	 console.log(this.name) 
	  };

	  Carousel.init = function (posters) {
	  	 posters.each(function(index, el) {
	  		this.instance = new Carousel($(this));	
	  	 });
	  };



	  window['Carousel'] = Carousel;
})(jQuery);