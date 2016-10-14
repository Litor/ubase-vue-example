import service from './teachGroup.service';

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
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('teachGroup.toast.del'),
      okEvent: 'teachGroup:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('teachGroup.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('teachGroup.tip.del_success')
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

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
