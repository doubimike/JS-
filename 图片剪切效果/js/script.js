//  先实现拖拽效果
// 原理分析：需要求出move的距离 = clientX - 原始的到屏幕左边的距离，所以先定义一个函数获得元素距离屏幕左边的距离
document.onselectstart=new Function('event.returnValue=false;');
window.onload = function() {
    var main = document.getElementById('main');
    var keyDown = 0;
    var lf = document.getElementById('left-top');
    var mt = document.getElementById('middle-top');
    var rt = document.getElementById('right-top');
    var lm = document.getElementById('left-middle');
    var rm = document.getElementById('right-middle');
    var lb = document.getElementById('left-bottom');
    var mb = document.getElementById('middle-bottom');
    var rb = document.getElementById('right-bottom');
    var flag = 0;
    var container = document.getElementById('container');
    var cw = container.offsetWidth;
    var ch = container.offsetHeight;
    var cot = getPos(container).top;
    var col = getPos(container).left;
    var id;
    window.addEventListener('mousedown', function(e) {
        oldWidth = main.offsetWidth - 2;
        oldHeight = main.offsetHeight - 2;
        beforeLeft = getPos(main).left;
        beforeTop = getPos(main).top;
        beforeOffsetLeft = main.offsetLeft;
        beforeOffsetTop = main.offsetTop;
        oldx = e.clientX;
        oldy = e.clientY;
        disx = oldx - getPos(main).left;
        disy = oldy - getPos(main).top;
        mainP = getPos(main.offsetParent);


        target = e.target;
        if (/drag-item/.test(target.className)) {
            keyDown = 1;
        }
        id = target.id;

        if (id == 'main') {
            flag = 1;
        }
    });
    window.addEventListener('mouseup', function(e) {
        keyDown = 0;
        flag = 0;
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
        };
        setPreview();
        changeDrag();
        changFrontPic();
        
        if (flag == 1) { totalDrag(e); }
    });

    function leftDrag(e) {
        if (keyDown) {
            var x = e.clientX;
            var z = beforeLeft - x;
            if (z < -oldWidth) { z = -oldWidth };
            if (z > beforeOffsetLeft) { z = beforeOffsetLeft };
            var newWidth = z + oldWidth;
            var newLeft = -z + beforeOffsetLeft;

            main.style.width = newWidth + 'px';
            main.style.left = newLeft + 'px';
        }
    }

    function upDrag(e) {
        if (keyDown) {
            var y = e.clientY;
            var z = beforeTop - y;
            if (z > beforeOffsetTop) { z = beforeOffsetTop };
            if (z < -oldHeight) { z = -oldHeight };
            var newHeight = z + oldHeight;

            var newTop = -(z) + beforeOffsetTop;

            main.style.height = newHeight + 'px';
            main.style.top = newTop + 'px';
        }
    }

    function downDrag(e) {
        if (keyDown) {
            var y = e.clientY;
            var newHeight = y - beforeTop;
            if (newHeight > cot + ch - beforeTop)(newHeight = cot + ch - beforeTop);
            main.style.height = newHeight + 'px';
        }
    }

    function rightDrag(e) {
        if (keyDown) {
            var x = e.clientX;
            var newWidth = x - beforeLeft;
            if (newWidth > col + cw - beforeLeft) { newWidth = col + cw - beforeLeft };
            main.style.width = newWidth + 'px';
        }
    }

    function changeDrag() {
        var w = main.offsetWidth;
        var h = main.offsetHeight;
        lm.style.top = (h / 2 - 5) + 'px';
        lb.style.top = (h - 5) + 'px';
        rm.style.top = (h / 2 - 5) + 'px';
        mb.style.top = (h - 5) + 'px';
        rb.style.top = (h - 5) + 'px';
        mt.style.left = (w / 2 - 5) + 'px';
        mb.style.left = (w / 2 - 5) + 'px';
        rt.style.left = (w - 5) + 'px';
        rm.style.left = (w - 5) + 'px';
        rb.style.left = (w - 5) + 'px';
    }

    var frontPic = document.getElementsByClassName('front-pic')[0];

    function changFrontPic() {
        frontPic.style.clip = 'rect(' + main.offsetTop + 'px,' + (main.offsetLeft + main.offsetWidth) + 'px,' + (main.offsetTop + main.offsetHeight) + 'px,' + main.offsetLeft + 'px)';
    }

    function totalDrag(e) {
        var newx = e.clientX;
        var newy = e.clientY;
        var newt = newy - mainP.top - disy;
        var newl = newx - mainP.left - disx;
        var maxy = ch - main.offsetHeight - 1;
        var maxx = cw - main.offsetWidth - 1;

        if (newt < 0) { newt = 0 };
        if (newt > maxy) { newt = maxy };
        if (newl < 0) { newl = 0 };
        if (newl > maxx) { newl = maxx };

        main.style.left = newl + 'px';
        main.style.top = newt + 'px';
        setPreview();
    }

    // preview
    var preview = document.getElementById('preview');
    function setPreview () {
    	 preview.style.width = main.offsetWidth +'px';
    	 preview.style.height = main.offsetHeight +'px';
    	 preview.style.backgroundPosition = -main.offsetLeft +'px ' + -main.offsetTop+'px';
    }
}
