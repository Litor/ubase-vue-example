import service from './term.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('term.title'),
  paperDialog: {
    currentView: 'term',
    title: Vue.t('term.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'termAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('term.propertyDialog.title')
  },
  dialog: {
    currentView: 'term',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('term.dialog.title')
  },
  buttonList: [{
    text: Vue.t('term.buttonList.add'),
    clickEvent: 'term:buttonlist:add',
    icon: 'add',
    primary: true
  }, {
    text: Vue.t('term.buttonList.del'),
    clickEvent: 'term:buttonlist:del'
  }, {
    text: Vue.t('term.buttonList.import'),
    clickEvent: 'term:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('term.simpleSearch.placeholder'),
    text: Vue.t('term.simpleSearch.text'),
    searchEvent: 'term:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('term.tipDialog.del'),
      okEvent: 'term:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('term.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('term.tipPop.del_success')
    }
  },
  selectedRows: [],
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
      title: Vue.t('term.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('term.table.opt_edit'),
        name: 'term:table:edit',
        type: 'link'
      }, {
        title: Vue.t('term.table.opt_detail'),
        name: 'term:table:detail',
        type: 'link'
      }, {
        title: Vue.t('term.table.opt_delete'),
        name: 'term:table:del',
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
