import gulp from 'gulp'
import del from 'del'
import connect from 'gulp-connect'
import webpack from 'webpack'
import path from 'path'
import webpackGulp from 'webpack-stream'
import named from 'vinyl-named'
import config from 'ubase-vue/apptools/webpack/config'
import configWebpack from 'ubase-vue/apptools/webpack/index'
import errorHandler from 'ubase-vue/apptools/webpack/helpers/errorHandler'
import env from 'gulp-env'

let dest = './www'
let port = '8081'
let envs = { NODE_ENV: config.NODE_ENV }

gulp.task('webpack', () =>
  gulp
  .src([])
  .pipe(env.set(envs))
  .pipe(errorHandler())
  .pipe(named())
  .pipe(webpackGulp(configWebpack(path, webpack)))
  .pipe(gulp.dest(dest))
  .pipe(connect.reload())
)

gulp.task('connect', () =>
  connect.server({
    root: [dest],
    port: port,
    livereload: true
  })
)

gulp.task('clean', cb => {
  try {
    del.sync(dest)
  } catch (e) {
    console.log('%s do not clean', dest)
  }
})

gulp.task('build', ['clean', 'webpack'])
gulp.task('default', ['clean', 'webpack', 'connect'])
