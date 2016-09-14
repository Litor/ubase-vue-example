import service from './zyxzwh.service'
const TEST_STATE = 'TEST_STATE'

// initial state
export const state = {
  title: '专业学制维护',
  tabs: [
    { title: '专业', component: 'zywh' },
    { title: '学制', component: 'xzwh' }
  ]
}

// mutations
export const mutations = {
  [TEST_STATE](state, data) {
    state.title = data.title
  }
}

// actions
export const setFormPagePathAndModelName = ({ actions, dispatch }, obj) => {
  return dispatch(TEST_STATE, {})
}
