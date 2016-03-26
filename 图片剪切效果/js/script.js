// // 1.实现拖拽效果先咯

// window.onload = function() {
//     var dragArea = document.getElementsByClassName('drag-area')[0],
//         frontPic = document.getElementsByClassName('front-pic')[0],
//         container = document.getElementById('container'),
//         cw = container.offsetWidth,
//         ch = container.offsetHeight,
//         flag = 0,
//         oldx, oldy, oldt, oldl;
//         flag2 = 0;


//     function move(e) {
//         if (flag) {
//             dw = dragArea.offsetWidth,
//                 dh = dragArea.offsetHeight;


//             var newx = e.clientX,
//                 newy = e.clientY,
//                 moveY = newy - oldy,
//                 moveX = newx - oldx,
//                 newT = moveY + oldt,
//                 newL = moveX + oldl,
//                 maxL = cw - dw,
//                 maxT = ch - dh;
//                 console.log(moveX,moveY)

//             if (newL < 0) {
//                 newL = 0;
//             };
//             if (newL > maxL) {
//                 newL = maxL;
//             };

//             if (newT < 0) { newT = 0 };
//             if (newT > maxT) { newT = maxT };

//             console.log(maxT,maxL,newT,newL);

//             dragArea.style.top = newT + 'px';
//             dragArea.style.left = newL + 'px';
//             frontPic.style.clip = 'rect(' + newT + 'px,' + (newL + dw) + 'px,' + (newT + dh) + 'px,' + newL + 'px)';




//         }
//     }

//     dragArea.addEventListener('mousemove', move);



//     dragArea.addEventListener('mousedown', function(e) {
//         flag = 1;
//         oldx = e.clientX,
//             oldy = e.clientY,
//             oldt = dragArea.offsetTop,
//             oldl = dragArea.offsetLeft,
//             // 鼠标距离dragearea的左和高
//                 disx = oldx - oldl,
//                 disy = oldy - oldt;
//     });

//     document.body.addEventListener('mouseup', function() {
//         flag = 0;
//     });

//     var dragItems = document.getElementsByClassName('drag-item');

//    var i1 = document.getElementById('id1');
//    i1.addEventListener('mousedown',getPos);

//     function getPos (e) {

//     	flag2=1
//     	e.stopPropagation();
//     	 px1 = e.clientX;
//     	 py1 = e.clientY;
//     	 // console.log(px1,py1)
//     	 o=dragArea.offsetLeft;
//     	 oy = dragArea.offsetTop;
//     	 w = dragArea.offsetWidth;
//     	 h=dragArea.offsetHeight;

//     	 document.body.addEventListener('mousemove',move2);
//     }

//     function move2 (e) {
//     	 e.stopPropagation();
//     	 if (flag2=1) {
//     	     	 px2 = e.clientX;
//     	 py2 = e.clientY;
//     	 xc = px2-px1;
//     	 yc = py2-py1;
//     	 console.log(px2,py2);
//     	 dragArea.style.width = (w-xc)+'px';
//     	 dragArea.style.left = (o +xc)+'px';
//     	 dragArea.style.height = (h-yc)+'px';
//     	 dragArea.style.top = (o +yc)+'px';
//     	 frontPic.style.clip = 'rect(' + dragArea.offsetTop + 'px,' + ( dragArea.offsetLeft + dragArea.offsetWidth) + 'px,' + (dragArea.offsetTop + dragArea.offsetHeight) + 'px,' + dragArea.offsetLeft + 'px)';
//     }
//     }




//     i1.addEventListener('mouseup', function(e) {
//     	flag2=0;
//         document.body.removeEventListener('mousemove', move2);
//     });


// }

// 重来

//  先实现拖拽效果
// 原理分析：需要求出move的距离 = clientX - 原始的到屏幕左边的距离，所以先定义一个函数获得元素距离屏幕左边的距离
window.onload = function() {
    var main = document.getElementById('main');
    var leftTop = document.getElementById('left-top');
    var leftMiddle = document.getElementById('left-middle');
    var keyDown = 0;

    var id;
    window.addEventListener('mousedown', function(e) {
        target = e.target;
        if (/drag-item/.test(target.className)) {
            keyDown = 1;
        }
        id = target.id;
    });
    window.addEventListener('mouseup', function(e) {
        keyDown = 0;
    });

    function getPos(node) {
        var left = node.offsetLeft;
        var top = node.offsetTop;
        var parent = node.offsetParent;

        while (parent != null) {
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            left: left,
            top: top
        };
    }

    window.addEventListener('mousemove', function(e) {
        console.log(id)
        switch (id) {
            case 'left-top':
                leftDrag(e);
                upDrag(e);
                break;
            case 'left-middle':
                leftDrag(e);
                break;
            case 'left-bottom':
                leftDrag(e);
                downDrag(e);
                break;
            case 'middle-top':
                upDrag(e);
                break;
            case 'middle-bottom':
                downDrag(e);
                break;
            case 'right-top':
                rightDrag(e);
                upDrag(e);
                break;
            case 'right-middle':
                rightDrag(e);
                break;
            case 'right-bottom':
                rightDrag(e);
                downDrag(e);
                break;
        }
    });

    var oldWidth = main.offsetWidth - 2;
    var oldHeight = main.offsetHeight - 2;
    var beforeLeft = getPos(main).left;
    var beforeTop = getPos(main).top;
    var beforeOffsetLeft = main.offsetLeft;
    var beforeOffsetTop = main.offsetTop;

    function leftDrag(e) {
        if (keyDown) {
            var x = e.clientX;
            var newWidth = -x + beforeLeft + oldWidth;
            var newLeft = -(beforeLeft - x) + beforeOffsetLeft;
            main.style.width = newWidth + 'px';
            main.style.left = newLeft + 'px';
        }
    }

    function upDrag(e) {
        if (keyDown) {
            var y = e.clientY;
            var newHeight = -y + beforeTop + oldHeight;
            var newTop = -(beforeTop - y) + beforeOffsetTop;
            main.style.height = newHeight + 'px';
            main.style.top = newTop + 'px';
        }
    }

    function downDrag(e) {
        if (keyDown) {
            var y = e.clientY;
            var newHeight = y - beforeTop;
            main.style.height = newHeight + 'px';
        }
    }

    function rightDrag(e) {
        if (keyDown) {
            var x = e.clientX;
            var newWidth = x - beforeLeft;
            main.style.width = newWidth + 'px';
        }
    }



}
