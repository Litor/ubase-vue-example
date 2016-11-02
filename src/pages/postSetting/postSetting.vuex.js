import service from './postSetting.service';

export const state = {
  emapCard: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    template: require('./cardTpl.html'),
    pageable: true
  },

  baseInfo: {},
  willDeleteWids: []
};
