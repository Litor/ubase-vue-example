import test1 from './test1.vue';
import test2 from './test2/test2.vue';
import test3 from './test3/test3.vue';

export default {
  '/test1': {
    component: test1,
    title: 'test1'
  },
  '/test2': {
    component: test2,
    title: 'test2'
  },
  '/test3': {
    component: test3,
    //title: 'test3'
  }
}
