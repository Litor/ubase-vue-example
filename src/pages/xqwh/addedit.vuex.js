import service from './service'
const TEST1_STATE = 'TEST1_STATE'

var defaults = {
  options: {
    pagePath: service.api.campus_addOrEdit_meta,
    modelName: 'campus_addOrEdit',
    outline: false,
    readonly: false,
    model: 'v'
  },
  outline: false
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
