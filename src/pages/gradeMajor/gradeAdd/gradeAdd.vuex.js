import service from './gradeAdd.service';

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
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('gradeAdd.toast.del'),
      okEvent: 'gradeAdd:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('gradeAdd.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('gradeAdd.tip.del_success')
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

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
