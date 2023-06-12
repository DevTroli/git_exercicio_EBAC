const gulp = require ('gulp');
// const uglify = require ('gulp-uglify');
// const sass = require ('gulp-sass')(require('sass'));
import imagemin from 'gulp-imagemin';



function images() {
  return gulp.src('./src/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'));
}
// function soma () {
//   return gulp.src('./src/scripts/soma.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('./build/scripts'));
// }

//  gulp.task('sass', function Sass() {
//      return gulp.src('./src/styles/main.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('./build/styles'))
//        ;
//    });
  

// exports.soma= soma;
// exports.Sass = sass;
exports.images = images;
