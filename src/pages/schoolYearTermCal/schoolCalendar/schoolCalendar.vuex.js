import service from './schoolCalendar.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('schoolCalendar.title'),
  paperDialog: {
    currentView: 'schoolCalendar',
    title: Vue.t('schoolCalendar.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'schoolCalendarAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('schoolCalendar.propertyDialog.title'),
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
  }, {
    text: Vue.t('schoolCalendar.buttonList.del'),
    clickEvent: 'schoolCalendar:buttonlist:del'
  }, {
    text: Vue.t('schoolCalendar.buttonList.import'),
    clickEvent: 'schoolCalendar:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('schoolCalendar.simpleSearch.placeholder'),
    text: Vue.t('schoolCalendar.simpleSearch.text'),
    searchEvent: 'schoolCalendar:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('schoolCalendar.tipDialog.del'),
      okEvent: 'schoolCalendar:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('schoolCalendar.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('schoolCalendar.tipPop.del_success')
    }
  },
  emapCard: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    template: require('./cardTpl.html')
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
