var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Todo Example' });
});

router.post('/create',function (req,res) {
	 new Todo({
	 	content:req.body.content,
	 	update_at:Date.now()
	 }).save(function (err,todo,count) {
	 	 res.redirect('/') ;
	 }) ;
});

module.exports = router;

