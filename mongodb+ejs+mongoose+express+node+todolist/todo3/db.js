var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/express-todo');

// create a schema
var TodoSchema = new Schema({
	user_id :String,
	content:String,
	updated_at:Date
});

 // the schema is useless so far
// we need to create a model using it
var Todo = mongoose.model('Todo',TodoSchema);

// make this available to our users in our Node applications
module.exports = Todo;

