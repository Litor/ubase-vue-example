import service from './major.service';
// init state
export const state = {
  title: Vue.t('major.title'),
  paperDialog: {
    currentView: 'majorAddOrEdit',
    title: Vue.t('major.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'majorDetail',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('major.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'major',
    title: Vue.t('major.dialog.title')
  },
  buttonList: [{
    text: Vue.t('major.buttonList.add'),
    clickEvent: 'major:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('major.buttonList.del'),
    clickEvent: 'major:buttonlist:del'
  }, {
    text: Vue.t('major.buttonList.import'),
    clickEvent: 'major:buttonlist:import'
  }, {
    text: Vue.t('major.buttonList.export'),
    clickEvent: 'major:buttonlist:export'
  }],
  simpleSearch: {
    placeholder: Vue.t('major.simpleSearch.placeholder'),
    text: Vue.t('major.simpleSearch.text'),
    searchEvent: 'major:search:top'
  },
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('major.toast.del'),
      okEvent: 'major:tipdialog:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('major.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('major.tip.del_success')
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
      title: Vue.t('major.grid.opt_title'),
      width: 230,
      items: [{
        title: Vue.t('major.grid.opt_edit'),
        name: 'major:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('major.grid.opt_detail'),
        name: 'major:grid:detail',
        type: 'link'
      }, {
        title: Vue.t('major.grid.opt_direction'),
        name: 'major:grid:direction',
        type: 'link'
      }]
    }
  }
};


// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
