var gulp = require('gulp');
var concat = require("gulp-concat");
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var uglify = require("gulp-uglify");
var sass = require("gulp-sass")

gulp.task("sass", function() {
    return gulp.src('src/sass/*.scss').pipe(sass()).pipe(rename({ 'suffix': '.min' })).pipe(cssnano()).pipe(gulp.dest("css"));
});
gulp.task("js", function() {
    return gulp.src('src/js/*.js').pipe(uglify()).pipe(rename({ "suffix": "min" })).pipe(gulp.dest("js"));
})
gulp.task("watch", function() {
    gulp.watch(["src/sass/*.css", "src/js/*.js"], ['sass', "js"]);
})