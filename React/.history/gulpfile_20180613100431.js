var gulp = require("gulp"),
  babel = require("gulp-babel"),
  watch = require("gulp-watch");

var config = {
  src: 'src/',
  lib: 'lib/'
};

gulp.task("babeljs", function() {
  return gulp
    .src(config.src + "*.js")
    .pipe(babel())
    .pipe(gulp.dest(config.lib));
});
gulp.task("watch", function() {
  gulp.watch(config.src + "*.js", ["babeljs"]);
});

gulp.task("default", ["watch", "babeljs"]);
