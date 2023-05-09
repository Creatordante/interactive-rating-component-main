
const { src, dest , watch , series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )

    done();
}

function images(){
    return src("images/**/*")
        .pipe(dest('build/imgs'))
}

function dev(){

    watch( 'src/scss/**/*.scss' , css );
    watch( 'images/**/*' , images );
}

exports.css = css;
exports.dev = dev;
exports.images = images;
exports.default = series(images,css, dev);