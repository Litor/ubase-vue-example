import service from './xzaddedit.service'
const SET_TITLE = 'SET_TITLE'

// init state
export const state = {
  title: '测试纸质弹框',
  options: {
    pagePath: service.api.addOrEdit_meta,
    modelName: service.api.addOrEdit_action,
    outline: false,
    readonly: false,
    model: 'v'
  },
  tipPop: {
    save_success: {
      state: 'success',
      content: '保存成功！'
    }
  },
  outline: false
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
