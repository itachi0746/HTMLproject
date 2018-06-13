var gulp = require("gulp"),
  babel = require("gulp-babel"),
  react = require("gulp-react"),
  browserify = require("browserify"),
  reactify = require("reactify"),
  source = require("vinyl-source-stream"),
  babelify = require("babelify"),
  watch = require("gulp-watch");

var config = {
  src: "src/",
  lib: "lib/"
};

gulp.task("jsx", function() {
  return browserify(config.src + "*.js")
    .transform(babelify, { presets: ["react"] }) //预处理代码
    .bundle() // 打包
    .pipe(babel())
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(config.lib));
});

//jsx转换成js任务
gulp.task('transform', function(){
  gulp.src(config.src + "*.js")
      .pipe(react())
      .pipe(gulp.dest(config.lib));
});

// gulp.task("babeljs", function() {
//   return gulp
//     .src(config.src + "*.js")
//     .pipe(babel())
//     .pipe(gulp.dest(config.lib));
// });

// gulp.task("watch", function() {
//   gulp.watch(config.src + "*.js", ["babeljs"]);
// });

// gulp.task("default", ["watch", "babeljs"]);
