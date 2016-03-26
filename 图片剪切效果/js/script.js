// 1.实现拖拽效果先咯

window.onload = function() {
    var dragArea = document.getElementsByClassName('drag-area')[0],
        frontPic = document.getElementsByClassName('front-pic')[0],
        container = document.getElementById('container'),
        cw = container.offsetWidth,
        ch = container.offsetHeight,
        flag = 0,
        oldx, oldy, oldt, oldl;


    function move(e) {
        if (flag) {
            dw = dragArea.offsetWidth,
                dh = dragArea.offsetHeight;
                

            var newx = e.clientX,
                newy = e.clientY,
                moveY = newy - oldy,
                moveX = newx - oldx,
                newT = moveY + oldt,
                newL = moveX + oldl,
                maxL = cw - dw,
                maxT = ch - dh;
                console.log(moveX,moveY)

            if (newL < 0) {
                newL = 0;
            };
            if (newL > maxL) {
                newL = maxL;
            };

            if (newT < 0) { newT = 0 };
            if (newT > maxT) { newT = maxT };

            console.log(maxT,maxL,newT,newL);

            dragArea.style.top = newT + 'px';
            dragArea.style.left = newL + 'px';
            frontPic.style.clip = 'rect(' + newT + 'px,' + (newL + dw) + 'px,' + (newT + dh) + 'px,' + newL + 'px)';




        }
    }

    dragArea.addEventListener('mousemove', move);



    dragArea.addEventListener('mousedown', function(e) {
        flag = 1;
        oldx = e.clientX,
            oldy = e.clientY,
            oldt = dragArea.offsetTop,
            oldl = dragArea.offsetLeft,
            // 鼠标距离dragearea的左和高
                disx = oldx - oldl,
                disy = oldy - oldt;
                console.log(disx,disy)
    });

    document.body.addEventListener('mouseup', function() {
        flag = 0;
    });




    // dragArea.addEventListener('mouseout', function(e) {
    //     dragArea.removeEventListener('mousemove', movePos);
    // });
}
