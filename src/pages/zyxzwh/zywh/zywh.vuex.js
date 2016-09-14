import service from './zywh.service'
const SET_TITLE = 'SET_TITLE'

// init state
export const state = {
  paperDialog: {
    currentView: 'zyaddedit',
    title: '编辑'
  },
  propertyDialog: {
    currentView: 'zydetail',
    okEvent: 'addedit:save',
    title: '查看详情',
    footerShow: false
  },
  dialog: {
    currentView: 'zyaddedit',
    title: '测试对话框'
  },
  buttonList: [{
    text: '新增',
    clickEvent: 'zywh:buttonlist:add',
    primary: true
  }, {
    text: '删除',
    clickEvent: 'zywh:buttonlist:del'
  }, {
    text: '导入',
    clickEvent: 'zywh:buttonlist:import'
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
    }],
    checkable: true,
    sortable: true,
    columnsReorder: true,
    operations: {
      title: '操作',
      width: 150,
      items: [{
        title: '编辑',
        name: 'zywh:table:edit',
        type: 'link'
      }, {
        title: '详情',
        name: 'zywh:table:detail',
        type: 'link'
      }, {
        title: '删除',
        name: 'zywh:table:del',
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
