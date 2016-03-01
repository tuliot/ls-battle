var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload


gulp.task('default', function(){
});


gulp.task('serve', function(){
    browserSync({
      server: {
        baseDir: 'app',
        routes: {
          '/bower_components': 'bower_components',
        '/api': 'api'
        }
      }
    });
    gulp.watch(['*.html','styles/**/*.css','scripts/**/*.js'], {cwd: 'app'}, reload);
})
//Got the recipe for this Gulp task at this link
//https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md
