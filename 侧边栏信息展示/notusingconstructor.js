// 觉得不用构造行数，代码看起来逻辑没有那么清晰。
window.onload = function() {
    var sidebar = document.getElementById('sidebar');
    var closeBar = document.getElementById('closeBar');
    var sidebarState = "opened";
    var menuContentEl = null;
    closeBar.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('check sidebar status');
        if (sidebarState == "opened") {
            sidebarState = "closed";
            sidebar.style.left = '-120px';
            closeBar.style.left = "160px";
            // + nav-content 全部弄成透明的。
        } else {
            sidebarState = "opened";
            sidebar.style.left = "0";
            closeBar.style.left = "0";
        }
    });

    var sidebarItems = document.getElementsByClassName('item');
    for (var i = sidebarItems.length - 1; i >= 0; i--) {
        sidebarItems[i].addEventListener('click', function(e) {
            e.stopPropagation();
            if (menuContentEl == null) {
                menuContentEl = document.getElementById(e.currentTarget.id + '-content');
                menuContentEl.style.opacity = 1;
            } else {
                menuContentEl.style.opacity = 0;
                menuContentEl = document.getElementById(e.currentTarget.id + '-content');
                menuContentEl.style.opacity = 1;
            }
        })
    };

    sidebar.addEventListener('click', function(e) {
        target = e.target;
        if (e.currentTarget.id == 'closeBar') {
            console.log('handover to closeBar');
        } else {
            if (target.className != "menu") {
                console.log("nothing ")
            }

        }
    })

    // 写到这，我发现需要有一个东西来保存sidebar的状态，如果不用构造函数，
    // 方法只能是存一个变量  var sidebarState = "open" ，感觉不是很灵活啊；
    // 能够实现的

    var navc = document.getElementsByClassName('nav-content');
    for (var i = navc.length - 1; i >= 0; i--) {
        var self = navc[i];
        navc[i].addEventListener('click', function(e) {
            if (e.target.className == "glyphicon glyphicon-chevron-left nav-con-close") {
                for (var j = navc.length - 1; j >= 0; j--) {
                    navc[j].style.opacity = 0;
                }
            }
        });
    }
}

