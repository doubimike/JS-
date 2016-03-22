requirejs.config({
    paths: {
        jquery: "jquery.min",
    }
});

requirejs(['jquery', 'backtop'], function($, backtop) {
    new backtop($('#backTop'),{
        mode:'move',
    });
});
