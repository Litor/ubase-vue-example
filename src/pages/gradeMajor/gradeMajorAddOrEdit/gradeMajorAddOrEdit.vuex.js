import service from './gradeMajorAddOrEdit.service';

// init state
export const state = {
  title: Vue.t('gradeMajorAddOrEdit.title'),
  paperDialog: {
    currentView: 'gradeMajorAddOrEdit',
    title: Vue.t('gradeMajorAddOrEdit.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'gradeMajorAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('gradeMajorAddOrEdit.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'gradeMajorAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('gradeMajorAddOrEdit.dialog.title')
  },
  buttonList: [{
    text: Vue.t('gradeMajorAddOrEdit.buttonList.add'),
    clickEvent: 'gradeMajorAddOrEdit:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('gradeMajorAddOrEdit.buttonList.del'),
    clickEvent: 'gradeMajorAddOrEdit:buttonlist:del'
  }, {
    text: Vue.t('gradeMajorAddOrEdit.buttonList.import'),
    clickEvent: 'gradeMajorAddOrEdit:buttonlist:import'
  }, {
    text: Vue.t('gradeMajorAddOrEdit.buttonList.export'),
    clickEvent: 'gradeMajorAddOrEdit:buttonlist:export'
  }],
  simpleSearch: {
    placeholder: Vue.t('gradeMajorAddOrEdit.simpleSearch.placeholder'),
    text: Vue.t('gradeMajorAddOrEdit.simpleSearch.text'),
    searchEvent: 'gradeMajorAddOrEdit:search:top'
  },
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('gradeMajorAddOrEdit.toast.del'),
      okEvent: 'gradeMajorAddOrEdit:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('gradeMajorAddOrEdit.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('gradeMajorAddOrEdit.tip.del_success')
    }
  },
  emapGrid: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    template: require('./cardTpl.html'),
    method: 'POST',
    customColumns: [{
      colField: 'status',
      type: 'tpl',
      width: 50,
      column: {
        cellsRenderer: function(row, column, value, rowData) {
          return value ? '有效' : '无效';
        }
      }
    }],
    checkable: true,
    sortable: true,
    columnsReorder: true
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
