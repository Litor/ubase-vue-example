import service from './postQuery.service';

export const state = {
  emapDatatable: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    method: 'POST',
    params:{type:'-1', status:'-1',postId: '-1', searchContent: ''},
    customColumns: [{
      colField: 'status',
      type: 'tpl',
      width: 50,
      column: {
        cellsRenderer: function(row, column, value, rowData) {
          return value === '1' ? '在职' : '离职';
        }
      }
    }],
    sortable: true,
    columnsReorder: true,
    schema: false
  },
  postLevel:[{id:'3', name:'院系级别'}, {id:'2', name:'专业级别'}, {id:'1', name:'班级级别'}],
  postStatus:[{id:'1', name:'在职'}, {id:'2', name:'离职'}]
};
