var gulp = require("gulp"),
  babel = require("gulp-babel"),
  browserify = require("browserify"),
  reactify = require("reactify"),
  source = require("vinyl-source-stream"),
  watch = require("gulp-watch");

var config = {
  src: "src/",
  lib: "lib/"
};

gulp.task("jsx", function() {
  browserify(config.src + "test.js")
    .transform(reactify)
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(config.lib));
});

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
