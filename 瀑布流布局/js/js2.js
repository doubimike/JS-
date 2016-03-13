window.onload = function() {
    waterfall('main', 'box');
    //  JSON
    var data = { "data": [{ 'src': '0.jpg' }, { 'src': '1.jpg' }, { 'src': '2.jpg' }, { 'src': '3.jpg' }] }
    window.onscroll = function() {
        if (checkSrcoll()) {
            // 将数据块渲染到页面的尾部
            for (var i = 0; i < data.data.length; i++) {
                picnum = data.data[i].src;
                addBox(picnum);
            }
            waterfall('main', 'box')
        }
    }
}

function waterfall(parentDomId, className) {
    // 将main下的所有class为box的元素取出来
    var oParent = document.getElementById(parentDomId);
    var oBoxs = getByClass(oParent, className);
    // 计算整个页面显示的列数（页面宽/box的宽）
    var oBoxWidth = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / oBoxWidth);
    oParent.style.cssText = "width:" + cols * oBoxWidth + "px;margin:0 auto;";
    var heightArray = new Array();
    for (var i = 0; i < oBoxs.length; i++) {
        if (i + 1 <= cols) {
            heightArray.push(oBoxs[i].offsetHeight);
        } else {
            var minOfHa = Math.min.apply(null, heightArray); // 暂时不深入，这个apply的作用，这里面
            //大有文章

            indexOfMinH = getMinIndex(heightArray, minOfHa);

            oBoxs[i].style.position = "absolute";
            oBoxs[i].style.top = minOfHa + "px";
            oBoxs[i].style.left = indexOfMinH * oBoxWidth + "px";
            // 更新数组
            heightArray[indexOfMinH] += oBoxs[i].offsetHeight;
        }

    }
}


// 根据class获取元素
function getByClass(parentDomObj, className) {
    var allEls = parentDomObj.getElementsByTagName('*');
    var targetArray = [];
    for (var i = 0; i < allEls.length; i++) {
        if (allEls[i].className == className) {
            targetArray.push(allEls[i]);
        }
    }
    return targetArray;
}


function getMinIndex(array, minheight) {
    var mins = [];
    for (var j = 0; j < array.length; j++) {
        if (array[j] == minheight) {
            mins.push(j)
        }
    }
    return mins[0];
}
// 检测是否具备加载数据块的条件
function checkSrcoll() {
    var oParent = document.getElementById('main');
    var oBoxs = getByClass(oParent, 'box');
    var lastBox = oBoxs[oBoxs.length - 1];
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return (lastBox.offsetTop + Math.floor(lastBox.offsetHeight / 2) < document.documentElement.clientHeight + window.scrollY) ? true : false;
}

function addBox(picnum) {
    var main = document.getElementById('main');
    var newBox = document.createElement('div');
    var newPic = document.createElement('div');
    var img = document.createElement('img');
    main.appendChild(newBox);
    newBox.appendChild(newPic);
    newPic.appendChild(img);
    img.src = "images/" + picnum;
    newBox.className = 'box';
    newPic.className = 'pic';

}
