var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-css'),
    rename = require('gulp-rename');

//gulp.task('mytask', function () {
//    return gulp.src('source-files')
//        .pipe(plugin())
//        .pipe(gulp.dest('folder'));
//});

//gulp.task('sass', function () {
//    return gulp.src('app/sass/main.sass')
//        .pipe(sass())
//        .pipe(gulp.dest('app/css'))
//        .pipe(browserSync.reload({stream: true}));
//});

gulp.task('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('css', function () {
    return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync',  'css', 'scripts'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    
});