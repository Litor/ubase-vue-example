import path from 'path';
import ubase from 'ubase-vue';

ubase({
  // 配置别名
  alias: {
    'components': path.resolve(__dirname, './src/components')
  },

  // 端口
  port: '8083',

  // meta地址
  metaInfoUrl: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/jcsj-apps/',

  // mock server代理
  proxy: [{ source: '/yxxzry', target: 'http://res.wisedu.com:8000' }]
});
