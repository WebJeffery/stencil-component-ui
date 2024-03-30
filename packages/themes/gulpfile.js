/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const cached = require('gulp-cached');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./src/**/*.scss')
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(cssmin({ removeComments: true }))
    .pipe(dest('./lib'));
}

function copyfont() {
  return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'));
}

function devCompile() {
  const path = './src/**/*.scss';
  return watch(path, { verbose: true }, () => {
    src(path).pipe(sass.sync()).pipe(dest('./lib'));
  });
}

exports.build = series(compile, copyfont);
exports.dev = devCompile;
