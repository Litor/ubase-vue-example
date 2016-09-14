import service from './xxdwwh.service'
const SET_TITLE = 'SET_TITLE'

// init state
export const state = {
  title: '校区维护',
  paperDialog: {
    currentView: 'xxdwaddedit',
  },
  propertyDialog: {
    currentView: 'addedit',
    okEvent: 'addedit:save',
    title: '查看详情'
  },
  buttonList: [{
    text: '新增',
    clickEvent: 'xxdwwh:buttonlist:add',
    primary: true
  }, {
    text: '删除',
    clickEvent: 'xxdwwh:buttonlist:del'
  }],
  simpleSearch: {
    placeholder: '请输入',
    searchEvent: 'xxdwwh:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: '您选择需要删除的信息吗？',
      okEvent: 'xxdwwh:tipdialog:del'
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
    template: require('./cardTpl.html'),
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
      colIndex: 'last',
      type: 'tpl',
      width: 300,
      column: {
        text: '操作',
        cellsRenderer: function(row, column, value, rowData) {
          return "<a href='javascript:void(0)' data-name='xxdwwh:table:edit'  class='opt-button' style='padding: 0 5px;' data-row=" + JSON.stringify(rowData) + ">编辑</a>"
        }
      }
    }],
    sortable: true,
    columnsReorder: true
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
