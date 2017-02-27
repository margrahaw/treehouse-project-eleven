"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require("gulp-uglify"),
  rename = require('gulp-rename'),
  image  = require('gulp-image');

gulp.task("concatScripts", function() {
	gulp.src([
		'js/jquery.js', 
		'js/fastclick.js', 
		'js/foundation.js', 
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js'])
	.pipe(concat("apps.js"))
	.pipe(gulp.dest("js"));

	gulp.src([
		'css/normalize.css', 
		'css/foundation.css', 
		'css/basics.css', 
		'css/menu.css',
		'css/hero.css',
		'css/photo-grid.css',
		'css/modals.css',
		'css/footer.css'])
	.pipe(concat("main.css"))
	.pipe(gulp.dest("css"));
});

gulp.task("minifyScripts", function() {
	gulp.src("js/apps.js")
		.pipe(uglify())
		.pipe(rename('apps.min.js'))
		.pipe(gulp.dest('js'));
});


gulp.task("image", function() {
	gulp.src('./img/*')
		.pipe(image())
		.pipe(gulp.dest('./img'));
});



gulp.task("default", ["hello"], function() {
	console.log("the default task!!!");
});

