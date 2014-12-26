var gulp        = require('gulp'),
    express      = require('express'),
    app         = express();
    concat      = require('gulp-concat'),
    jade        = require('gulp-jade'),
    stylus      = require('gulp-stylus'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-reporter'),
    livereload  = require('gulp-livereload'),
    path        = require('path');

// Lint javascript
gulp.task('lint', function(){
    gulp.src('public/javascripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Compile Stylus stylesheets
gulp.task('stylus', function(){
    gulp.src('public/stylesheets/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('public/stylesheets/'))
});

// Compile Jade templates
gulp.task('jade', function(){
    gulp.src('views/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./views/'))
});

gulp.task('express', function(){
    app.use(express.static(path.resolve('./bin')));
    app.listen(3000);
})