window.onload = drag;

function drag() {
    var title = document.getElementsByClassName('login_logo_webqq')[0],
        panel = document.getElementById('loginPanel');
    title.onmousedown = mDown;
    title.onmouseup = mUp;
    var close = document.getElementById('ui_boxyClose');
    close.onclick = function() {
        panel.style.display = "none";
    };
}

function mDown(e) {
    e = e || window.event;
    var panel = document.getElementById('loginPanel'),
        x = e.clientX - panel.offsetLeft,
        y = e.clientY  - panel.offsetTop;

    document.onmousemove = function(e) {
        move(e, x, y);
    }
}

function mUp() {
    document.onmousemove = null;
}


function move(e, x, y) {
    e = e || window.event;
    var panel = document.getElementById('loginPanel'),
        l = e.clientX - x,
        t = e.clientY - y,
        dh = document.documentElement.clientHeight || document.body.clientHeight,
        dw = document.documentElement.clientWidth || document.body.clientWeight,
        maxW = dw - panel.offsetWidth - 10,
        maxH = dh - panel.offsetHeight;
    if (l < 0) {
        l = 0
    } else if (l > maxW) {
        l = maxW;
    }

    if (t < 10) {
        t = 10
    } else if (t > maxH) {
        t = maxH;
    }

    panel.style.left = l + 'px';
    panel.style.top = t + 'px';
}
