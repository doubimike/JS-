var express = require('express');
var path = require('path');


var app = express();
app.set('view engine', 'ejs');
app.locals.title = 'mike';


app.use(express.static('views/'));

app.get('/', function(req, res) {
    console.log('test');
    
    res.render('index');
});

app.get('/data', function(req, res) {    
    res.send('a');
});

app.listen(3001);