module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    name: 'app',
                    baseUrl: 'app/js',
                    mainConfigFile: 'app/js/main.js',
                    out: 'optimized.js',
                    almond: true,
                    optimize: 'uglify2',
                    uglify2: {
                        output: {
                            beautify: false
                        },
                        warnings: false,
                        mangle: true
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-requirejs');

    grunt.registerTask('default', ['requirejs']);
    grunt.registerTask('build', 'requirejs');
};