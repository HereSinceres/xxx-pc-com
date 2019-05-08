const { series, parallel, src, dest } = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var plugins = [
    autoprefixer()
];
function less2css() {
    return src('src/**/*.less')
        .pipe(less())
         .pipe(postcss(plugins))
        .pipe(dest('lib'));
}
exports.less2css = less2css;
exports.default = series(
    less2css
); 