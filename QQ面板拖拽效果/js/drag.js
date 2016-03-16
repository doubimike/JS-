window.onload = drag;

function drag() {
    var title = document.getElementsByClassName('login_logo_webqq')[0];
    var panel = document.getElementById('loginPanel');
    title.onmousedown = mDown;

    function mDown(e) {
        e = e || window.event;
        var x = e.clientX - panel.offsetLeft;
        var y = e.clientY  - panel.offsetTop;
        document.onmousemove = move;

        function move(e) {
            e = e || window.event;

            panel.style.left = (e.clientX - x) + 'px';
            panel.style.top = (e.clientY - y) + 'px';
        }
    }



}
