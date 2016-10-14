import path from 'path';
import ubaseGulp from 'ubase-vue/dist/apptools/webpack/gulp';

let userConfig = {
  // 配置别名
  alias: {
    'components': path.resolve(__dirname, './src/components')
  },

  // 端口
  port: '8081',

  // meta地址
  metaInfoUrl: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/jcsj-apps/',

  // mock server代理
  proxy: [{ source: '/jcsj-apps-web', target: 'http://res.wisedu.com:8000' }]
};

ubaseGulp(path, userConfig);
