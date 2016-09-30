import service from './gradeAdd.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('gradeAdd.title'),
  paperDialog: {
    currentView: 'gradeAdd',
    title: Vue.t('gradeAdd.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'gradeAdd',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('gradeAdd.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'gradeAdd',
    title: Vue.t('gradeAdd.dialog.title')
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('gradeAdd.tipDialog.del'),
      okEvent: 'gradeAdd:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('gradeAdd.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('gradeAdd.tipPop.del_success')
    }
  },
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

// mutations
export const mutations = {
  [SET_TITLE](state, data) {
    state.title = data.title;
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  return dispatch(SET_TITLE, { title: title });
};
