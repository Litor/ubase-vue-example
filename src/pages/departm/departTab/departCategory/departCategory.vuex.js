import service from './departCategory.service';

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
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('departCategory.toast.del'),
      okEvent: 'departCategory:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('departCategory.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('departCategory.tip.del_success')
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

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
