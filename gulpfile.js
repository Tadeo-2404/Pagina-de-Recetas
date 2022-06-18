const { src, dest, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css( done ){
    src('src/scss/**/*.scss') // Identificar archivo .scss
        .pipe( plumber() )
        .pipe( sass() ) // Compilarlo
        .pipe( dest('public/build/css') ); // Almacenarlo
 
    done();
}
 
function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src('src/assets/**/*')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('public/assets'));
    
    done();
}
 
function versionWebp(done) {
    const opciones = {
        quality: 50
    };
    src('src/assets/**/*')
        .pipe(webp(opciones))
        .pipe(dest('public/assets'));
    
    done();
}
 
 
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.css = css;
exports.dev = parallel(css, versionWebp, imagenes);