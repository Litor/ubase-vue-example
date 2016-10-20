import service from './campus.service';

// init state
export const state = {
  willDeleteWids: [],
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
      title: Vue.t('campus.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('campus.table.opt_edit'),
        name: 'campus:table:edit',
        type: 'link'
      }, {
        title: Vue.t('campus.table.opt_delete'),
        name: 'campus:table:del',
        type: 'link'
      }]
    }
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
