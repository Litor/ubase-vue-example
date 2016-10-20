import service from './majorDirection.service';

// init state
export const state = {
  emapCard: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    pageable: false,
    template: require('./cardTpl.html')
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
