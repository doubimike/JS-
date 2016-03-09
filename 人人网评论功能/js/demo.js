window.onload = function() {
    var list = document.getElementById("list");
    var lis = list.children;

    // 删除节点
    function removeNode(node) {
        node.parentNode.removeChild(node);
    }

    // 赞分享函数 为什么这样设计参数呢？
    function praiseBox(box, el) {
        var praisesTotal = box.getElementsByClassName("praises-total")[0];
        var praisesTotalValue = parseInt(praisesTotal.getAttribute("total"));

        if (el.innerHTML == "赞") {
            if (praisesTotalValue == 0) {
                praisesTotal.style.display = "block";
                praisesTotal.setAttribute("total", 1);
                praisesTotal.innerHTML = "我觉得很赞";
            } else {
                praisesTotal.setAttribute("total", praisesTotalValue + 1);
                praisesTotal.innerHTML = "我和4个人觉得很赞";
            }
            el.innerHTML = "取消赞";
        } else {
            if (praisesTotalValue > 1) {
                praisesTotal.setAttribute("total", praisesTotalValue - 1);
                praisesTotal.innerHTML = "4个人觉得很赞";
            } else {
                praisesTotal.setAttribute("total", 0);
                praisesTotal.style.display = "none";
                praisesTotal.innerHTML = "";
            }
            el.innerHTML = "赞";
        }
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
