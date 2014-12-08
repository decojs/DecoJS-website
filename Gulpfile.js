var gulp = require('gulp');
var es = require('event-stream');
var markdown = require('gulp-markdown');
var ejs = require('gulp-ejs');
var highlight = require('highlight.js');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var wrap = require('gulp-wrap-layout');
var requirejs = require('gulp-amd-optimizer');
var foreach = require('gulp-foreach');
var uglify = require('gulp-uglify');
var onlyIf = require('gulp-if');
var express = require("express");


/*
var renderer = new marked.Renderer();

renderer.image = function (href, title, text) {
  return '<a class="imageLink" href="<%= MEDIA_PREFIX %>/img/'+href+'"><img src="<%= MEDIA_PREFIX %>/img/small/'+href+'" /></a>';
};*/



gulp.task('watch', ['default', 'server'], function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.exmaples, ['examples']);
    gulp.watch(paths.pages, ['pages']);
    gulp.watch(paths.js.concat(paths.templates), ['js']);
    gulp.watch(paths.mainjs, ['mainjs']);
});


gulp.task('default', ['html', 'examples', 'pages', 'js', 'img', 'css', 'fonts', 'mainjs', 'bower'], function(){
    
});

gulp.task('server', function(){
  express().use(express.static(__dirname+"/www")).listen(80);
});

gulp.task('css', function(){
    return gulp.src(paths.css)
    .pipe(concat('main.css'))
    .pipe(onlyIf(minify, cssmin()))
    .pipe(gulp.dest('www/css'));
});

gulp.task('bower', function(){
    return gulp.src(paths.bower, {base: 'www_source/bower_components'})
    .pipe(gulp.dest('www/bower_components'));
});

gulp.task('img', function(){
    return gulp.src(paths.pageImages)
    .pipe(gulp.dest('www/pages'));
});

gulp.task('examples', function(){
    return gulp.src(paths.exmaples)
    .pipe(gulp.dest('www/examples'));
});

gulp.task('js', function(){
    return gulp.src(paths.js)
    .pipe(foreach(function(stream, file){
      console.log("stream file", file.relative, file.cwd);
      return stream
      .pipe(requirejs(requirejsOptions, {
        exclude: [
          "knockout", 
          "deco", 
          "piwik"
        ]
      }))
      .pipe(concat(file.relative))
      .pipe(onlyIf(minify, uglify()))
      .pipe(gulp.dest('www/pages'))
    }));
});

gulp.task('html', function(){
    return gulp.src(paths.html)
    .pipe(gulp.dest('www'));
});

gulp.task('pages', function(){
    return gulp.src(paths.pages)
    .pipe(markdown(markdownOptions))
    .pipe(wrap({src: 'template.ejs'}, ejsOptions))
    .pipe(gulp.dest('www/pages'));
});

gulp.task('fonts', function(){
    gulp.src(paths.fonts)
    .pipe(gulp.dest('www/css/fonts/'));
});

gulp.task('mainjs', function(){
  return gulp.src('www_source/js/main.js')
  .pipe(requirejs(requirejsOptions, {umd: true}))
  .pipe(concat('main.js'))
  .pipe(onlyIf(minify, uglify()))
  .pipe(gulp.dest('www/js/'));
});







var minify = false;

var paths = {
    'css': [
        "www_source/bower_components/bootstrap/dist/css/bootstrap.min.css",
        "www_source/bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
        "www_source/css/theme.css",
        "www_source/css/nav.css",
        "www_source/bower_components/highlightjs/styles/sunburst.css",
        "www_source/css/fonts.css"
    ],
    'js': [
        'www_source/pages/**/*.js'
    ],
    'mainjs': [
        'www_source/js/**/*.js'
    ],
    'exmaples':[
        'www_source/examples/**/*'
    ],
    'pages':[
        'www_source/pages/**/*.md'
    ],
    'pageImages':[
        'www_source/pages/**/*.png'
    ],
    'templates':[
        'www_source/pages/**/*.ejs'
    ],
    'html': [
        'www_source/**/*.html'
    ],
    'fonts': [
        'www_source/css/fonts/*.woff'
    ],
    'bower': [
        'www_source/bower_components/es6-promise/promise.js',
        'www_source/bower_components/requirejs/require.js',
        'www_source/bower_components/deco/{Source,Dist}/**/*.js',
        'www_source/bower_components/knockout/dist/knockout.js'
    ]
}

highlight.configure({
    classPrefix: "hljs-"
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

var requirejsOptions = {
  baseUrl: "www_source/pages",
  paths:{
    'knockout': "../bower_components/knockout/dist/knockout.debug",
    'customBindings': "../js/customBindings"
  },
  
  exclude: [
    "exports",
    "require"
  ],

  packages:[
    {name:'deco', location:'../bower_components/deco/Source/deco', main:'deco'}
  ]
};
