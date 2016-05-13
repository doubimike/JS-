var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
// Got a problem here.
var Todo = require('../db.js');

/* GET home page. */

router.get('/', function(req, res) {
    Todo.find({}, function(err, all) {
        res.render('index', {
            title: 'Express Todo Example',
            todos: all
        });
    });
});

router.get('/test', function(req, res) {
    res.render('index', {
        title: 'Test'
    });
});

router.post('/create', function(req, res) {
    var newTodo = new Todo({
        content: req.body.content,
        updated_at: Date.now()
    });

    newTodo.save(function(err) {
        if (err) {
            throw err
        };
        res.redirect('/');
    });

});

router.get('/delete/:id', function(req, res) {
    Todo.findById(req.params.id, function(err, data) {
        data.remove(function (err) {
        	 if (err) throw err;
        	 console.log('suc') ;
        	 res.redirect('/');
        });
    });

});



module.exports = router;