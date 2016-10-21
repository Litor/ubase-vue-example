import service from './gradeAdd.service';

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
