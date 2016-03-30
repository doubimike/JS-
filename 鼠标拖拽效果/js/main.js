// 获取元素对象
function g(id){
	return document.getElementById(id);
}

// 自动全屏-遮罩
function fillToBody(el){
	el.style.width = document.documentElement.clientWidth +'px';
	el.style.height = document.documentElement.clientHeight +'px';
}

// 自动居中-登录浮层
function autoCenter(el){
	var bodyW = document.documentElement.clientWidth;
	var bodyH = document.documentElement.clientHeight;	

	var elW = el.offsetWidth;
	var elH = el.offsetHeight;

	el.style.left = (bodyW - elW)/2 + 'px';
	el.style.top = (bodyH - elH)/2 + 'px';
}

var mouseOffsetX = 0; // 偏移
var mouseOffsetY = 0; // 偏移

var isDraging = false; // 是否可拖拽的标记

// 鼠标事件1-在标题栏上按下（要计算鼠标相对拖拽元素的左上角的坐标，并且标记为可拖动）
g('dialog-title').addEventListener('mousedown', function(e){
	var e = e || window.event; // 为兼容ie获得event对象
	mouseOffsetX = e.pageX - g('dialog').offsetLeft; 
	mouseOffsetY = e.pageY - g('dialog').offsetTop; // 获得鼠标距离dialog的偏移 

	isDraging = true;
});

// 鼠标事件2-鼠标移动时（要检测，元素是否可标记为移动，如果是，则更新元素的位置，到当前鼠标的位置【PS：要减去第一步中获得的偏移】）
document.addEventListener('mousemove',function(e){
	var e = e || window.event;
	var mouseX = e.pageX;
	var mouseY = e.pageY;

	var moveX = 0 ;
	var moveY = 0 ;		

	if(isDraging === true){
		moveX = mouseX - mouseOffsetX;
		moveY = mouseY - mouseOffsetY;

		//限定范围 moveX>0并且moveX<(页面最大宽度-浮层的宽度)； 
		var pageWidth = document.documentElement.clientWidth;
		var pageHeight = document.documentElement.clientHeight;

		var dialogWidth = g('dialog').offsetWidth;
		var dialogHeight = g('dialog').offsetHeight;

		var maxX = pageWidth - dialogWidth;
		var maxY = pageHeight - dialogHeight;
		//moveY>0并且moveY<(页面最大高度-浮层的高度)； 
		
		moveX = Math.min(maxX,Math.max(0,moveX));
		moveY = Math.min(maxY,Math.max(0,moveY));

		g('dialog').style.left = moveX + 'px';
		g('dialog').style.top = moveY + 'px';
	}
});

// 鼠标事件3-鼠标松开的时候（标记元素为不可拖动元素）
document.addEventListener('mouseup',function(){
	isDraging = false;
});



// 展现登录浮层
function showDialog(){
	g('dialog').style.display='block';
	g('mask').style.display='block';
	autoCenter(g('dialog'));
	fillToBody(g('mask'));
}

// 隐藏登录浮层
function hideDialog(){
	g('dialog').style.display='none';
	g('mask').style.display='none';

}

// 窗口大小改变的事件处理
window.onresize = function(){
	autoCenter(g('dialog'));
	fillToBody(g('mask'));
};






