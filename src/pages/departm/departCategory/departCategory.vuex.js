import service from './departCategory.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('departCategory.title'),
  paperDialog: {
    currentView: 'departCategory',
    title: Vue.t('departCategory.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'departCategoryAddOrEdit',
    okEvent: 'departCategoryAddOrEdit:save',
    title: Vue.t('departCategory.propertyDialog.title')
  },
  dialog: {
    currentView: 'departCategory',
    title: Vue.t('departCategory.dialog.title')
  },
  buttonList: [{
    text: Vue.t('departCategory.buttonList.add'),
    clickEvent: 'departCategory:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('departCategory.buttonList.del'),
    clickEvent: 'departCategory:buttonlist:del'
  }],
  simpleSearch: {
    placeholder: Vue.t('departCategory.simpleSearch.placeholder'),
    text: Vue.t('departCategory.simpleSearch.text'),
    searchEvent: 'departCategory:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('departCategory.tipDialog.del'),
      okEvent: 'departCategory:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('departCategory.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('departCategory.tipPop.del_success')
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
      title: Vue.t('departCategory.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('departCategory.table.opt_edit'),
        name: 'departCategory:table:edit',
        type: 'link'
      }, {
        title: Vue.t('departCategory.table.opt_delete'),
        name: 'departCategory:table:del',
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
