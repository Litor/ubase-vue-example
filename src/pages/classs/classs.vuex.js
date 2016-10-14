import service from './classs.service';

// init state
export const state = {
  title: Vue.t('classs.title'),
  paperDialog: {
    currentView: 'classAddOrEdit',
    title: Vue.t('classs.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'classDetail',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('classs.propertyDialog.title'),
    footerShow: true
  },
  dialog: {
    currentView: 'classs',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('classs.dialog.title')
  },
  buttonList: [{
    text: Vue.t('classs.buttonList.add'),
    clickEvent: 'classs:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('classs.buttonList.del'),
    clickEvent: 'classs:buttonlist:del'
  }, {
    text: Vue.t('classs.buttonList.import'),
    clickEvent: 'classs:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('classs.simpleSearch.placeholder'),
    text: Vue.t('classs.simpleSearch.text'),
    searchEvent: 'classs:search:top'
  },
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('classs.toast.del'),
      okEvent: 'classs:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('classs.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('classs.tip.del_success')
    }
  },
  selectedRows: [],
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
      title: Vue.t('classs.grid.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('classs.grid.opt_edit'),
        name: 'classs:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('classs.grid.opt_detail'),
        name: 'classs:grid:detail',
        type: 'link'
      }, {
        title: Vue.t('classs.grid.opt_delete'),
        name: 'classs:grid:del',
        type: 'link'
      }]
    }
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
