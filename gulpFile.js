/**
 * require gulp package
 */
const 
    gulp       = require('gulp') ,
    concat     = require('gulp-concat'),
    prefix     = require('gulp-autoprefixer'),
    sass       = require('gulp-sass'),
    pug        = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    notify     = require('gulp-notify'),
    zip        = require('gulp-zip'),
    ftp        = require('vinyl-ftp'),
    image      = require('gulp-image');

/**
 * create html pug task
 */
gulp.task('pug' , function(){
    return gulp.src('project/*.pug')
    // use pug to convert to html
    /**
     * for not compressed {pretty: true}
     */
    .pipe(pug({pretty : true}))
    // collect all in index file
    // .pipe(concat('index.html'))
    // send to dist folder
    .pipe(gulp.dest('dist'))
    // notify
    .pipe(notify())
    // live reload data
    .pipe(livereload());
});


/**
 * create css task
 */
gulp.task('css' , function() {
    // get files from this location
    /**
     * * all files
     * * .html all html files
     * special files use []
     */
    return gulp.src('project/css/libs/*.css') 
    // create source map
    .pipe(sourcemaps.init())
    // add prefixes to css files
    .pipe(prefix('last 2 versions'))
    // collect all css in one file called main
    .pipe(concat('lib.css'))
    // write source maps
    .pipe(sourcemaps.write('.'))
    // production location
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});


/**
 * create sass task
 */
gulp.task('sass' , function(){
    return gulp.src('project/css/main.scss') 
    // create source map
    .pipe(sourcemaps.init())
    // compile to sass 
    // can make outputStyle to compressed
    .pipe(sass())
    // add prefixes to css files
    .pipe(prefix('last 2 versions'))
    // collect all css in one file called main
    .pipe(concat('main.css'))
    // write source maps
    .pipe(sourcemaps.write('.'))
    // production location
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});


/**
 * create js task
 */
gulp.task('js' , function() {
    // get files from this location
    /**
     * * all files
     * * .html all html files
     * special files use []
     */
    return gulp.src(['project/js/*.js']) 
    // collect them all in one file called main js
    .pipe(concat('main.js'))
    // minify javascript
    .pipe(uglify())
    // production location
    .pipe(gulp.dest('dist/js'))
    // live reload data
    .pipe(livereload());
});

/**
 * create js task for libraries
 */
gulp.task('jsLibs' , function() {
    // get files from this location
    /**
     * * all files
     * * .html all html files
     * special files use []
     */
    return gulp.src(['project/js/libs/*.js']) 
    // collect them all in one file called main js
    .pipe(concat('lib.js'))
    // minify javascript
    .pipe(uglify())
    // production location
    .pipe(gulp.dest('dist/js'))
    // live reload data
    .pipe(livereload());
});

/**
 * image
 */
gulp.task('image' , function(){
    return gulp.src(['project/images/**']) 
    .pipe(image())
    .pipe(gulp.dest('dist/images'));
});

/**
 * fonts
 */
gulp.task('fonts' , function(){
    return gulp.src(['project/fonts/**'])
    .pipe(gulp.dest('dist/fonts'));
});

/**
 * run local server
 */
gulp.task('server' , function(){
    require('./server.js');
});


/**
 * compress files
 */
gulp.task('compress' , function(){
    return gulp.src('project/**/*.*')
    .pipe(zip('project.zip'))
    // .pipe(zip())
    .pipe(gulp.dest('dist/compressed'))
    .pipe(notify('Done Compressing'));
});


/*
upload project */
gulp.task('deploy' , function(){
    const conn = ftp.create({
        host : 'host.com',
        user : 'username',
        password : 'password' , 
        parallel : 10 , 
    });

    return gulp.src(['dist/**/*.*'] , {base : '.' , buffer : false})
        .pipe(conn.newer('/public_html'))
        .pipe(conn.dest('/public_html'));
});


/**
 * watch task 
 */
gulp.task('watch' , function(){
    require('./server.js');
    // listen to live reload data
    livereload.listen();
    // pug
    gulp.watch('project/*.pug', gulp.series('pug'));
    // watch all folder
    gulp.watch('project/pug/**', gulp.series('pug'));
    // sass
    gulp.watch('project/css/**/*.scss', gulp.series('sass'));
    // css
    gulp.watch('project/css/libs/*.css', gulp.series('css'));
    // js
    gulp.watch('project/js/*.js', gulp.series('js'));
    // js libs
    gulp.watch('project/js/libs/*.js', gulp.series('jsLibs'));
    // images
    gulp.watch('project/images/**' , gulp.series('image'));
    // fonts
    gulp.watch('project/fonts/**' , gulp.series('fonts'));
    /**
     * watch compressing files
     */
    // gulp.watch('project/**/*.*', gulp.series('compress'));
});

/**
 * default task
 */
// gulp.task('default', ['watch']);


/**
 * important labs 
 * -- gulp-babel 
 * -- gulp-replace 
 */