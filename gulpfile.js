var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var parallel = require("concurrent-transform");
var os = require("os");
var rename = require("gulp-rename");

const numCPUs = os.cpus().length;

gulp.task('thumbnails', function () {
  gulp.src('memes/*')
    .pipe(parallel(
      imageResize({ width: 400}),
      numCPUs
    ))
    .pipe(parallel(
      rename((path) => path.basename += "-thumbnail"),
      numCPUs
    ))
    .pipe(gulp.dest('meme-thumbnails'));
});
