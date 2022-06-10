const { src, dest, parallel } = require("gulp");

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

 
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
exports.dev = parallel(versionWebp, imagenes);