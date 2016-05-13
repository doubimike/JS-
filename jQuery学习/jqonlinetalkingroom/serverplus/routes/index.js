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
		res.send('1');
	} else {
		res.send('用户密码不对');
	}
  console.log(req.body);
});

// 模拟一下在线的数据
var onlineMan = [{name:'mike',sex:'male'},{name:'Jason',sex:'female'}];

router.get('/chatroom', function(req, res) {
  res.render('chatroom',{ title: 'Chatroom',onlineMan:onlineMan });
});



console.log(onlineMan.length)


router.get('/checkOnlineNum', function(req, res) {

  res.send(onlineMan);
});

router.post('/chat', function(req, res) {
  res.send('ok');
});



module.exports = router;
