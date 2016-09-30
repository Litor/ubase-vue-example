import service from './teachGroup.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('teachGroup.title'),
  paperDialog: {
    currentView: 'teachGroup',
    title: Vue.t('teachGroup.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'teachGroupAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('teachGroup.propertyDialog.title')
  },
  dialog: {
    currentView: 'teachGroup',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('teachGroup.dialog.title')
  },
  buttonList: [{
    text: Vue.t('teachGroup.buttonList.add'),
    clickEvent: 'teachGroup:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('teachGroup.buttonList.del'),
    clickEvent: 'teachGroup:buttonlist:del'
  }, {
    text: Vue.t('teachGroup.buttonList.import'),
    clickEvent: 'teachGroup:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('teachGroup.simpleSearch.placeholder'),
    text: Vue.t('teachGroup.simpleSearch.text'),
    searchEvent: 'teachGroup:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('teachGroup.tipDialog.del'),
      okEvent: 'teachGroup:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('teachGroup.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('teachGroup.tipPop.del_success')
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
      title: Vue.t('teachGroup.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('teachGroup.table.opt_edit'),
        name: 'teachGroup:table:edit',
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
