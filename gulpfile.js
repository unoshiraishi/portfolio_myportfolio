import gulp from 'gulp';
import imagemin, {mozjpeg, optipng, svgo} from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

const minImg = () => {
    return gulp.src('src/img/*')
    .pipe(imagemin(
        [ mozjpeg({ quality: 80 }),
          optipng({optimizationLevel: 5}),
          svgo({ plugins: [ {
            name: 'removeViewBox',
            active: false
          }] })
        ], { verbose: true }
      )
    )
    .pipe(gulp.dest('dist/img'));
}

const minCss = () => {
    return gulp.src('src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
}

export default gulp.series(minImg, minCss);

