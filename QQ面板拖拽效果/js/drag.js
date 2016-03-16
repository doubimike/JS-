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

    var loginState = document.getElementById('loginState');
    var loginStatePanel = document.getElementById('loginStatePanel');
    loginState.onclick = function(e) {
        if (loginStatePanel.style.display == "block") {
            loginStatePanel.style.display = "none";
        } else {
            loginStatePanel.style.display = "block";
            e.stopPropagation();

            document.onclick = function() {
                loginStatePanel.style.display = "none"
            }
        }
    }

    var lis = loginStatePanel.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function() {
            this.style.background = '#567';
        }

        lis[i].onmouseout = function() {
            this.style.background = '#fff';
        }
        lis[i].onclick = function(e) {
            var e = e || window.event;
            if (e.stopPropagation) {
                e.stopPropagation()
            } else {
                e.cancelBublle = true;
            }
            var target = e.currentTarget;
            var id = target.id;
            changeState(id);
        }
    }



    console.log(loginStatePanel.style.display)


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


function changeState(id) {
    var txt = document.getElementById(id).getElementsByTagName('div')[1].innerHTML;
    document.getElementById('loginStateShow').className = "login-state-show " + id;
    document.getElementById('login2qq_state_txt').innerHTML = txt;
    loginState.onclick();
}
