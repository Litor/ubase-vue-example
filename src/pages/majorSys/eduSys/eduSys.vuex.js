import service from './eduSys.service';

// init state
export const state = {
  willDeleteWids: [],
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
      title: Vue.t('eduSys.grid.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('eduSys.grid.opt_edit'),
        name: 'eduSys:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('eduSys.grid.opt_delete'),
        name: 'eduSys:grid:del',
        type: 'link'
      }]
    }
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
