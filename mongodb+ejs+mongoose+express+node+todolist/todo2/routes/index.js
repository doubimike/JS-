var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express Todo Example', todos: [{ 'content': 'test' }, { 'content': 'test2' }], user: { uid: '' } });
});

router.get('/test', function(req, res, next) {
    res.json({ 'hello': 'world' });
});


router.post('/test', function(req, res, next) {
    res.send('result');
});

router.post('/create', function(req, res, next) {
    // res.render('index', { title: 'Express Todo Example Create' });
    new Todo({
        content: req.body.content,
        updated_at: Date.now()
    }).save(function(err, todo, count) {
        if (err) {
            res.send('err');
            return
        };
        res.redirect('/');
    });
});




module.exports = router;
