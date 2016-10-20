import service from './gradeAdd.service';

// init state
export const state = {
  leftSource: {
    url: service.api.getList,
    root: 'datas>rows',
    id: 'wid'
  },
  search: {
    source: [],
    current: ''
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
