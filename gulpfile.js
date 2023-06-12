const gulp = require ('gulp');
const uglify = require ('gulp-uglify');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin');
async function images() {
  const imagemin = (await import('gulp-imagemin')).default;
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
  };
  
 function soma () {
   return gulp.src('./src/scripts/soma.js')
   .pipe(uglify())
   .pipe(gulp.dest('./build/scripts'));
 }

  function sass() {
      return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
        ;
    };
  

exports.soma= soma;
exports.sass = sass;
exports.images = images;
