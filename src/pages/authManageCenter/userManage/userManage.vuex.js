import service from './userManage.service';

export const state = {
  statusChangeID:'',
  relieveMobieId:'',
  dicts: {},
  resetPassType: '',
  selectedRows: [],
  emapDatatable: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    method: 'POST',
    customColumns: [{
      colField: 'mobile',
      type: 'tpl',
      width: 50,
      column: {
        cellsRenderer: function (row, column, value, rowData) {
          return '<div class="cus-table-edit cus-table-mobile" data-wid="'+rowData.wid+'">' + value + '<i class="iconfont icon-lockopen"></i></div>'
        }
      }
    },{
      colField: 'status_desc',
      type: 'tpl',
      width: 50,
      column: {
        cellsRenderer: function (row, column, value, rowData) {
          return '<div class="cus-table-edit cus-table-status" data-wid="'+rowData.wid+'">' + value + '<i class="iconfont icon-edit"></i></div>'
        }
      }
    }],
    readyName:'userManage:table:ready',
    checkable: true,
    sortable: true,
    columnsReorder: true
  }
};
