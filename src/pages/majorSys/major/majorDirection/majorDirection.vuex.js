import service from './majorDirection.service';

export const state = {
  emapCard: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    pageable: false,
    template: require('./cardTpl.html')
  }
};
