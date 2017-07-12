var gulp = require('gulp');
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var babel = require("babelify")
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('styles', function(){
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
})

gulp.task('assets',function(){
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
})

gulp.task('scripts',function(){
    browserify('./src/index.js')
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    /*este nos sivr para renombrar el archivo de salida*/
    .pipe(rename('app.js'))
    /*hacia donde queremos que se guarde el archivo*/
    .pipe(gulp.dest('public'));
})

gulp.task('default',['styles','assets','scripts'])
