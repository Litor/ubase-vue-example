import service from './gradeMajor.service';

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
    width: '800px',
    height: '550px',
    currentView: 'gradeAdd',
    okEvent: 'gradeAdd:save',
    title: Vue.t('gradeMajor.dialog.title')
  },
  buttonList: [{
    text: Vue.t('gradeMajor.buttonList.addGrade'),
    clickEvent: 'gradeMajor:buttonlist:addGrade',
    primary: true
  }],
  simpleSearch: {
    placeholder: Vue.t('gradeMajor.simpleSearch.placeholder'),
    text: Vue.t('gradeMajor.simpleSearch.text'),
    searchEvent: 'gradeMajor:search:top'
  },
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('gradeMajor.toast.del'),
      okEvent: 'gradeMajor:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('gradeMajor.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('gradeMajor.tip.del_success')
    }
  },
  emapCard: {
    pagePath: service.api.getGradeMajorNumList_meta,
    url: service.api.getGradeMajorNumList,
    action: service.api.getGradeMajorNumList_action,
    template: require('./cardTpl.html')
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
