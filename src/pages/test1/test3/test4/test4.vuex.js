import service from './test4.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('test4.title'),
  paperDialog: {
    currentView: 'test4',
    title: Vue.t('test4.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'test4',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('test4.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'test4',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('test4.dialog.title')
  },
  buttonList: [{
    text: Vue.t('test4.buttonList.add'),
    clickEvent: 'test4:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('test4.buttonList.del'),
    clickEvent: 'test4:buttonlist:del'
  }, {
    text: Vue.t('test4.buttonList.import'),
    clickEvent: 'test4:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('test4.simpleSearch.placeholder'),
    text: Vue.t('test4.simpleSearch.text'),
    searchEvent: 'test4:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('test4.tipDialog.del'),
      okEvent: 'test4:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('test4.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('test4.tipPop.del_success')
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
