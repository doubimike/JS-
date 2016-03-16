var timer = null;
var flag = 1;

window.onload = function() {
    var play = document.getElementById('play'),
        stop = document.getElementById('stop');



    eventUtil.addHandler(play, 'click', function() {
        clearInterval(timer);
        timer = setInterval(function() {
            changeContent();
        }, 30)
        play.style.background = "gray";
    });

    eventUtil.addHandler(stop, 'click', function() {
        clearInterval(timer);
        play.style.background = "#153168";
    });

    eventUtil.addHandler(document, 'keyup', function(e) {
        var e = e || window.event;
        console.log(e.code)
        if (e.code == "Enter" && flag == 1) {
            timer = setInterval(changeContent, 30)
            play.style.background = "gray";
            flag = 0;
        } else {
            clearInterval(timer);
            play.style.background = "#153168";
            flag = 1;
        }

    });



}

function changeContent() {
    var dataArray = ['苹果1', '苹果2', '苹果3', '苹果4', '苹果5', '苹果6', '苹果7', '苹果8', '苹果9', '苹果10']
    title = document.getElementById('title');
    var random = Math.floor(Math.random() * dataArray.length);
    title.innerHTML = dataArray[random];
}
