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
                    'dist/app.html': ['index.html']
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
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                        'app/css/main.css'
                    ]
                }
            }
        },
        copy: {
            index: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['app/img/*'],
                        dest: 'dist/img',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['build/index.php'],
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ]

            }
        },
        devserver: {
            default: {
                file: 'index.html'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'app/js/**/*.js']
        },
        shell: {
            cleandist: {
                command: 'rm -rf *',
                options: {
                    execOptions: {
                        cwd: 'dist'
                    }
                }
            },
            gitcommit: {
                command: [
                    'git add .',
                    'git add -u',
                    'git commit -m "Deploy"'
                ].join('&&'),
                options: {
                    execOptions: {
                        cwd: 'dist'
                    }
                }
            },
            masterpush: {
                command: 'git push -f origin dist',
                options: {
                    stdout: true,
                    execOptions: {
                        cwd: 'dist'
                    }
                }
            },
            herokupush: {
                command: 'git push -f heroku dist:master',
                options: {
                    stdout: true,
                    execOptions: {
                        cwd: 'dist'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', 'Development server', ['devserver']);
    grunt.registerTask('build', 'Build dist folder', [
        'shell:cleandist',
        'jshint',
        'requirejs',
        'cssmin',
        //'copy:img',
        'copy:index',
        'processhtml'
    ]);
    grunt.registerTask('deploy', 'Heroku deployment', function(){
        grunt.task.run([
            'build',
            'shell:gitcommit',
            'shell:masterpush',
            'shell:herokupush'
        ]);
    });
};