// ********************
// GULPFILE.JS
// ********************

// VARIABLES
const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const plugins = [autoprefixer(), cssnano()];

// STYLE TASK
function styleTask() {
  return gulp
    .src("/*.css")
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

// WATCH TASK
function watchTask() {
  browserSync.init();
  gulp.watch("./scss/**/*.scss", styleTask);
  gulp.watch("./templates/**/*.twig").on("change", browserSync.reload);
}

// EXPORTS
exports.style = styleTask;
exports.watch = watchTask;
