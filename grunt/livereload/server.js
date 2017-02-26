var express = require('express');
var app = express();
var path = require('path');


// set the view engine to ejs

app.set('view engine', 'ejs');

// 设置静态文件

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3200,function () {
    console.log('test');
});

// test