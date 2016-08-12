import test1 from 'pages/test1'
import test2 from './pages/test2'
import notfound from './pages/notfound/index'

export default {
 
  '/test1': {
    title: '测试1',
    component: test1,
  },

  '/test2': {
    title: '测试2',
    component: test2,
  },

  '/test3': {
    title: '测试3',
    component: function(resolve) {
      require(['./pages/test3/test3.vue'], resolve)
    },
  },
}
