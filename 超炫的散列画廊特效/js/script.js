window.onload = function() {

    var wrap = document.getElementById('wrap');

    function turn(el) {
        var cls = el.className;
        if (/photo-front/.test(cls)) {
            cls = cls.replace(/photo-front/, 'photo-back')
        } else { cls = cls.replace(/photo-back/, 'photo-front') }
        return el.className = cls;
    }

    // 输出内容
    function addPhotos() {

        var template = wrap.innerHTML;
        var html = [];
        for (var i = 0; i < data.length; i++) {
            var _html = template.
            replace(/{{index}}/, i)
                .replace(/{{img}}/, data[i].img)
                .replace(/{{caption}}/, data[i].caption)
                .replace(/{{desc}}/, data[i].desc);
            html.push(_html);
        }
        wrap.innerHTML = html.join('');
    }
    addPhotos();

    // 定义随机位置和旋转角度
    var photos = document.getElementsByClassName('photo');
    var wrapTop = wrap.offsetHeight;
    var wrapLeft = wrap.offsetWidth;

    function getRandom (argument) {
    	 return Math.floor(argument * Math.random())
    }

    function random(el) {
        if (!/photo-center/.test(el.className)) {
            var randomTop = getRandom(wrapTop);
            var randomLeft = getRandom(wrapLeft);
            var randomRotate = getRandom(360);
            el.style.top = randomTop + 'px';
            el.style.left = randomLeft + 'px';
            el.style.transform = 'rotateZ(' + randomRotate + 'deg)';
        }
    }

    function randomCenter() {
        var c = photos[getRandom(data.length)];
        c.classList.add('photo-center');
    }

    randomCenter();

    for (var i = 0; i < photos.length; i++) {
        random(photos[i]);
    }

    // 点击
    var photoCenter = document.getElementsByClassName('photo-center')[0];
    photoCenter.addEventListener('click', function() {
        turn(this);
    });






}
