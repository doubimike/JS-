var express = require('express');
var router = express.Router();

/* GET home page. */

var usr = [{'usr':'pass'}];

router.get('/', function(req, res) {
	
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.send('ok');
  console.log(req);
});

router.post('/login', function(req, res) {
	if (req.body.usr=='mike'&&req.body.pass=='mike') {
		res.redirect('/chatroom');
	} else {
		res.send('用户密码不对');
	}
  console.log(req.body);
});

router.get('/chatroom', function(req, res) {
  res.render('chatroom',{ title: 'Chatroom' });
});


module.exports = router;
