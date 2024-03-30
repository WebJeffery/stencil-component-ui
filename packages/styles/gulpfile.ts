/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path'
import { Transform } from 'stream'
import chalk from 'chalk'
import { type TaskFunction, dest, 
  parallel, // 并行打包
  series,  // 顺序打包
  src 
} from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import consola from 'consola'
import postcss from 'postcss'
import cssnano from 'cssnano'
import watch from 'gulp-watch'


const distFolder = path.resolve(__dirname, 'dist') // 打包样式输出的目录
const distBundle = path.resolve(__dirname, 'styles') // 样式包的绝对路径
const targetBundle = path.resolve(__dirname, '../', 'components/src/style') // 复制到组建目录下

/**
 * using `postcss` and `cssnano` to compress CSS
 * @returns
 */
function compressWithCssnano() {
  const processor = postcss([
    cssnano({
      preset: [
        'default',
        {
          // avoid color transform
          colormin: false,
          // avoid font transform
          minifyFontValues: false,
        },
      ],
    }),
  ])
  return new Transform({
    objectMode: true,
    transform(chunk, _encoding, callback) {
      const file = chunk as any
      if (file.isNull()) {
        callback(null, file)
        return
      }
      if (file.isStream()) {
        callback(new Error('Streaming not supported'))
        return
      }
      const cssString = file.contents!.toString()
      processor.process(cssString, { from: file.path }).then((result) => {
        const name = path.basename(file.path)
        file.contents = Buffer.from(result.css)
        consola.success(
          `${chalk.cyan(name)}: ${chalk.yellow(
            cssString.length / 1000
          )} KB -> ${chalk.green(result.css.length / 1000)} KB`
        )
        callback(null, file)
      })
    },
  })
}

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function buildThemeStyles() {
  const sass = gulpSass(dartSass)
  const noElPrefixFile = /(index|base|display)/
  return src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(compressWithCssnano())
    .pipe(
      rename((path) => {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `swc-${path.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}

/**
 * Build Component Css
 * @returns
 */
function buildThemeComponents() {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, 'src/components/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(compressWithCssnano())
    .pipe(
      rename((path) => {
        path.basename = `swc-${path.basename}`
      })
    )
    .pipe(dest(`${distFolder}/components`))
}

/**
 * copy from packages/styles/dist to packages/componenst/src/style
 */
export function copyThemeStyleBundle() {
  console.log('333', 222)
  return src(`${distFolder}/**`).pipe(dest(targetBundle))
}

/**
 * copy source file to packages
 */

export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}

export const build: TaskFunction = parallel(buildThemeStyles, buildThemeComponents)

const devCompile = () => {
  const sass = gulpSass(dartSass)
  const path = './src/**/*.scss';
  return watch(path, { verbose: true }, () => {
    src('./src/*.scss').pipe(sass.sync()).pipe(dest(targetBundle));
  });
}

export const dev = devCompile

export default build

