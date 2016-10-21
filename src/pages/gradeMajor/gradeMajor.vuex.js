import service from './gradeMajor.service';

export const state = {
  emapCard: {
    pagePath: service.api.getGradeMajorNumList_meta,
    url: service.api.getGradeMajorNumList,
    action: service.api.getGradeMajorNumList_action,
    template: require('./cardTpl.html')
  }
};
