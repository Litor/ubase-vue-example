import service from './majorDirection.service';

// init state
export const state = {
  title: Vue.t('majorDirection.title'),
  paperDialog: {
    currentView: 'majorDirection',
    title: Vue.t('majorDirection.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'majorDirection',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('majorDirection.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'majorDirectionAddOrEdit',
    title: Vue.t('majorDirection.dialog.title'),
    okEvent: 'majorDirectionAddOrEdit:save',
    width: '400px',
    height: '350px'
  },
  buttonList: [{
    text: Vue.t('majorDirection.buttonList.add'),
    clickEvent: 'majorDirection:buttonlist:add',
    primary: true
  }],
  simpleSearch: {
    placeholder: Vue.t('majorDirection.simpleSearch.placeholder'),
    text: Vue.t('majorDirection.simpleSearch.text'),
    searchEvent: 'majorDirection:search:top'
  },
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('majorDirection.toast.del'),
      okEvent: 'majorDirection:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('majorDirection.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('majorDirection.tip.del_success')
    }
  },
  emapCard: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    pageable: false,
    template: require('./cardTpl.html')
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
