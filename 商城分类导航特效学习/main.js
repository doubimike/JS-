window.onload = function(){
var liDom = document.getElementsByTagName('li');
for(i=0;i<liDom.length;i++){ //记住for循环怎么用。
	liDom[i].i = i; //此时的i才是i值。//给对象设定一个索引值。
	liDom[i].onmouseover = function(){
		this.className = "lihover"; //this换成liDom[i]会报错：Uncaught TypeError: Cannot set property 'className' of undefined；报错原因我猜测在于liDom[i]。具体我不知道是为啥。可能是闭包。
		var floatDivH = this.getElementsByClassName('pop')[0].offsetHeight; //获取popdiv的高度；
		var totalh = 30*i + 42 + 20 + 2; ////此时的i是最后的12这个值。闭包。
		if (floatDivH>totalh){
			if(this.i===0){return;}
			else{
			this.getElementsByClassName('pop')[0].style.top = -this.i*32 +'px';
			}
		}
	};
	liDom[i].onmouseout = function(){
		this.className = ""; //给元素设置原生的className方法
	};
}


};
