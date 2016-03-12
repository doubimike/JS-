window.onload = function () {
	 var windowWidth = document.body.clientWidth;
	 
	 var picWidth = 165;

	 var columnCount =Math.floor(windowWidth / picWidth) ;

	 console.log(columnCount); 
}