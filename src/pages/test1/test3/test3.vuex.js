import service from './test3.service';
const SET_TITLE = 'SET_TITLE';

// initial state
export const state = {
  title: Vue.t('test3.title'),
  tabs: [
    { title: Vue.t('test3.tab1'), component: 'test4' },
    { title: Vue.t('test3.tab2'), component: 'test5' }
  ]
};

// mutations
export const mutations = {
  [SET_TITLE](state, data) {
    state.title = data.title;
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  return dispatch(SET_TITLE, { title: title });
};
