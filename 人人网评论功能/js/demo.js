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

    //评论分享功能
    function comment(obj, el) {
        var txt = obj.children[0];
        var comment = txt.value;
        if (comment != "") {
            var html =
                '<div class="comment-box clearfix" user="self"><img class="myhead" src="images/my.jpg" alt=""><div class="comment-content"><p class="comment-text"><span class="user">我：</span>' + comment + '</p><p class="comment-time">2016-03-9 18:34<a href="javascript:;" class="comment-praise" total="0" my="0">赞</a><a href="javascript:;" class="comment-operate">删除</a></p></div></div>'
            obj.parentNode.getElementsByClassName("comment-list")[0].innerHTML += html;
        }
        obj.className = "text-box";
        txt.value = "";
        txt.placeholder = "评论...";
        obj.children[2].innerHTML = "0/140";
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

                case "btn":
                    comment(target.parentNode, target);
                    break;
                default:
                    // statements_def
                    break;
            }
        }
    }

    var comments = document.getElementsByClassName("comment");
    for (var i = comments.length - 1; i >= 0; i--) {
        comments[i].onfocus = function() {
            this.parentNode.className = "text-box text-box-on";
            this.innerHTML = "";
            this.placeholder = "";
            this.parentNode.children[1].className = "btn btn-off";
        }

        comments[i].onkeyup = function() {
            this.parentNode.children[1].className = "btn";
            input = this.value;
            this.parentNode.children[2].innerHTML = input.length + "/140";
        }

        comments[i].onblur = function() {
            this.parentNode.className = (this.value == "") ? "text-box" : "text-box text-box-on";
            if (this.value == "") this.placeholder = "评论...";
        }

    }
}
