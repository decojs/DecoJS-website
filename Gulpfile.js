var gulp = require('gulp');
var markdown = require('gulp-markdown');
var ejs = require('gulp-ejs');
var highlight = require('highlight.js');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var wrap = require('gulp-wrap-layout');


/*
var renderer = new marked.Renderer();

renderer.image = function (href, title, text) {
  return '<a class="imageLink" href="<%= MEDIA_PREFIX %>/img/'+href+'"><img src="<%= MEDIA_PREFIX %>/img/small/'+href+'" /></a>';
};*/


highlight.configure({
    classPrefix: ""
});






gulp.task('default', ['copy html', 'copy markdown', 'copy js', 'css'], function(){
    
});


gulp.task('css', function(){
    gulp.src([
        "www_source/bower_components/bootstrap/dist/css/bootstrap.min.css",
        "www_source/bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
        "www_source/css/theme.css",
        "www_source/css/nav.css",
        "www_source/bower_components/highlight.js/src/styles/default.css",
        "www_source/css/fonts.css"
    ])
    .pipe(concat('main.css'))
    //.pipe(cssmin())
    .pipe(gulp.dest('www/css'));
});

gulp.task('copy js', function(){
    gulp.src('www_source/pages/**/*.js')
    .pipe(gulp.dest('www/pages'));
});

gulp.task('copy html', function(){
    gulp.src('www_source/pages/**/*.html')
    .pipe(gulp.dest('www/pages'));
});

gulp.task('copy markdown', function(){
    gulp.src('www_source/pages/**/*.md')
    .pipe(markdown({
        highlight: function (code, lang) {
            return (lang ? highlight.highlight(lang, code) : highlight.highlightAuto(code)).value;
        },
        gfm: true
        //renderer: renderer
    }))
    .pipe(wrap({src: 'template.ejs'}, {
        active: function(name, file){
          return file.path.indexOf('\\'+name+'.html') > 0 ? 'class="active"' : '';
        }
    }))
    /*.pipe(ejs({
        open: "{%",
        close: "%}",
        name: "Marius"
    }))*/
    .pipe(gulp.dest('www/pages'));
});