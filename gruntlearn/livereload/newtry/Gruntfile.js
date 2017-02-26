module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var reloadPort=35729;

    // 项目配置(任务配置)
    grunt.initConfig({
        develop: {
            server: {
                file: 'server.js'
            }
        },
        watch: {
            options: {
                nospawn: true,
                livereload: reloadPort
            },
            server: {
                files: [
                    'sever.js','Gruntfile.js'
                ],
                tasks: ['develop']
            },
            views: {
                files: ['views/*.ejs','views/style.css'],
                options: {
                    livereload: reloadPort
                }
            }
        }
    });

    grunt.registerTask('default', [
    'develop',
    'watch'
  ]);
};