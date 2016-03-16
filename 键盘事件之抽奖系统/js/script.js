window.onload = function() {
    var play = document.getElementById('play'),
        stop = document.getElementById('stop');
        var timer;


    eventUtil.addHandler(play, 'click', function() {
        timer = setInterval(changeContent, 30)
    });

    eventUtil.addHandler(stop, 'click', function() {
        clearInterval(timer);
    });

    eventUtil.addHandler(document, 'keydown', function() {
        timer = setInterval(changeContent, 30)
    });



}

function changeContent() {
  var dataArray = ['苹果1','苹果2','苹果3','苹果4','苹果5','苹果6','苹果7','苹果8','苹果9','苹果10']
    title = document.getElementById('title');
    var random = Math.floor(Math.random()*10);
    title.innerHTML = dataArray[random];
}
