'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: ['public/css/*.scss'],
                tasks: ['sass:dev']
            },
            js: {
                files: ['public/js/*.js'],
                tasks: ['uglify:dev']
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
}
