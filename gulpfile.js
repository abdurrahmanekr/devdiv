var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate')

var cssFiles = [
	'./src/kernel/*.css',
	'./src/component/*.css',
];

var jsFiles = [
	'./src/kernel/*.js',
	'./src/directive/*.js'
];

gulp.task('css', function() {
	// concat
	gulp.src(cssFiles)
		.pipe(concat('devdiv.css'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(gulp.dest('./src/examples/dist/css'));

	// minimize
	gulp.src(cssFiles)
		.pipe(concat('devdiv.min.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css/'))
		.pipe(gulp.dest('./src/examples/dist/css'));
});

gulp.task('js', function() {
	// concat
	gulp.src(jsFiles)
		.pipe(concat('devdiv.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest('dist/js/'))
		.pipe(gulp.dest('./src/examples/dist/js'));

	// minimize
	gulp.src(jsFiles)
		.pipe(concat('devdiv.min.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
		.pipe(gulp.dest('./src/examples/dist/js'));
});

gulp.task('watch', function () {
	// gulp çalışır halde iken dosyaları tekrar build eder
    gulp.watch(cssFiles, ['css']);
    gulp.watch(jsFiles, ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);
