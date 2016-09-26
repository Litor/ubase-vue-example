import service from './test2.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('test2.title'),
  paperDialog: {
    currentView: 'test2',
    title: Vue.t('test2.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'test2',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('test2.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'test2',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('test2.dialog.title')
  },
  buttonList: [{
    text: Vue.t('test2.buttonList.add'),
    clickEvent: 'test2:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('test2.buttonList.del'),
    clickEvent: 'test2:buttonlist:del'
  }, {
    text: Vue.t('test2.buttonList.import'),
    clickEvent: 'test2:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('test2.simpleSearch.placeholder'),
    text: Vue.t('test2.simpleSearch.text'),
    searchEvent: 'test2:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('test2.tipDialog.del'),
      okEvent: 'test2:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('test2.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('test2.tipPop.del_success')
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
      title: Vue.t('test2.grid.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('test2.grid.opt_edit'),
        name: 'test2:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('test2.grid.opt_detail'),
        name: 'test2:grid:detail',
        type: 'link'
      }, {
        title: Vue.t('test2.grid.opt_delete'),
        name: 'test2:grid:del',
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
