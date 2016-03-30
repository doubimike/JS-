$(function() {
    var container = $('.container'),
        box = $('.box'),
        buddy = $('.buddy'),
        pop = $('.pop'),
        open = $('.btn'),
        close = $('.close'),
        imgs = pop.find('img');

    $.Velocity.RegisterUI('mike.slideUpIn', {
        defaultDuration: 500,
        calls: [
            [{ opacity: [1, 0], translateY: [0, 100] }],
        ],
    });

    $.Velocity.RegisterUI('mike.slideDownOut', {
        defaultDuration: 300,
        calls: [
            [{ opacity: [0, 1], translateY: [100, 0] }],
        ],
    });

    $.Velocity.RegisterUI('mike.scaleIn', {
        defaultDuration: 300,
        calls: [
            [{ opacity: [1, 0], scale: [1, 0.3] }],
        ],
    });

    $.Velocity.RegisterUI('mike.scaleOut', {
        defaultDuration: 300,
        calls: [
            [{ opacity: [0, 1], scale: [0.3, 1] }],
        ],
    });

    var seqInit = [{
            elements: container,
            properties: 'mike.slideUpIn',
            options: {
                delay: 300,
                sequenceQueue: false
            }
        }, {
            elements: box,
            properties: 'mike.slideUpIn',
            options: {
                sequenceQueue: false
            }
        }, {
            elements: buddy,
            properties: 'mike.slideUpIn',
            options: {
                delay: 60,
                sequenceQueue: false
            }
        }
    ];

    var seqClick = [{
        elements: container,
        properties: 'mike.slideDownOut',
        options: {
            sequenceQueue: false
        }
    }, {
        elements: box,
        properties: 'mike.slideDownOut',
        options: {
            sequenceQueue: false
        }
    }, {
        elements: container,
        properties: 'mike.slideUpIn',
        options: {
            sequenceQueue: false
        }
    }, {
        elements: pop,
        properties: 'mike.slideUpIn',
        options: {
            sequenceQueue: false
        }
    }, {
        elements: imgs,
        properties: 'mike.scaleIn',
        options: {
            sequenceQueue: false
        },
    }];

    var seqClose = [{
        elements: imgs,
        properties: 'mike.scaleOut',
        options: {
            sequenceQueue: false
        },
        elements: container,
        properties: 'mike.slideDownOut',
        options: {
            sequenceQueue: false
        }
    }, {
        elements: pop,
        properties: 'mike.slideDownOut',
        options: {
            sequenceQueue: false
        }
    }, {
        elements: container,
        properties: 'mike.slideUpIn',
        options: {
            sequenceQueue: false
        }
    }, {
        elements: box,
        properties: 'mike.slideUpIn',
        options: {
            sequenceQueue: false
        },
    }];

    $.Velocity.RunSequence(seqInit);

    open.on('click', function() {
        $.Velocity.RunSequence(seqClick);
    });

    close.on('click', function() {
        $.Velocity.RunSequence(seqClose);
    });
});
