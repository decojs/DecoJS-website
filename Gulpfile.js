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
var clone = require('gulp-clone');
var filter = require('gulp-filter');
var express = require('express');

gulp.task('default', ['build'], function(){});

gulp.task('watch', ['default', 'server'], function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.exmaples, ['examples']);
    gulp.watch(paths.pages.concat(paths.templates), ['pages']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.mainjs, ['mainjs']);
});


gulp.task('build', ['html', 'examples', 'pages', 'ejs', 'js', 'img', 'css', 'fonts', 'mainjs', 'bower'], function(){});

gulp.task('server', function(){
  express().use(express.static(__dirname+"/www")).listen(80);
});

gulp.task('css', function(){
    return gulp.src(paths.css)
    .pipe(concat('main.css'))
    //.pipe(onlyIf(minify, cssmin()))
    .pipe(gulp.dest('www/css'));
});

gulp.task('bower', function(){
    return gulp.src(paths.bower, {base: 'bower_components'})
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
  
    var indexFilter = filter('**/index.html');
  
    var pages = gulp.src(paths.pages)
    .pipe(markdown(markdownOptions))
    .pipe(wrap({src: 'template.ejs'}, ejsOptions));
  
    var normal = pages.pipe(clone())
    .pipe(gulp.dest('www/pages'));
  
    var index = pages.pipe(clone())
    .pipe(indexFilter)
    .pipe(rename(function(path){
      console.log('created', path.dirname+'.html');
      path.basename = path.dirname;
      path.dirname = '';
    }))
    .pipe(gulp.dest('www/pages'));
      
    return es.merge(normal, index)
    .pipe(wrap({src: 'www_source/index.ejs'}, ejsOptions))
    .pipe(gulp.dest('www/snapshot'));;
});

gulp.task('ejs', function(){
    return gulp.src(paths.ejs)
    .pipe(ejs({contents:'', data:ejsOptions}))
    .pipe(gulp.dest('www/'));
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







var minify = true;

var paths = {
    'css': [
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
        "www_source/css/theme.css",
        "www_source/css/nav.css",
        "bower_components/highlightjs/styles/sunburst.css",
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
        'www_source/pages/**/*.{png,svg}'
    ],
    'templates':[
        'www_source/pages/**/*.ejs'
    ],
    'ejs':[
        'www_source/index.ejs'
    ],
    'html': [
        'www_source/**/*.html'
    ],
    'fonts': [
        'www_source/css/fonts/*.woff'
    ],
    'bower': [
        'bower_components/es6-promise/promise.js',
        'bower_components/requirejs/require.js',
        'bower_components/deco/{Source,Dist}/**/*.js',
        'bower_components/knockout/dist/knockout.js'
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
};

var ejsOptions = {
  active: function(name, file){
    return file.path.match(new RegExp('(\\/|\\\\)'+name+'\\.html$')) != null ? 'class="active"' : '';
  },
  buildDate: function(){
    return new Date().toISOString();
  }
};

var requirejsOptions = {
  baseUrl: "www_source/pages",
  paths:{
    'knockout': "../../bower_components/knockout/dist/knockout.debug",
    'customBindings': "../js/customBindings"
  },
  
  exclude: [
    "exports",
    "require"
  ],

  packages:[
    {name:'deco', location:'../../bower_components/deco/Source/deco', main:'deco'}
  ]
};
