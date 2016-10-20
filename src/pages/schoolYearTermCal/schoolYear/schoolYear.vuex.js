import service from './schoolYear.service';

// init state
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
