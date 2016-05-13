$('#txt-input').on('keyup', function(event) {
    event.preventDefault();
    /* Act on the event */
    if (event.keyCode == '13') {
        $('#send').click();
    }
});

function changeContent() {
    var $ct = $('.chat-cont');
    $ct.html($ct.html() + '<div>' + 'who' + '于' + new Date() + '说：' + $('#txt-input').val() + '</div>');
    $('#txt-input').val('');
}

$('#send').on('click', function(event) {
    event.preventDefault();
    if ($('#txt-input').val() != '') {
        $.post('/chat', {
            msg: $('.chat-cont').html()
        }).done(function(data, textStatus, xhr) {
            changeContent();
        }).fail(function() {
            alert('发送失败');
        });
    } else {
        alert('内容不能为空');
        $('#txt-input').focus();
    }

});

$(document).ajaxStart(function() {
    $('.input-tips').html('正在发送...').show();
});

$(document).ajaxStop(function() {
    $('.input-tips').html('').hide();
});

// 自定义设置表情图标函数
function initFace () {
	 var strHtml = '';
	 for(var i = 1;i<=10;i++){
	 	strHtml += "<img src='Face/"+i+".gif' id='" + i +"'/>";
	 } 
	 $('#area-face').html(strHtml);
}

initFace();


// 点击图标显示id号
$('#area-face img').on('click', function(event) {
	event.preventDefault();
	console.log($(this));
	$('#txt-input').val($('#txt-input').val()+'<:'+this.id+':>');
});