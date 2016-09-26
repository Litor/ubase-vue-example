import service from './test1.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('test1.title'),
  paperDialog: {
    currentView: 'test1',
    title: Vue.t('test1.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'test1',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('test1.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'test1',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('test1.dialog.title')
  },
  buttonList: [{
    text: Vue.t('test1.buttonList.add'),
    clickEvent: 'test1:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('test1.buttonList.del'),
    clickEvent: 'test1:buttonlist:del'
  }, {
    text: Vue.t('test1.buttonList.import'),
    clickEvent: 'test1:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('test1.simpleSearch.placeholder'),
    text: Vue.t('test1.simpleSearch.text'),
    searchEvent: 'test1:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('test1.tipDialog.del'),
      okEvent: 'test1:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('test1.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('test1.tipPop.del_success')
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
      title: Vue.t('test1.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('test1.table.opt_edit'),
        name: 'test1:table:edit',
        type: 'link'
      }, {
        title: Vue.t('test1.table.opt_detail'),
        name: 'test1:table:detail',
        type: 'link'
      }, {
        title: Vue.t('test1.table.opt_delete'),
        name: 'test1:table:del',
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
