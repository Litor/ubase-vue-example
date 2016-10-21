import service from './term.service';

export const state = {
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
      title: Vue.t('term.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('term.table.opt_edit'),
        name: 'term:table:edit',
        type: 'link'
      }, {
        title: Vue.t('term.table.opt_detail'),
        name: 'term:table:detail',
        type: 'link'
      }, {
        title: Vue.t('term.table.opt_delete'),
        name: 'term:table:del',
        type: 'link'
      }]
    }
  }
};
