var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var del = require('del')
var path = require('path')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

const extensions = ['.js', '.json', '.es6', '.jsx']
const browserifyOpts = {
    debug: true,
    fullPaths: true,
    extensions: extensions
}
const babelifyOpts = {
    extensions: extensions,
    compact: false
}

gulp.task('browserify:app', [], function() {
    return browserify(browserifyOpts)
        .transform(babelify.configure(babelifyOpts))
        .require('./app.js', {entry: true})
        .bundle()
        .pipe(source('./app.js'))
        .pipe(gulp.dest('dist/'))
})

gulp.task('clean:js', function() {
    return del(['dist/js/*', 'dist/js'])
})

gulp.task('default', ['clean:js', 'browserify:app'])
