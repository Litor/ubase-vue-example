import service from './schoolCalendar.service';

// init state
export const state = {
  title: Vue.t('schoolCalendar.title'),
  paperDialog: {
    currentView: 'schoolCalendar'
  },
  propertyDialog: {
    currentView: 'schoolCalendarAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('schoolCalendar.propertyDialog.title')
  },
  dialog: {
    currentView: 'schoolCalendar',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('schoolCalendar.dialog.title')
  },
  buttonList: [{
    text: Vue.t('schoolCalendar.buttonList.add'),
    clickEvent: 'schoolCalendar:buttonlist:add',
    primary: true
  }],
  simpleSearch: {
    placeholder: Vue.t('schoolCalendar.simpleSearch.placeholder'),
    text: Vue.t('schoolCalendar.simpleSearch.text'),
    searchEvent: 'schoolCalendar:search:top'
  },
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('schoolCalendar.toast.del'),
      okEvent: 'schoolCalendar:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('schoolCalendar.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('schoolCalendar.tip.del_success')
    }
  },
  emapCard: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    template: require('./cardTpl.html')
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
