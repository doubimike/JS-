function execute(someFunction, value) {
    someFunction(value);
}

execute(function(x) {
    console.log(x);
}, 'Hello');