requirejs.config({
    paths: {
        jquery: "jquery.min",
    }
});

requirejs(['jquery', 'backtop'], function($, backtop) {
    new backtop($('#backTop'),{
        mode: 'move',
        pos: 500,
        speed:2000,
        dest:0
    });

    // $('#backtop').backtop({
    //     mode:'move',
    // });
});
