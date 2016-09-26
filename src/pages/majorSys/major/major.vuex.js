import service from './major.service';
const SET_TITLE = 'SET_TITLE';

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
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('major.tipDialog.del'),
      okEvent: 'major:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('major.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('major.tipPop.del_success')
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
