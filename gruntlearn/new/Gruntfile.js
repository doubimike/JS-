module.exports = function(grunt) {
    
    var reloadPort = 35729;

    grunt.initConfig({
        watch: {
            js: {
                files: [
                    'server.js', 'Gruntfile.js'
                ],
                tasks: ['develop'],
                options: {
                    nospawn: true,
                    livereload: reloadPort
                }
            }
        },
        develop: {
            server: {
                file: 'server.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-develop');

    grunt.registerTask('default', ['develop', 'watch']);

};