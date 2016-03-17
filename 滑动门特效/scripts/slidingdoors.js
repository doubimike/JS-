window.onload = function() {
    var box = document.getElementById('container');
    var imgs = box.getElementsByTagName('img');

    var imgWidth = imgs[0].offsetWidth;

    var exposeWidth = 160;
    var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
    box.style.width = boxWidth + 'px';

    function setImgsPos() {
        for (var i = 1, len = imgs.length; i < len; i++) {
            imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
        }
    }

    setImgsPos();


    // 计算每道门打开时应移动的距离
    var translate = imgWidth - exposeWidth;

    // 为每道门绑定事件 
    for (var i = 0; i < imgs.length; i++) {
    	imgs[i].index = i;
        imgs[i].onmouseover = function() {
            // 先将每道门复位
            setImgsPos();

            // 打开门
            for (var j = 1; j <= this.index; j++) {
            	imgs[j].style.left = imgs[j].offsetLeft -translate +'px';
            }
        }
    }

}
