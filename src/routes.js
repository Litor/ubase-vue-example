import test1 from 'pages/test1'
import test2 from './pages/test2'
import index from './pages/index'
import notfound from './pages/notfound/index'

export default {
  '*': {
    component: notfound,
  },

  '/test1': {
    component: test1,
  },

  '/test2': {
    component: test2,
  },

  '/test3': {
    component: function(resolve) {
      require(['./pages/test3/test3.vue'], resolve)
    },
  },

  '/': {
    component: index,
  },
}
