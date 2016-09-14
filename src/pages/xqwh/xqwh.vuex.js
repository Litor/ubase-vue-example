import service from './xqwh.service'
const SET_TITLE = 'SET_TITLE'

// init state
export const state = {
  title: '校区维护',
  propertyDialog: {
    currentView: 'xqwhaddedit',
    okEvent: 'xqwhaddedit:save',
    title: '查看详情'
  },
  buttonList: [{
    text: '新增',
    clickEvent: 'xqwh:buttonlist:add',
    primary: true
  }, {
    text: '删除',
    clickEvent: 'xqwh:buttonlist:del'
  }],
  simpleSearch: {
    placeholder: '请输入',
    searchEvent: 'xqwh:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: '您选择需要删除的信息吗？',
      okEvent: 'xqwh:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: '请选择需要删除的信息？'
    },
    del_success: {
      state: 'success',
      content: '删除成功！'
    }
  },
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
        name: 'xqwh:table:edit',
        type: 'link'
      }, {
        title: '删除',
        name: 'xqwh:table:del',
        type: 'link'
      }]
    }
  }
}

// mutations
export const mutations = {
  [SET_TITLE](state, data) {
    state.title = data.title
  }
}

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  return dispatch(SET_TITLE, { title: title })
}
