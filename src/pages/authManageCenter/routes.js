import authManageCenter from './authManageCenter/authManageCenter.vue';
import userManage from './authManageCenter/userManage/userManage.vue';
import userAuthSetting from './authManageCenter/userAuthSetting/userAuthSetting.vue';

export default {
  '/': {
    component: authManageCenter,
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
