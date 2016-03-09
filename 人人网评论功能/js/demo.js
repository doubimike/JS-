window.onload = function() {
    var list = document.getElementById("list");
    var lis = list.children;
    var timer;

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
    // 我的方式：
    // function comment(obj, el) {
    //     var txt = obj.children[0];
    //     var comment = txt.value;
    //     if (comment != "") {
    //         var html =
    //             '<div class="comment-box clearfix" user="self"><img class="myhead" src="images/my.jpg" alt=""><div class="comment-content"><p class="comment-text"><span class="user">我：</span>' + comment + '</p><p class="comment-time">2016-03-9 18:34<a href="javascript:;" class="comment-praise" total="0" my="0">赞</a><a href="javascript:;" class="comment-operate">删除</a></p></div></div>'
    //         obj.parentNode.getElementsByClassName("comment-list")[0].innerHTML += html;
    //     }
    //     obj.className = "text-box";
    //     txt.value = "";
    //     txt.placeholder = "评论...";
    //     obj.children[2].innerHTML = "0/140";
    // }

    function replayBox(box) {
        var textarea = box.getElementsByTagName("textarea")[0];
        var list = box.getElementsByClassName("comment-list")[0];
        var li = document.createElement("div");
        li.className = "comment-box clearfix";
        li.setAttribute("user", "self");
        var html = '<img class="myhead" src="images/my.jpg" alt=""><div class="comment-content"><p class="comment-text"><span class="user">我：</span>' + textarea.value + '</p><p class="comment-time">' + getTime() + '<a href="javascript:;" class="comment-praise" total="0" my="0">赞</a><a href="javascript:;" class="comment-operate">删除</a></p></div>'
        li.innerHTML = html;
        list.appendChild(li);
        textarea.value = "";
        textarea.onblur();
    }

    function getTime() {
        var t = new Date();
        var y = t.getFullYear();
        var m = t.getMonth() + 1;
        var d = t.getDate();
        var h = t.getHours();
        var mi = t.getMinutes();
        m = m < 10 ? "0" + m : m;
        d = d < 10 ? "0" + d : d;
        h = h < 10 ? "0" + h : h;
        mi = mi < 10 ? "0" + mi : mi;
        return y + "-" + m + "-" + d + " " + h + ":" + mi;
    }

    // 赞回复
    function commentPraise(el) {
        var my = el.getAttribute("my");
        var oldtotal = parseInt(el.getAttribute("total"));
        var newtotal;
        if (my == 0) {
            newtotal = oldtotal + 1;
            el.setAttribute("total", newtotal)
            el.innerHTML = newtotal + ' 取消赞';
            el.setAttribute("my", 1);

        } else {
            newtotal = oldtotal - 1;
            el.setAttribute("total", newtotal)
            el.innerHTML = (newtotal == 0) ? "赞" : newtotal + ' 赞';
            el.setAttribute("my", 0)

            el.style.display = (newtotal == 0) ? "" : "inline-block";
        }
    }

    function commentOperate (box,el) {
          var txt = el.innerHTML;
          if (txt=="删除") {
            box.getElementsByClassName("comment-list")[0].removeChild(el.parentNode.parentNode.parentNode);
          }
          if (txt=="回复") {
            var user = el.parentNode.parentNode.getElementsByClassName("user")[0].innerHTML;
            box.getElementsByTagName("textarea")[0].value = "回复" + user;
            box.getElementsByTagName("textarea")[0].onfocus();
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

                    // 点击灰色按钮的时候，textarea不能消失，这个思路很有意思哦。通过定时器来实现。
                case "btn btn-off":
                    clearTimeout(timer);
                    break;

                    //点击蓝色按钮
                case "btn":
                    replayBox(this.parentNode.parentNode.parentNode);
                    break;

                case "comment-praise":
                    commentPraise(target);
                    break;

                case "comment-operate":
                commentOperate(this,target);
                    break;
                        
                default:
                    // statements_def
                    break;
            }
        }

        // 输入框
        var textarea = lis[i].getElementsByTagName("textarea")[0];
        textarea.onfocus = function() {
            this.parentNode.className = "text-box text-box-on";
            this.value = (this.value == "评论…") ? '' : this.value;
            this.onkeyup();
        }

        textarea.onkeyup = function() {
            var len = this.value.length;
            var p = this.parentNode;
            var btn = p.children[1];
            var word = p.children[2];
            if (len == 0 || len > 140) {
                btn.className = "btn btn-off";
            } else {
                btn.className = "btn";
            }
            word.innerHTML = len + "/140";
        }

        textarea.onblur = function() {
            var me = this;
            if (this.value == "") {
                timer = setTimeout(function() {
                    me.parentNode.className = "text-box";
                    me.value = "评论…";
                }, 400)

            }



        }
    }

    // 输入框 我的实现方式
    // var comments = document.getElementsByClassName("comment");
    // for (var i = comments.length - 1; i >= 0; i--) {
    //     comments[i].onfocus = function() {
    //         this.parentNode.className = "text-box text-box-on";
    //         this.innerHTML = "";
    //         this.placeholder = "";
    //         this.parentNode.children[1].className = "btn btn-off";
    //     }

    //     comments[i].onkeyup = function() {
    //         this.parentNode.children[1].className = "btn";
    //         input = this.value;
    //         this.parentNode.children[2].innerHTML = input.length + "/140";
    //     }

    //     comments[i].onblur = function() {
    //         this.parentNode.className = (this.value == "") ? "text-box" : "text-box text-box-on";
    //         if (this.value == "") this.placeholder = "评论...";
    //     }

    // }
}
