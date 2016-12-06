import service from './postSetting.service';

export const state = {
  postList:[],
  list:{
    url:service.api.getList

  },
  currentLevel:'',
  baseInfo: {levelList:[{id:'3', name:'院系级别'}, {id:'2', name:'专业级别'}, {id:'1', name:'班级级别'}]},
  willDeleteWids: []
};
