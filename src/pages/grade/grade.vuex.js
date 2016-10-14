import service from './grade.service';

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
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('grade.toast.del'),
      okEvent: 'grade:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('grade.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('grade.tip.del_success')
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
