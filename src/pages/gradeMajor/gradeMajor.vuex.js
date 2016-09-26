import service from './gradeMajor.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('gradeMajor.title'),
  paperDialog: {
    currentView: 'gradeMajorAddOrEdit',
    title: Vue.t('gradeMajor.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'gradeMajor',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('gradeMajor.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'gradeMajor',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('gradeMajor.dialog.title')
  },
  buttonList: [{
    text: Vue.t('gradeMajor.buttonList.add'),
    clickEvent: 'gradeMajor:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('gradeMajor.buttonList.del'),
    clickEvent: 'gradeMajor:buttonlist:del'
  }, {
    text: Vue.t('gradeMajor.buttonList.import'),
    clickEvent: 'gradeMajor:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('gradeMajor.simpleSearch.placeholder'),
    text: Vue.t('gradeMajor.simpleSearch.text'),
    searchEvent: 'gradeMajor:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('gradeMajor.tipDialog.del'),
      okEvent: 'gradeMajor:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('gradeMajor.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('gradeMajor.tipPop.del_success')
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
