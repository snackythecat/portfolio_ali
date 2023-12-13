const gulp = require('gulp');
const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: './src',

    });
});

gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task('watcher', function() {
    watch('src/styles/*.css', series('reload'));
    watch('src/*.js', series('reload'));
    watch('src/index.html', series('reload'));
});

gulp.task('default', parallel('server', 'watcher'));