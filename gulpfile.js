var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var parallel = require("concurrent-transform");
var os = require("os");
var rename = require("gulp-rename");

const numCPUs = os.cpus().length;

gulp.task('thumbnails', function () {
  gulp.src('memes/*')
    .pipe(parallel(
      imageResize({ width: 350, noProfile: true, quality: 0.75}),
      numCPUs
    ))
    .pipe(parallel(
      rename((path) => path.basename += "-thumbnails"),
      numCPUs
    ))
    .pipe(gulp.dest('meme-thumbnails'));
});
