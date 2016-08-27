import gulp from 'gulp'
import del from 'del'
import connect from 'gulp-connect'
import webpack from 'webpack'
import path from 'path'
import webpackGulp from 'webpack-stream'
import named from 'vinyl-named'
import config from 'ubase-vue/dist/apptools/webpack/config'
import configWebpack from 'ubase-vue/dist/apptools/webpack/index'
import errorHandler from 'ubase-vue/dist/apptools/webpack/helpers/errorHandler'
import env from 'gulp-env'
import proxy from 'http-proxy-middleware'

let dest = './www'
let port = '8081'
let envs = { NODE_ENV: config.NODE_ENV }
let userConfig = {
  // 配置别名
  alias: {

  }
}

gulp.task('webpack', () =>
  gulp
  .src([])
  .pipe(env.set(envs))
  .pipe(errorHandler())
  .pipe(named())
  .pipe(webpackGulp(configWebpack(path, webpack, userConfig)))
  .pipe(gulp.dest(dest))
  .pipe(connect.reload())
)

gulp.task('connect', () =>
  connect.server({
    root: [dest],
    port: port,
    livereload: true,
    middleware: function(connect, opt) {
      return [
        proxy('/xsxx', {
          target: 'http://res.wisedu.com:8000',
          changeOrigin: true
        }),
        proxy('/WeCloud', {
          target: 'http://res.wisedu.com',
          changeOrigin: true
        })
      ]
    }

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
