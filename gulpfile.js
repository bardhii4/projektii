const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass(done) {
	gulp
		.src('./scss/main.scss') // here we select the main.css file
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // here we tell gulp to compile SASS to CSS using the sass() method
		.pipe(gulp.dest('./css')); // here we tell gulp where to store the compiled SASS file

	done();
}

exports.sass = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass);
