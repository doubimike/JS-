module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            // Arbitrary non-task-specific properties.
            all: ['Gruntfile.js', 'src/**/*.js']
        },

        uglify: {
            dev: {
                files: {
                    'src/output.js': ['src/**/*.js']
                }
            },
            production: {
                files: {
                    'dist/js/output.js': ['src/**/*.js']
                }
            }
        },

        sass: { // Task
            random: { // Target
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.scss'],
                    dest: 'src/',
                    ext: '.css'
                }]
            }
        },

        cssmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css'],
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            css: {
                files: 'src/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        },

        'string-replace': {
            prod: {
                src: 'src/**/*.html',
                dest: './dist/',
                options: {
                    replacements: [{
                        pattern: 'style.css',
                        replacement: 'style.min.css'
                    }]
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin']);
    grunt.registerTask('dev', ['jshint', 'uglify:dev', 'sass', 'cssmin']);
    grunt.registerTask('build', ['jshint', 'uglify', 'sass', 'cssmin','string-replace']);

};
