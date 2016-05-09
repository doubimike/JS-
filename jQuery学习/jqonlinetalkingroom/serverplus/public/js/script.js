// 点击登录，显示正在请求
$('#login-btn').on('click', function(event) {
    event.preventDefault();


    userLogin();
});

// userLogin函数
function userLogin(usr, pass) {
    var usr = $('#username').val();
    var pass = $('#password').val();

    if (!usr) {
        $('#msg').html('用户名不能为空');
    } else if (!pass) {
        $('#msg').html('密码不能为空');
    } else {
        $.post('/login', {
            usr: usr,
            pass: pass
        }, function(data, textStatus, xhr) {
            // $('#msg').html('用户或者密码不匹配');
        });
    }
}

// ajaxstart开始事件
$(document).ajaxStart(function() {
    $('#msg').html('正在发送ajax请求').show();
});

// $(document).ajaxStop(function() {
//     $('#msg').html('请求完毕').hide();
// });