window.onload = function() {
    var list = document.getElementById("list");
    var lis = list.children;

    // 删除节点
    function removeNode(node) {
        node.parentNode.removeChild(node);
    }

    // 事件代理
    for (var i = lis.length - 1; i >= 0; i--) {
        lis[i].onclick = function(e) {
            var event = e || window.event;
            var target = event.target || event.srcElement;
            var praisesTotal = this.getElementsByClassName("praises-total")[0];
            var praisesTotalValue = parseInt(praisesTotal.getAttribute("total"));

            var cls = target.className;

            switch (cls) {
                // 删除分享功能
                case "close":
                    removeNode(this);
                    break;

                    // 点赞功能
                case "praise":
                    if (praisesTotalValue == 0) {
                        praisesTotal.style.display = "block";
                        praisesTotal.setAttribute("total", 1);
                        praisesTotal.innerHTML = "我觉得很赞";
                    } else {
                        praisesTotal.setAttribute("total", praisesTotalValue+1);
                        praisesTotal.innerHTML = "我和4个人觉得很赞";
                    }
                    break;
                default:
                    // statements_def
                    break;
            }
        }
    }
}
