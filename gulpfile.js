var gulp = require("gulp");
var concat = require("gulp-concat");
var browserify = require("gulp-browserify");
var nodemon = require("gulp-nodemon");

var paths = {
    serverMain: "./server/server.js",
    clientMain: "./client/js/main.js",
    publicDir: "./public",
    jsFiles: ["./client/js/**/*.js"],
    htmlFiles: ["./client/index.html"]
}

gulp.task("js", function() {
    gulp.src(paths.clientMain)
        .pipe(browserify({
            transform: ["babelify"],
            debug: true
        }))
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest(paths.publicDir));
});

gulp.task("html", function() {
    gulp.src(paths.htmlFiles)
        .pipe(gulp.dest(paths.publicDir));
});

gulp.task("watch", function() {
    gulp.watch(paths.jsFiles, ["js"]);
    gulp.watch(paths.htmlFiles, ["html"]);
});

gulp.task("nodemon", function() {
    nodemon({
        script: paths.serverMain,
        ignore: ["public", "client"],
        ext: "html js",
        execMap: {
            js: "node --harmony_arrow_functions"
        }
    });
});

gulp.task("build", ["html", "js"]);
gulp.task("dev", ["build", "watch", "nodemon"]);
gulp.task("default", ["build"]);
