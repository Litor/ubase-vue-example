import service from './gradeMajor.service';

// init state
export const state = {
  emapCard: {
    pagePath: service.api.getGradeMajorNumList_meta,
    url: service.api.getGradeMajorNumList,
    action: service.api.getGradeMajorNumList_action,
    template: require('./cardTpl.html')
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
