import service from './deptRunType.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('deptRunType.title'),
  paperDialog: {
    currentView: 'deptRunType',
    title: Vue.t('deptRunType.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'deptRunTypeAddOrEdit',
    okEvent: 'deptRunTypeAddOrEdit:save',
    title: Vue.t('deptRunType.propertyDialog.title')
  },
  dialog: {
    currentView: 'deptRunType',
    title: Vue.t('deptRunType.dialog.title')
  },
  buttonList: [{
    text: Vue.t('deptRunType.buttonList.add'),
    clickEvent: 'deptRunType:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('deptRunType.buttonList.del'),
    clickEvent: 'deptRunType:buttonlist:del'
  }],
  simpleSearch: {
    placeholder: Vue.t('deptRunType.simpleSearch.placeholder'),
    text: Vue.t('deptRunType.simpleSearch.text'),
    searchEvent: 'deptRunType:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('deptRunType.tipDialog.del'),
      okEvent: 'deptRunType:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('deptRunType.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('deptRunType.tipPop.del_success')
    }
  },
  emapDatatable: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
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
      title: Vue.t('deptRunType.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('deptRunType.table.opt_edit'),
        name: 'deptRunType:table:edit',
        type: 'link'
      }, {
        title: Vue.t('deptRunType.table.opt_delete'),
        name: 'deptRunType:table:del',
        type: 'link'
      }]
    }
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
