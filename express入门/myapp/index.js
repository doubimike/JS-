var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.use(express.static('public'));

var server = app.listen(3030, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
