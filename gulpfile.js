var gulp = require('gulp'),
uglify = require('gulp-uglify');


gulp.task('js', function(){
    return gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('builds/development/js'));
});
