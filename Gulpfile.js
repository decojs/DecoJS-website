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


var paths = {
    'css': [
        "www_source/bower_components/bootstrap/dist/css/bootstrap.min.css",
        "www_source/bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
        "www_source/css/theme.css",
        "www_source/css/nav.css",
        "www_source/bower_components/highlight.js/src/styles/default.css",
        "www_source/css/fonts.css"
    ],
    'js': [
        'www_source/pages/**/*.js'
    ],
    'pages':[
        'www_source/pages/**/*.md'
    ],
    'html': [
        'www_source/**/*.html'
    ],
    'fonts': [
        'www_source/css/fonts/*.woff'
    ]
}

highlight.configure({
    classPrefix: ""
});

var markdownOptions = {
    highlight: function (code, lang) {
        return (lang ? highlight.highlight(lang, code) : highlight.highlightAuto(code)).value;
    },
    gfm: true
    //renderer: renderer
};

var ejsOptions = {
    active: function(name, file){
      return file.path.match(new RegExp('(\\/|\\\\)'+name+'\\.html$')) != null ? 'class="active"' : '';
    }
};



gulp.task('watch', function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.pages, ['pages']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.js, ['js']);
});


gulp.task('default', ['html', 'pages', 'js', 'css', 'fonts'], function(){
    
});


gulp.task('css', function(){
    gulp.src(paths.css)
    .pipe(concat('main.css'))
    //.pipe(cssmin())
    .pipe(gulp.dest('www/css'));
});

gulp.task('js', function(){
    gulp.src(paths.js)
    .pipe(gulp.dest('www/pages'));
});

gulp.task('html', function(){
    gulp.src(paths.html)
    .pipe(gulp.dest('www'));
});

gulp.task('pages', function(){
    gulp.src(paths.pages)
    .pipe(markdown(markdownOptions))
    .pipe(wrap({src: 'template.ejs'}, ejsOptions))
    .pipe(gulp.dest('www/pages'));
});

gulp.task('fonts', function(){
    gulp.src(paths.fonts)
    .pipe(gulp.dest('www/css/fonts/'));
});