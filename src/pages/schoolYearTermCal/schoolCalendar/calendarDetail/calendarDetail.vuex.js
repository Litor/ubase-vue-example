import service from './calendarDetail.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('calendarDetail.title'),
  paperDialog: {
    currentView: 'calendarDetail',
    title: Vue.t('calendarDetail.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'calendarDetail',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('calendarDetail.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'calendarDetail',
    title: Vue.t('calendarDetail.dialog.title')
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('calendarDetail.tipDialog.del'),
      okEvent: 'calendarDetail:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('calendarDetail.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('calendarDetail.tipPop.del_success')
    }
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
