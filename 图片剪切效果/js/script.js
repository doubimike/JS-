// 1.实现拖拽效果先咯

window.onload = function() {
    var dragArea = document.getElementsByClassName('drag-area')[0],
        frontPic = document.getElementsByClassName('front-pic')[0];
    var x, y, oldt, oldl;

    function getPos(e) {
        x = e.clientX,
            y = e.clientY,
            oldt = dragArea.offsetTop,
            oldl = dragArea.offsetLeft;

        dragArea.addEventListener('mousemove', movePos);
    }

    function movePos(e) {
        var newx = e.clientX,
            newy = e.clientY,
            moveY = newy - y + oldt,
            moveX = newx - x + oldl;
        dragArea.style.top = moveY + 'px';
        dragArea.style.left = moveX + 'px';
        frontPic.style.clip = 'rect(' + moveY + 'px,' + (moveX + dragArea.offsetWidth) + 'px,' + (moveY + dragArea.offsetHeight) + 'px,' + moveX + 'px)';
    }

    dragArea.addEventListener('mousedown', getPos);




    dragArea.addEventListener('mouseup', function(e) {
        dragArea.removeEventListener('mousemove', movePos);
    })
}
