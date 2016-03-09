window.onload = function() {
	var list = document.getElementById("list");
	var lis = list.children;

	// 事件代理
	for (var i = lis.length - 1; i >= 0; i--) {
		lis[i].onclick = function (e) {
			 var event = e || window.event;
			 var target = event.target || event. srcElement;

			 var cls = target.className;

			 switch (cls) {
			 	case "close":
			 		this.parentNode.removeChild(this);
			 		break;
			 	default:
			 		// statements_def
			 		break;
			 }
		}
	}
}
