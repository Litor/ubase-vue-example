import service from './dwwh.service'
const TEST_STATE = 'TEST_STATE'

// initial state
export const state = {
  title: '单位维护',
  tabs: [
    { title: '单位类别维护', component: 'dwlbwh' },
    { title: '单位办别维护', component: 'dwbbwh' },
    { title: '学校单位维护', component: 'xxdwwh' }
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
