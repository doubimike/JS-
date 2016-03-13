var getMin = function(array) {
    var min = array[0];
    var minindex = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] - min < 0) {
            min = array[i];
            minindex = i;
        }
    }
    return [min, minindex];
}

var getMax = function(array) {
    var max = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] - max > 0) {
            max = array[i];

        }
    }
    return max;
}

window.onload = function() {
    var windowWidth = document.body.clientWidth;
    var picWidth = 165;
    var boxes = document.getElementsByClassName("box");
    var boxoffsetwidth = boxes[0].offsetWidth;
    var columnCount = Math.floor(windowWidth / boxoffsetwidth);
    // 获取第一行每列的高度

    var mainWidth = columnCount * boxoffsetwidth;
    var main = document.getElementById('main');
    main.style.cssText = "width:" + mainWidth + "px;margin:0 auto";


    // 封装函数 
    function setPic(array, box) {
        var min = getMin(array);
        var minheight = min[0];
        var minindex = min[1];
        var setleftvalue;

        // 设置下一张图片的位置
        if (minindex == 0) { setleftvalue = 0 } else { setleftvalue = (minindex) * boxoffsetwidth; }
        var settopvalue = minheight;

        box.style.position = "absolute";
        box.style.left = setleftvalue + "px";
        box.style.top = settopvalue + "px";

        array[minindex] = array[minindex] + box.offsetHeight;
    }

    var columnArray = [];
    for (var i = 0; i < boxes.length; i++) {
        if (i <= columnCount - 1) {
            columnArray.push(boxes[i].offsetHeight);
        }

    }

    for (var i = columnCount + 1; i < boxes.length; i++) {
        setPic(columnArray, boxes[i]);
    }

    // 滚动加载代码
    window.addEventListener('scroll', function() {

        var scrollY = window.scrollY;
        var mainHeight = getMax(columnArray);

        var viewportHeight = document.documentElement.clientHeight;
        console.log(viewportHeight + scrollY, mainHeight);

        if (viewportHeight + scrollY > mainHeight -20) {
        	
            for (var i = 0; i < 24; i++) {
                var index = boxes.length;
                var more = document.createElement('div');
                more.className = 'box';
                more.innerHTML = '<div class="pic"><img src="images/' + 11 + '.jpg" alt=""></div>';
                console.log(boxes.length)
                main.appendChild(more);
                setPic(columnArray, more);
            }


        }
        flag = 1;
    });

}
