window.onload = function(){
	window.onscroll = function(){
		var item1 = document.getElementById('item1');
		var item2 = document.getElementById('item2');
		var item3 = document.getElementById('item3');
		var item4 = document.getElementById('item4');
		var item5 = document.getElementById('item5');
		var menu = document.getElementsByClassName('fixed')[0].getElementsByTagName('li');
		var h1 = item1.offsetTop;
		var h2 = item2.offsetTop-200;
		var h3 = item3.offsetTop-200;
		var h4 = item4.offsetTop-200;
		var h5 = item5.offsetTop-200 ;
		console.log(document.documentElement);
		var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop; //有些网页 document.body.scrollTop 获取不到结果；
		function removeActive(){
			var active = document.getElementsByClassName('active')[0];
			active.className= "";
		}
		if(top<h2){
			removeActive();
			menu[0].className = "active";
		}
		else if(top>=h2&&top<h3){
			removeActive();
			menu[1].className = "active";
		}
		else if(top>=h3&&top<h4){
			removeActive();
			menu[2].className = "active";		
		}
		else if(top>=h4&&top<h5){
			removeActive();
			menu[3].className = "active";		
		}
		else if(top>=h5){
			removeActive();
			menu[4].className = "active";		
		}
	}
};