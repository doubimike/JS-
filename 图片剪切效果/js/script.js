// 1.实现拖拽效果先咯

window.onload = function() {
    var dragArea = document.getElementsByClassName('drag-area')[0],
    frontPic = document.getElementsByClassName('front-pic')[0];

    dragArea.addEventListener('mousedown', function(e) {
        var x = e.clientX,
            y = e.clientY;
        dragArea.addEventListener('mousemove', function(e) {
            var newx = e.clientX,
                newy = e.clientY,
                moveY = newy - y,
                moveX = newx - x;
            dragArea.style.top = moveY +'px';
            dragArea.style.left = moveX +'px';   
            frontPic.style.clip = 'rect('+moveY+'px,'+(moveX+dragArea.offsetWidth)+'px,'+(moveY+dragArea.offsetHeight)+'px,'+moveX+'px)';


            console.log(frontPic.style.clip); 
        });
    });
}
