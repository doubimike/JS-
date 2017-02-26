var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:/test');

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error: '));
db.once('open',function () {
    var kittySchema = mongoose.Schema({
        name: String,
    });

    kittySchema.methods.speak = function () {
        var greeting = this.name ? 'Meow name is '+ this.name : 'I don\'t have a name.';
        console.log(greeting);
    };

    kittySchema.pre('save',function (next) {
        console.log('test');
        var err = new Error('Something went wrong');
        next(err);
    });

    var Kitten = mongoose.model('Kitten',kittySchema);

    var silence = new Kitten({
        name: 'silence'
    });

    silence.save(function (err,silence) {
        if (err) return console.log(err);
        silence.speak();
    })

    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    });
});