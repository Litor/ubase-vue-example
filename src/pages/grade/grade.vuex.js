import service from './grade.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('grade.title'),
  paperDialog: {
    currentView: 'grade',
    title: Vue.t('grade.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'grade',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('grade.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    width: '300px',
    height: '250px',
    currentView: 'gradeAddOrEdit',
    title: Vue.t('grade.dialog.title')
  },
  buttonList: [{
    text: Vue.t('grade.buttonList.add'),
    clickEvent: 'grade:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('grade.buttonList.del'),
    clickEvent: 'grade:buttonlist:del'
  }],
  simpleSearch: {
    placeholder: Vue.t('grade.simpleSearch.placeholder'),
    text: Vue.t('grade.simpleSearch.text'),
    searchEvent: 'grade:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('grade.tipDialog.del'),
      okEvent: 'grade:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('grade.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('grade.tipPop.del_success')
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
