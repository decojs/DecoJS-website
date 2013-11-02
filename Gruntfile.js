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
    copy: {
      bower: {
        files: [
          {expand: true, src: ['bower_components/bootstrap/dist/css/*.min.css'], dest:'www/css/', flatten: true},
          {expand: true, src: ['bower_components/bootstrap/dist/js/*.min.js'], dest:'www/js/', flatten: true},
          {expand: true, src: ['bower_components/jquery/jquery.min.js'], dest:'www/js/', flatten: true},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('install', ['bower', 'copy']);

};