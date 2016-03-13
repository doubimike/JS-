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




window.onload = function() {
    var windowWidth = document.body.clientWidth;
    var picWidth = 165;
    var boxes = document.getElementsByClassName("box");
    var boxoffsetwidth = boxes[0].offsetWidth;
    var columnCount = Math.floor(windowWidth / boxoffsetwidth);
    // 获取第一行每列的高度
    
    var mainWidth = columnCount*boxoffsetwidth;
    var main = document.getElementById('main');
    main.style.cssText = "width:"+mainWidth+"px;margin:0 auto";

    
    // 封装函数 
    function setPic(array, box) {
        var min = getMin(array);
        var minheight = min[0];
        var minindex = min[1];
        console.log(minheight)
        console.log(minindex)
        var setleftvalue;

        // 设置下一张图片的位置
        if (minindex == 0) { setleftvalue = 0 } else { setleftvalue = (minindex) * boxoffsetwidth; }
        var settopvalue = minheight;

        box.style.position = "absolute";
        box.style.left = setleftvalue + "px";
        box.style.top = settopvalue + "px";

        console.log(setleftvalue,settopvalue)

        array[minindex] = array[minindex] + box.offsetHeight;
        console.log(array[minindex])
        console.log(array)
    }

    var columnArray = [];
    for (var i = 0; i < boxes.length; i++) {
        if (i <= columnCount-1) {
            columnArray.push(boxes[i].offsetHeight);
        }

    }

    for (var i = columnCount+1; i < boxes.length; i++) {
    	setPic(columnArray, boxes[i]);
    	// debugger;
    }
    
}
