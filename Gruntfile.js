module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    name: 'main',
                    baseUrl: 'app/js',
                    mainConfigFile: 'app/js/main.js',
                    out: 'dist/js/app.js',
                    almond: true,
                    optimize: 'uglify2',
                    uglify2: {
                        output: {
                            beautify: false
                        },
                        warnings: false,
                        mangle: false
                    },
                    wrap: true
                }
            }
        },
        processhtml: {
            options: {
                data: {}
            },
            dist: {
                files: {
                    'dist/index.html': ['index.html']
                }
            }
        },
        cssmin: {
            combine: {
                options: {
                    report: 'min'
                },
                files: {
                    'dist/css/app.css': [
                        'bower_components/dist/css/bootstrap.css',
                        'app/css/main.css'
                    ]
                }
            }
        },
        copy: {
            dist: {
                expand: true,
                flatten: true,
                src: ['app/img/**'],
                dest: 'dist/img/',
                filter: 'isFile'
            }
        },
        devserver: {
            default: {
                file: 'index.html'
            },
            distserver: {
                file: 'dist/index.html'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'app/js/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['devserver']);
    grunt.registerTask('build', ['jshint', 'requirejs', 'cssmin', 'copy', 'processhtml']);
};