var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            files: ['views/**', 'server.js','Gruntfile.js'],
            tasks: 'develop'
        },
        develop: {
            server: {
                file: 'server.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-express');
    // grunt.registerTask('server',['express','watch']);
    grunt.loadNpmTasks('grunt-develop');
    grunt.registerTask('default',['watch']);
};

