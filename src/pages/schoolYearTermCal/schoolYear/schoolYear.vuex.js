import service from './schoolYear.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('schoolYear.title'),
  paperDialog: {
    currentView: 'schoolYear',
    title: Vue.t('schoolYear.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'schoolYearAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('schoolYear.propertyDialog.title'),
  },
  dialog: {
    currentView: 'schoolYear',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('schoolYear.dialog.title')
  },
  buttonList: [{
    text: Vue.t('schoolYear.buttonList.add'),
    clickEvent: 'schoolYear:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('schoolYear.buttonList.del'),
    clickEvent: 'schoolYear:buttonlist:del'
  }, {
    text: Vue.t('schoolYear.buttonList.import'),
    clickEvent: 'schoolYear:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('schoolYear.simpleSearch.placeholder'),
    text: Vue.t('schoolYear.simpleSearch.text'),
    searchEvent: 'schoolYear:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('schoolYear.tipDialog.del'),
      okEvent: 'schoolYear:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('schoolYear.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('schoolYear.tipPop.del_success')
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
      title: Vue.t('schoolYear.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('schoolYear.table.opt_edit'),
        name: 'schoolYear:table:edit',
        type: 'link'
      }, {
        title: Vue.t('schoolYear.table.opt_detail'),
        name: 'schoolYear:table:detail',
        type: 'link'
      }, {
        title: Vue.t('schoolYear.table.opt_delete'),
        name: 'schoolYear:table:del',
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
