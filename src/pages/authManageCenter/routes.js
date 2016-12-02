import frame from './frame'
import userManage from './userManage/userManage.vue';
import userAuthSetting from './userAuthSetting/userAuthSetting.vue';

export default {
  '/': {
    component: frame,
    subRoutes:{
      '/userManage':{
        component:userManage
      },
      '/userAuthSetting':{
        component:userAuthSetting
      }
    }
  }
}
