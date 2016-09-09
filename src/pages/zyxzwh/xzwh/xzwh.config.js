import service from './xzwh.service'

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
      clickEvent: 'xzwh:buttonlist:add',
      primary: true
    }, {
      text: '删除',
      clickEvent: 'xzwh:buttonlist:del'
    }],
    simpleSearch: {
      placeholder: '请输入',
      searchEvent: 'xzwh:search:top'
    },
    tipDialog: {
      del: {
        type: 'warning',
        title: '您选择需要删除的信息吗？',
        okEvent: 'xzwh:tipdialog:del'
      }
    },
    emapDatatable: {
      pagePath: service.api.campus_getList_meta,
      template: require('./cardTpl.html'),
      sortable: true,
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
      columnsReorder: true,
    }
  }
}
