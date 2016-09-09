import service from './zywh.service'

export default {
  pageopt: {
    paperdialog: {
      currentView: 'addedit',
      title: 'dkd'
    },
    propertydialog: {
      currentView: 'addedit',
      okEvent: 'addedit:save',
      title: '查看详情'
    },
    buttonList: [{
      text: '新增',
      click: 'zywh:buttonlist:add',
      primary: true
    }, {
      text: '删除',
      click: 'zywh:buttonlist:del'
    }, {
      text: '导入',
      click: 'zywh:buttonlist:import'
    }],
    simpleSearch: {
      placeholder: '请输入',
      searchEvent: 'zywh:search:top'
    },
    tipDialog: {
      del: {
        type: 'warning',
        title: '您选择需要删除的信息吗？',
        okEvent: 'zywh:tipdialog:del'
      }
    },
    emapDatatable: {
      pagePath: service.api.campus_getList_meta,
      url: service.api.campus_getList,
      action: 'campus_getList',
      method: 'POST',
      customColumns: [{
        colField: 'status',
        type: 'tpl',
        width: 50,
        column: {
          cellsRenderer: function(row, column, value, rowData) {
            return value ? '有效' : '无效'
          }
        }
      }, {
        colField: 'name',
        type: 'tpl',
        width: 300,
        column: {
          cellsRenderer: function(row, column, value, rowData) {
            return '<a href="#/bzxq" target="_blank" data-action="save-id" data-wid="' + rowData.WID + '">' + value + '</span>'
          }
        }
      }],
      checkable: true,
      sortable: true,
      columnsReorder: true,
      operations: {
        title: '操作',
        width: 100,
        items: [{
          title: '编辑',
          name: 'zywh:table:edit',
          type: 'link'
        }, {
          title: '删除',
          name: 'zywh:table:del',
          type: 'link'
        }]
      }
    }
  }
}
