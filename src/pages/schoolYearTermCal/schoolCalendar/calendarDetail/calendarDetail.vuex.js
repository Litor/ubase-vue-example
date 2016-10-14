import service from './calendarDetail.service';

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
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('calendarDetail.toast.del'),
      okEvent: 'calendarDetail:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('calendarDetail.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('calendarDetail.tip.del_success')
    }
  },

  year: 2016,
  month: 9,

  calendarProfile: {},
  calendarDetail: {}
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};

export const getCalendarProfile = ({ actions, dispatch }, wid) => {
  return service.getByWid(wid).then((res) => {
    state.calendarProfile = res || {};
  });
};

export const getCalendarDetail = ({ actions, dispatch }, wid) => {
  service.getDateEventByCalendarWid(wid).then((res) => {
    state.calendarDetail = res || {};
  });
};
