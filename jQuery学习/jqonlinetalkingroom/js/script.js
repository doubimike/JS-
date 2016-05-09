// 点击登录，显示正在请求
$('#login-btn').on('click', function(event) {
    event.preventDefault();
    userLogin();
});

// userLogin函数
function userLogin(usr, pass) {
    var usr = $('#username').val();
    var pass = $(password).val();

    $.get('/path/to/file', function(data) {
    	/*optional stuff to do after success */
    	console.log('suc');
    });
}

// ajaxstart开始事件
$(document).ajaxStart(function() {
	$('#msg').html('正在发送ajax请求');
});

$(document).ajaxStop(function() {
	$('#msg').html('ajax请求完毕');
});

    var btn = document.getElementsByTagName('div');
    btn[0].addEventListener('click', function(a) {
        console.log(a);
    }, false);