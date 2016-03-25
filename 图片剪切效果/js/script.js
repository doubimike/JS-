// 1.实现拖拽效果先咯

window.onload = function() {
    var dragArea = document.getElementsByClassName('drag-area')[0],
        frontPic = document.getElementsByClassName('front-pic')[0],
        container = document.getElementById('container'),
        cw = container.offsetWidth,
        ch = container.offsetHeight;

    function move(e) {
        var oldx = e.clientX,
            oldy = e.clientY,
            oldt = dragArea.offsetTop,
            oldl = dragArea.offsetLeft,
            dw = dragArea.offsetWidth,
            dh = dragArea.offsetHeight,
            // 鼠标距离dragearea的左和高
            disx = oldx - oldl,
            disy = oldy - oldt;

        function movePos(e1) {
            var newx = e1.clientX,
                newy = e1.clientY,
                moveY = newy - oldy,
                moveX = newx - oldx,
                newT = moveY + oldt,
                newL = moveX + oldl,
            maxL = cw - dw - oldl,
            maxT = ch - dh - oldt;

            if (newL < 0) {
                newL = 0;
            }
            if (newL > maxL) {
                newL = maxL;
            }

            if (newT < 0) { newT = 0 }
            if (newT > maxT) { newT = maxT }
            dragArea.style.top = newT + 'px';
            dragArea.style.left = newL + 'px';
            frontPic.style.clip = 'rect(' + newT + 'px,' + (newL + dw) + 'px,' + (newT + dh) + 'px,' + newL + 'px)';
        }

        dragArea.addEventListener('mousemove', movePos);

        dragArea.addEventListener('mouseup', function() {
            dragArea.removeEventListener('mousemove', movePos);
        });
    }





    dragArea.addEventListener('mousedown', move);



    // dragArea.addEventListener('mouseout', function(e) {
    //     dragArea.removeEventListener('mousemove', movePos);
    // });
}
