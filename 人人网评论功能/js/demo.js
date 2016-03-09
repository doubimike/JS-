window.onload = function() {
    var list = document.getElementById("list");
    var lis = list.children;

    // 删除节点
    function removeNode(node) {
        node.parentNode.removeChild(node);
    }

    // 赞分享函数 为什么这样设计参数呢？
    function praiseBox(box, el) {
        var praisesEl = box.getElementsByClassName("praises-total")[0];
        var oldTotal = parseInt(praisesEl.getAttribute("total"));
        var txt = el.innerHTML;
        var newTotal;

        if (txt == "赞") {
            newTotal = oldTotal + 1;
            praisesEl.innerHTML = (newTotal == 1) ? "我觉得很赞" : "我和" + oldTotal + "个人觉得很赞";
            el.innerHTML = "取消赞";

        } else {
            newTotal = oldTotal - 1;
            praisesEl.innerHTML = (newTotal == 0) ? "" : newTotal + "个人觉得很赞";
            el.innerHTML = "赞";
        }

        praisesEl.setAttribute("total", newTotal);
        praisesEl.style.display = (newTotal == 0) ? "none" : "block";
    }

    // 事件代理
    for (var i = lis.length - 1; i >= 0; i--) {
        lis[i].onclick = function(e) {
            var event = e || window.event;
            var target = event.target || event.srcElement;


            var cls = target.className;

            switch (cls) {
                // 删除分享功能
                case "close":
                    removeNode(this);
                    break;

                    // 点赞功能
                case "praise":
                    praiseBox(this, target);
                    break;
                default:
                    // statements_def
                    break;
            }
        }
    }
}
