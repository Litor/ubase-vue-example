import service from './departCategory.service';

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
      title: Vue.t('departCategory.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('departCategory.table.opt_edit'),
        name: 'departCategory:table:edit',
        type: 'link'
      }, {
        title: Vue.t('departCategory.table.opt_delete'),
        name: 'departCategory:table:del',
        type: 'link'
      }]
    }
  }
};
