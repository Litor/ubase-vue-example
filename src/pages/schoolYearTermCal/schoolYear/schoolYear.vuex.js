import service from './schoolYear.service';

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
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('schoolYear.toast.del'),
      okEvent: 'schoolYear:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('schoolYear.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('schoolYear.tip.del_success')
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

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
