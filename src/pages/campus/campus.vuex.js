import service from './campus.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('campus.title'),
  paperDialog: {
    currentView: 'campus',
    title: Vue.t('campus.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'campusaddoredit',
    okEvent: 'campusaddoredit:save',
    title: Vue.t('campus.propertyDialog.add_title')
  },
  dialog: {
    currentView: 'campus',
    title: Vue.t('campus.dialog.title')
  },
  buttonList: [{
    text: Vue.t('campus.buttonList.add'),
    clickEvent: 'campus:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('campus.buttonList.del'),
    clickEvent: 'campus:buttonlist:del'
  }],
  simpleSearch: {
    placeholder: Vue.t('campus.simpleSearch.placeholder'),
    text: Vue.t('campus.simpleSearch.text'),
    searchEvent: 'campus:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('campus.tipDialog.del'),
      okEvent: 'campus:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('campus.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('campus.tipPop.del_success')
    }
  },
  willDeleteWids: [],
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
      title: Vue.t('campus.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('campus.table.opt_edit'),
        name: 'campus:table:edit',
        type: 'link'
      }, {
        title: Vue.t('campus.table.opt_delete'),
        name: 'campus:table:del',
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
