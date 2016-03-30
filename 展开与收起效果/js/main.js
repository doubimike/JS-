function showdiv(){
	document.getElementById('hidden').style.display='block';
	document.getElementById('more').href="javascript:hidediv()";
	document.getElementById('more').innerHTML='收起-';
}
function hidediv(){
	document.getElementById('hidden').style.display='none';
	document.getElementById('more').href="javascript:showdiv()";
	document.getElementById('more').innerHTML='更多选项+';
}
var h = 0;
function addH(){
	if(h<300){
		h+=5;
		document.getElementById("banner").style.height=h+'px';
	}
	else{
		return;
	}
	setTimeout(addH, 30);
}
window.onload=function showAds(){
	addH();
	setTimeout(removeH, 5000);
};
function removeH(){
	h-=5;
	document.getElementById("banner").style.height=h+'px';
	if(h<0){
		document.getElementById("banner").style.display="none";
		return;
	}
	setTimeout(removeH, 30);
}
function qqshowdiv(obj){
	var x=obj.parentNode;//摘要
	x.style.display="none";
	var y=x.nextSibling;//正文
	console.log(y);
	y.style.display="block";
}
function qqhidediv(obj){
	var x=obj.parentNode;
	var y=x.parentNode;
	y.style.display="none";
	var z=y.previousSibling;
	z.style.display="block";	
}
