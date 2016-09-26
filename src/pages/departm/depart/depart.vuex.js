import service from './depart.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('depart.title'),
  paperDialog: {
    currentView: 'departAddOrEdit',
    title: Vue.t('depart.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'departDetail',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('depart.propertyDialog.title')
  },
  dialog: {
    currentView: 'depart',
    title: Vue.t('depart.dialog.title')
  },
  buttonList: [{
    text: Vue.t('depart.buttonList.add'),
    clickEvent: 'depart:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('depart.buttonList.del'),
    clickEvent: 'depart:buttonlist:del'
  }, {
    text: Vue.t('depart.buttonList.import'),
    clickEvent: 'depart:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('depart.simpleSearch.placeholder'),
    text: Vue.t('depart.simpleSearch.text'),
    searchEvent: 'depart:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('depart.tipDialog.del'),
      okEvent: 'depart:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('depart.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('depart.tipPop.del_success')
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
    }, {
      colIndex: 'last',
      type: 'tpl',
      width: 300,
      column: {
        text: Vue.t('depart.grid.opt_title'),
        cellsRenderer: function(row, column, value, rowData) {
          return "<a href='javascript:void(0)' data-name='depart:grid:edit'  class='opt-button' style='padding: 0 5px;' data-row=" + JSON.stringify(rowData) + ">编辑</a>"
        }
      }
    }],
    checkable: true,
    sortable: true,
    columnsReorder: true,
    operations: {
      title: Vue.t('depart.grid.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('depart.grid.opt_edit'),
        name: 'depart:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('depart.grid.opt_detail'),
        name: 'depart:grid:detail',
        type: 'link'
      }, {
        title: Vue.t('depart.grid.opt_delete'),
        name: 'depart:grid:del',
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
