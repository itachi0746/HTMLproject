var gulp = require("gulp"),
  babel = require("gulp-babel"),
  watch = require("gulp-watch");

gulp.task("babeljs", function() {
  return gulp
    .src("www/js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/js"));
});
gulp.task("watch", function() {
  gulp.watch("www/js/*.js", ["babeljs"]);
});

gulp.task("default", ["watch", "babeljs"]);
