var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var dest = require('gulp-dest');

//sass
gulp.task('sass', function () {
 return gulp.src('sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));
});

//minify-css
gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(dest('css', {ext: '.min.css'}))
        .pipe(gulp.dest('./'));
    });

// Default task
gulp.task('default', ['sass', 'minify-css']);
