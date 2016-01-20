var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(server({
			defaultFile: 'index.html',
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

gulp.task('less', function () {
	return gulp.src('./less/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		//.pipe(minifyCSS())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'))
});

gulp.task('watch', function () {
	gulp.watch('./less/*.less',['less']);
	gulp.watch('./*.html');
});

gulp.task('default', ['webserver','less','watch']);