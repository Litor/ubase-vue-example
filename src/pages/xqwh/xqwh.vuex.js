import service from './xqwh.service'
const TEST1_STATE = 'TEST1_STATE'

var addedit_state = {
  options: {
    pagePath: service.api.campus_addOrEdit_meta,
    modelName: 'campus_addOrEdit',
    outline: false,
    readonly: false,
    model: 'v'
  },
  outline: false
}

var xqwh_state = {
  paperdialog: 'xqwh1',
  propertydialog: {
    currentView: 'addEdit',
    okEvent: 'propertydialog:ok'
  },
  buttons: [{
    text: '新增',
    click: 'buttonlist:add',
    primary: true
  }, {
    text: '删除',
    click: 'buttonlist:del'
  }],
  search: {
    placeholder: '请输入',
    searchEvent: 'search:top'
  },
  form: {
    pagepath: service.api.campus_addOrEdit_meta,
    modelName: 'campus_addOrEdit'
  },
  options: {
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
        name: 'table:edit',
        type: 'link'
      }, {
        title: '删除',
        name: 'table:del',
        type: 'link'
      }]
    }
  }
}
var defaults = {
  xqwh: xqwh_state,
  addedit: addedit_state
}

// initial state
export const state = defaults

// mutations
export const mutations = {
  [TEST1_STATE](state, data) {
    state.message = data.message
  }
}

// actions
export const setTestState = ({ actions, dispatch }, str) => {
  return dispatch(TEST1_STATE, { message: str })
}
