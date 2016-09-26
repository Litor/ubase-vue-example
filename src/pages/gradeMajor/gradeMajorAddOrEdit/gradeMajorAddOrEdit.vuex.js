import service from './gradeMajorAddOrEdit.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('gradeMajorAddOrEdit.title'),
  paperDialog: {
    currentView: 'gradeMajorAddOrEdit',
    title: Vue.t('gradeMajorAddOrEdit.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: 'gradeMajorAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('gradeMajorAddOrEdit.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: 'gradeMajorAddOrEdit',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('gradeMajorAddOrEdit.dialog.title')
  },
  buttonList: [{
    text: Vue.t('gradeMajorAddOrEdit.buttonList.add'),
    clickEvent: 'gradeMajorAddOrEdit:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('gradeMajorAddOrEdit.buttonList.del'),
    clickEvent: 'gradeMajorAddOrEdit:buttonlist:del'
  }, {
    text: Vue.t('gradeMajorAddOrEdit.buttonList.import'),
    clickEvent: 'gradeMajorAddOrEdit:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('gradeMajorAddOrEdit.simpleSearch.placeholder'),
    text: Vue.t('gradeMajorAddOrEdit.simpleSearch.text'),
    searchEvent: 'gradeMajorAddOrEdit:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('gradeMajorAddOrEdit.tipDialog.del'),
      okEvent: 'gradeMajorAddOrEdit:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('gradeMajorAddOrEdit.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('gradeMajorAddOrEdit.tipPop.del_success')
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
      title: Vue.t('gradeMajorAddOrEdit.grid.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('gradeMajorAddOrEdit.grid.opt_edit'),
        name: 'gradeMajorAddOrEdit:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('gradeMajorAddOrEdit.grid.opt_detail'),
        name: 'gradeMajorAddOrEdit:grid:detail',
        type: 'link'
      }, {
        title: Vue.t('gradeMajorAddOrEdit.grid.opt_delete'),
        name: 'gradeMajorAddOrEdit:grid:del',
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