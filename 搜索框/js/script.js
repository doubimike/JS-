// $(function() {
//     $('#search_input').on('keyup', function() {
//         event.preventDefault();
//         var seachText = $('#search_input').val();
//         $.get('http://api.bing.com/qsonhs.aspx?q=' + seachText, function(d) {
// var d = d.As.Result[0].Suggest;
// var html = '';
// for (var i = 0; i < d.length; i++) {
//     html += '<li>' + d[i].Txt + '</li>';
// };
//             $('#search-result').html(html);
//             $('#search-suggest').show().css({
//                 top: $('#search-form').offset().top + $('#search-form').height() + 10,
//                 left: $('#search-form').offset().left,
//                 position: 'absolute'
//             });
//         }, 'json');
//     });

//     $(document).click(function() {
//     	$('#search-suggest').hide();
//     });


//     $(document).delegate('li', 'click', function() {
//     	var keyword = $(this).text();
//     	location.href = 'http://cn.bing.com/search?q='+keyword;
//     });
// });


window.onload = function() {
    var getDOM = function(id) {
        return document.getElementById(id);
    }

    var addEvent = function(id, event, fn) {
        var el = getDOM(id) || document;
        if (el.addEventListener) {
            el.addEventListener(event, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + event, fn);
        }
    }

    var getElementLeft = function(element) {
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;

        while (current != null) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        return actualLeft;
    }

    var getElementTop = function(element) {
        var actualTop = element.offsetTop;
        var current = element.offsetParent;

        while (current != null) {
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    }

    addEvent('search_input', 'keyup', function() {
        var seachText = getDOM('search_input').value;
        ajaxGet('http://api.bing.com/qsonhs.aspx?q=' + seachText, function(d) {
            var d = d.As.Result[0].Suggest;
            var html = '';
            for (var i = 0; i < d.length; i++) {
                html += '<li >' + d[i].Txt + '</li>';
            };
            getDOM('search-result').innerHTML = html;
            var ss = getDOM('search-suggest');
            ss.style.top = getElementTop(getDOM('search-form')) + 38 + 'px';
            ss.style.left = getElementLeft(getDOM('search-form')) + 'px';
            ss.style.position = 'absolute';
             ss.style.display = 'block';
        });

    })

    var request = new XMLHttpRequest();
    request.open('get', '', true);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            request.responseText
        }
    }

    var ajaxGet = function(url, callback) {
        var _xhr = null;
        if (window.XMLHttpRequest) {
            _xhr = new window.XMLHttpRequest();
        } else if (window.ActiveXObject) {
            _xhr = new ActiveXObject('Msxml2.XMLHTTP');
        }
        _xhr.onreadystatechange = function() {
            if (_xhr.readyState === 4 && _xhr.status == 200) {
                callback(JSON.parse(_xhr.responseText));
            }
        }
        _xhr.open('get', url, false);
        _xhr.send(null);
    }



}
