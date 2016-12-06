import service from '../../postManage.service'

export const state = {
  emapDatatable: {
    pagePath: service.api.getPostDetailList_meta,
    url: service.api.getPostDetailList,
    action: service.api.getPostDetailList_action,
    method: 'POST',
    params: {status: '-2', postId: '', searchContent: ''},
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
    checkable: true,
    sortable: true,
    schema: false
  },
  count: 0,
  leavedStaff:[]
};
