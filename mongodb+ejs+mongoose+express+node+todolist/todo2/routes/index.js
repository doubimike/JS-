var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

/* GET home page. */
router.get('/', function(req, res, next) {
    Todo.find(function(err, todos, count) {
        res.render('index', {
            title: 'Express Todo Example',
            todos: todos
        });
    });
});

router.get('/test', function(req, res, next) {
    res.json({ 'hello': 'world' });
});


router.post('/test', function(req, res, next) {
    res.send('result');
});

router.post('/create', function(req, res, next) {
    new Todo({
        content: req.body.content,
        updated_at: Date.now()
    }).save(function(err, todo, count) {
        res.redirect('/');
    });
});

router.get('/destroy/:id', function(req, res) {
    Todo.findById( req.params.id, function ( err, todo ){
    todo.remove( function ( err, todo ){
      res.redirect( '/' );
    });
});



module.exports = router;
