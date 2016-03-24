window.onload = function() {

    var wrap = document.getElementById('wrap');
    var spans = document.getElementsByTagName('span');

    function turn(el) {
        var cls = el.className;
        var id = el.id.substr(6);
        if (/photo-center/.test(cls)) {
            if (/photo-front/.test(cls)) {
                el.className = cls.replace(/photo-front/, 'photo-back');
                spans[id].className = 'i-current i-back';
            } else {
                el.className = cls.replace(/photo-back/, 'photo-front');
                spans[id].className = 'i-current i-front';
            }
        } else {
            var _center = document.getElementsByClassName('photo-center')[0];
            var _span = document.getElementsByClassName('i-current')[0];
            _center.className = 'photo photo-front';
            _span.className = '';

            spans[id].className = 'i-current';
            el.style = '';
            el.classList.add('photo-center');
            sort();
        }
    }

    // 输出内容
    function addPhotos() {

        var template = wrap.innerHTML;
        var html = [];
        var nav = [];
        for (var i = 0; i < data.length; i++) {
            var _html = template.
            replace(/{{index}}/, i)
                .replace(/{{img}}/, data[i].img)
                .replace(/{{caption}}/, data[i].caption)
                .replace(/{{desc}}/, data[i].desc);
            html.push(_html);

            var _span = '<span id=nav_' + i + ' >' + '</span>';
            nav.push(_span);
        }
        var navHtml = '<div class=nav>' + nav.join('') + '</div>';
        wrap.innerHTML = html.join('') + navHtml;
    }
    addPhotos();

    // 定义随机位置和旋转角度
    var photos = document.getElementsByClassName('photo');
    var wrapTop = wrap.offsetHeight;
    var wrapLeft = wrap.offsetWidth;
    var pW = document.getElementsByClassName('photo')[0].offsetWidth;
    var pH = document.getElementsByClassName('photo')[0].offsetHeight;

    function getRandom(argument) {
        return Math.floor(argument * Math.random())
    }

    function random(el, range) {
        if (!/photo-center/.test(el.className)) {
            var randomTop = randomRange([-pW, wrapTop]);
            var randomLeft = randomRange(range);
            var randomRotate = randomRange([0, 360]);
            el.style.top = randomTop + 'px';
            el.style.left = randomLeft + 'px';
            el.style.transform = 'rotateZ(' + randomRotate + 'deg)';
        }
    }

    function randomCenter() {
        var r = getRandom(data.length);
        var c = photos[r];
        var _span = document.getElementsByTagName('span')[r];
        c.classList.add('photo-center');
        _span.className = 'i-current';
    }

    randomCenter();

    // 范围随机数如何获取？
    function randomRange(range) {
        var max = Math.max(range[0], range[1]),
            min = Math.min(range[0], range[1]),
            diff = max - min;
        return Math.ceil(diff * Math.random() + min);
    }

    function sort() {
        for (var i = 0; i < photos.length; i++) {
            i < data.length / 2 ? random(photos[i], [-pW, wrapLeft / 2 - pW / 2]) : random(photos[i], [wrapLeft / 2 + pW / 2, wrapLeft]);
        }
    }

    sort();

    // 点击翻页
    for (var i = 0; i < photos.length; i++) {
        photos[i].addEventListener('click', function() {
            turn(this);
        })

    }

    // 点击按钮
    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        spans[i].addEventListener('click', function() {
            if (this.className != 'i-current') {
                document.getElementsByClassName('i-current')[0].className = '';
                this.className = 'i-current';
            }
            turn(photos[this.index]);
        })
    }
}
