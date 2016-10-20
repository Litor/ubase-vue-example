import service from './depart.service';

// init state
export const state = {
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
    }, {
      colIndex: 'last',
      type: 'tpl',
      width: 300,
      column: {
        text: Vue.t('depart.grid.opt_title'),
        cellsRenderer: function(row, column, value, rowData) {
          return "<a href='javascript:void(0)' data-name='depart:grid:edit'  class='opt-button' style='padding: 0 5px;' data-row=" + JSON.stringify(rowData) + ">编辑</a>"
        }
      }
    }],
    checkable: true,
    sortable: true,
    columnsReorder: true,
    operations: {
      title: Vue.t('depart.grid.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('depart.grid.opt_edit'),
        name: 'depart:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('depart.grid.opt_detail'),
        name: 'depart:grid:detail',
        type: 'link'
      }, {
        title: Vue.t('depart.grid.opt_delete'),
        name: 'depart:grid:del',
        type: 'link'
      }]
    }
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
