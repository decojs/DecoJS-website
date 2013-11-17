module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      //https://github.com/yatskevich/grunt-bower-task
      install: {
        options: {
          copy: false
        }
      }
    },
    requirejs: {
      //https://github.com/gruntjs/grunt-contrib-requirejs
      compile: {
        options: {
          baseUrl: "www_source/pages",
          out: "www/js/main.js",
          name: "../js/main",
          mainConfigFile: 'www_source/js/main.js',
          
          
          optimize: "none",
          normalizeDirDefines: "all",
          generateSourceMaps: true,
          preserveLicenseComments: false
        }
      }
    },
    copy: {
      bower: {
        files: [
          {expand: true, src: ['www_source/bower_components/bootstrap/dist/css/*.min.css'], dest:'www/bower_components/bootstrap/dist/css/', flatten: true},
          {expand: true, src: ['www_source/bower_components/requirejs/require.js'], dest:'www/bower_components/requirejs/', flatten: true},
          {expand: true, src: ['www_source/bower_components/prismjs/prism.css'], dest:'www/bower_components/prismjs', flatten: true},
          {expand: true, src: ['www_source/css/*.css'], dest:'www/css/', flatten: true},
          {expand: true, src: ['www_source/index.html'], dest:'www/', flatten: true},
          {expand: true, src: ['**'], dest:'www/pages', flatten: false, cwd:'www_source/pages'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('install', ['bower']);
  grunt.registerTask('build', ['requirejs'])

};