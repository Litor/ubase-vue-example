import service from '../../postManage.service';

export const state = {
  emapDatatable: {
    pagePath: service.api.getPostDetailList_meta,
    url: service.api.getPostDetailList,
    action: service.api.getPostDetailList_action,
    method: 'POST',
    params: {status: '-1', postId: '', searchContent: '', unitId:'', level:''},
    customColumns: [{
      colField: 'status',
      type: 'tpl',
      width: 50,
      column: {
        cellsRenderer: function (row, column, value, rowData) {
          return value ? '在职' : '离职';
        }
      }
    }],
    checkable: false,
    sortable: true,
    columnsReorder: true,
    schema: false
  },
  keyword: '',
  status: [{id: '1', name: '在职'}, {id: '2', name: '离职'}]
};
