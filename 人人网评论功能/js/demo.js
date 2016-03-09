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

            var cls = target.className;

            switch (cls) {
                case "close":
                    removeNode(this);
                    break;
                default:
                    // statements_def
                    break;
            }
        }
    }
}
