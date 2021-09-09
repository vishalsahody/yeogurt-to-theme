'use strict';

const configurations = require('./configurations.json');
const credentials = require('./credentials.json');

import gulp from 'gulp';
import sftp from 'gulp-sftp-up4';
import glob from 'glob';
import { KarmaServer, args } from './gulp/utils';

// This will grab all js in the `gulp` directory
// in order to load all gulp tasks
glob.sync('./gulp/tasks/**/*.js').filter(function (file) {
    return (/\.(js)$/i).test(file);
}).map(function (file) {
    require(file);
});




// Copy CSS files across
gulp.task('copycssacross', function (done) {
    // Copy to the local folder
    gulp.src('tmp/styles/*').pipe(gulp.dest(configurations.path.local.css));

    // Only copy if the enabled in configurations.js
    if (configurations.copyacross) {
        gulp.src('tmp/styles/*')
            .pipe(sftp({
                host: credentials.host,
                user: credentials.user,
                pass: credentials.pass,
                remotePath: configurations.path.remote.css
            }));
        console.log('Copied to FTP');
        done();
    } else {
        done();
    }
});

// Copy JS files across
gulp.task('copyjsacross', function (done) {
    // Copy to the local folder
    gulp.src('tmp/scripts/*').pipe(gulp.dest(configurations.path.local.js));

    // Only copy if the enabled in configurations.js
    if (configurations.copyacross) {
        gulp.src('tmp/scripts/*')
            .pipe(sftp({
                host: credentials.host,
                user: credentials.user,
                pass: credentials.pass,
                remotePath: configurations.path.remote.js
            }));
        done();
    } else {
        done();
    }
});

// Copy all fonts files across
gulp.task('copyfontsacross', function (done) {

    gulp.src('src/typography/**/*.{ttf,woff,eot,svg}').pipe(gulp.dest(configurations.path.local.typography));

    // Only copy if the enabled in configurations.js
    if (configurations.copyacross) {
        gulp.src('tmp/typography/**/*.{ttf,woff,eot,svg}')
            .pipe(sftp({
                host: credentials.host,
                user: credentials.user,
                pass: credentials.pass,
                remotePath: configurations.path.remote.typography
            }));
        done();
    } else {
        done();
    }
});

// Copy Image files across
gulp.task('copyimagesacross', function () {
    // Copy to the local folder
    gulp.src('tmp/images/**/*').pipe(gulp.dest(configurations.path.local.images))

    // Only copy if the enabled in configurations.js
    if (configurations.copyacross) {
        return gulp.src('tmp/images/**/*')
            .pipe(sftp({
                host: credentials.host,
                user: credentials.user,
                pass: credentials.pass,
                remotePath: configurations.path.remote.images
            }));
    } else {
        return true;
    }
});

// Build production-ready code
gulp.task('build', gulp.series(
    gulp.parallel(
        'copy',
        'imagemin',
        'pug',
        'sass',
        'browserify'
    ),
    'rev'
));

// Server tasks with watch
gulp.task('serve', gulp.series(
    gulp.parallel(
        'imagemin',
        'copy',
        'pug',
        'sass',
        'browserify',
        'browserSync',
        'watch',
        'copycssacross',
        'copyjsacross',
        'copyfontsacross',
        'copyimagesacross'
    )
));

// Default task
gulp.task('default', gulp.series('clean', 'build'));

// Testing
gulp.task('test', gulp.series('eslint'));
