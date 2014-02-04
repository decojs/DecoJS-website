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
    watch: {
      scripts: {
        files: ['www_source/**'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
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
    cssmin: {
      //https://github.com/gruntjs/grunt-contrib-uglify
      css: {
        options: {
          sourceMap: 'www/css/main.css.map'
        },
        files: {
          'www/css/main.css': [
            "www_source/bower_components/bootstrap/dist/css/bootstrap.min.css",
            "www_source/bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
            "www_source/css/theme.css",
            "www_source/css/nav.css",
            "www_source/css/fonts.css",
            "www_source/bower_components/prismjs/prism.css"
          ]
        }
      }
    },
    copy: {
      bower: {
        files: [
          {expand: true, src: ['www_source/bower_components/bootstrap/dist/css/*.min.css'], dest:'www/bower_components/bootstrap/dist/css/', flatten: true},
          {expand: true, src: ['www_source/bower_components/requirejs/require.js'], dest:'www/bower_components/requirejs/', flatten: true},
          {expand: true, src: ['www_source/bower_components/prismjs/prism.css'], dest:'www/bower_components/prismjs', flatten: true},
          {expand: true, src: ['www_source/css/fonts/*.woff'], dest:'www/css/fonts/', flatten: true},
          {expand: true, src: ['www_source/index.html'], dest:'www/', flatten: true},
          {expand: true, src: ['**'], dest:'www/pages', flatten: false, cwd:'www_source/pages'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('install', ['bower']);
  grunt.registerTask('build', ['requirejs', 'cssmin', 'copy'])

};