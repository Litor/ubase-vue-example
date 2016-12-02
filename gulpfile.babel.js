import path from 'path';
import ubase from 'ubase-vue';

ubase({

  langs:['cn', 'en'],
  // 配置别名
  alias: {
    'components': path.resolve(__dirname, './src/components')
  },

  // 端口
  port: '8083',

  // meta地址
  metaInfoUrl: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/jcsj-apps/',

  // mock server代理
  proxy: [{ source: '/jcsj-apps-web', target: 'http://res.wisedu.com:8000' },
    { source: '/yxxzry-apps-web', target: 'http://res.wisedu.com:8000' },
    { source: '/iap-mngt', target: 'http://res.wisedu.com:8000' }]
});
