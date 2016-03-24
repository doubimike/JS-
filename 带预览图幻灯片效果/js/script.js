var data = [
    { img: 1, h1: 'Creative', h2: 'DUET' },
    { img: 2, h1: 'Creative', h2: 'DUET' },
    { img: 3, h1: 'Creative', h2: 'DUET' },
    { img: 4, h1: 'Creative', h2: 'DUET' },
    { img: 5, h1: 'Creative', h2: 'DUET' },
    { img: 6, h1: 'Creative', h2: 'DUET' }
];

// 通用函数
var g = function(id) {
    if (id.substr(0, 1) == '.') {
        return document.getElementsByClassName(id.substr(1))
    }
    return document.getElementById(id);
}

function addSliders() {
    // 获取模板
    var tpl_main = g('template_main').innerHTML.replace(/^\s*/, '').replace(/\s*$/, '');
    var tpl_ctrl = g('template_ctrl').innerHTML.replace(/^\s*/, '').replace(/\s*$/, '');
    var out_main = [];
    var out_ctrl = [];
    for (i in data) {
        var _html_main = tpl_main.replace(/{{index}}/g, data[i].img).replace(/{{h2}}/g, data[i].h1).replace(/{{h3}}/g, data[i].h2);
        var _html_ctrl = tpl_ctrl.replace(/{{index}}/g, data[i].img);
        out_main.push(_html_main);
        out_ctrl.push(_html_ctrl);
    }

    g('template_main').innerHTML = out_main.join('');
    g('template_ctrl').innerHTML = out_ctrl.join('');
}

window.onload = function() {
    addSliders();
    switchSlider(1);

    setTimeout(function() {
        movePics();
    }, 100)
}

function switchSlider(n) {
    var main = g('main_' + n);
    var ctrl = g('ctrl_' + n);
    var clear_main = g('.main-i');
    var clear_ctrl = g('.ctrl-i');
    var mainBack = g('template_main');
    var _tActive = g('.main-i_active')[0];

    if (_tActive) {
        var _prevActiveId = _tActive.id.substr(5);
        mainBack.style.backgroundImage = 'url(images/' + _prevActiveId + '.jpg)';
    }

    for (var i = 0; i < clear_ctrl.length; i++) {
        clear_ctrl[i].className = 'ctrl-i';
        // 随机左右进入
        clear_main[i].className = Math.round(Math.random()) ? 'main-i':'main-i main-i_random';
    }

    main.className = 'main-i main-i_active';
    ctrl.className += ' ctrl-i_active';
}

// 动态调整图片mt，以垂直居中
function movePics() {
    var pics = g('.pic');
    for (var i = 0; i < pics.length; i++) {
        pics[i].style.marginTop = -pics[i].offsetHeight / 2 + 'px';
    }
}
