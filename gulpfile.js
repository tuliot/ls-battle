var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var mongoose = require('mongoose');
require('./lib/database')
var contestantModel = require('./lib/models/contestant')


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


gulp.task('createContestant', function(done){
  var contestant = new contestantModel()
  contestant.name = "Nobody Important";
  contestant.hashtag = "lpbattlenobodyimportant";
  contestant.save(function(err){
      console.log(err);
      done()
    });

});
