var express = require('express');
var app = express();


app.use(function (req,res,next) {
	 console.log('Time: ',Date.now()) ;
	 next();
});

app.get('/', function (req, res) {

  res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('h');
    // res.download('a');
    res.end();
});

var router = express.Router();

router.use('/',function (req,res,next) {
	 console.log('/') ;
	 res.writeHead(200, {
        'Content-Type': 'text/html'
    });
	 res.write('h');
	 res.end('end');
	 next();
});

router.use(function (req,res,next) {
	 console.log('router') ;
	 next();
});

app.use('/router',router);



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});