import service from './eduSys.service';

// init state
export const state = {
  title: Vue.t('eduSys.title'),
  paperDialog: {
    currentView: 'eduSys',
    title: Vue.t('eduSys.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'eduSysAddOrEdit',
    okEvent: 'eduSysAddOrEdit:save',
    title: Vue.t('eduSys.propertyDialog.title')
  },
  dialog: {
    currentView: 'eduSys',
    title: Vue.t('eduSys.dialog.title')
  },
  buttonList: [{
    text: Vue.t('eduSys.buttonList.add'),
    clickEvent: 'eduSys:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('eduSys.buttonList.del'),
    clickEvent: 'eduSys:buttonlist:del'
  }],
  simpleSearch: {
    placeholder: Vue.t('eduSys.simpleSearch.placeholder'),
    text: Vue.t('eduSys.simpleSearch.text'),
    searchEvent: 'eduSys:search:top'
  },
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('eduSys.toast.del'),
      okEvent: 'eduSys:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('eduSys.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('eduSys.tip.del_success')
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
    columnsReorder: true,
    operations: {
      title: Vue.t('eduSys.grid.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('eduSys.grid.opt_edit'),
        name: 'eduSys:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('eduSys.grid.opt_delete'),
        name: 'eduSys:grid:del',
        type: 'link'
      }]
    }
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
