const TEST1_GLOBAL_STATE = 'TEST1_GLOBAL_STATE'

var defaults = {
  message: 'global vuex success',
}

// initial state
export const state = defaults

// mutations
export const mutations = {
  [TEST1_GLOBAL_STATE](state, data) {
    state.message = data.message
  }
}

// actions
export const setTestState = ({ actions, dispatch }, str)=> {
  return dispatch(TEST1_GLOBAL_STATE, { message: str })
}
