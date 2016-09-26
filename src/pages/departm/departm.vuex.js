import service from './departm.service';
const SET_TITLE = 'SET_TITLE';

// initial state
export const state = {
  title: Vue.t('departm.title'),
  tabs: [
    { title: Vue.t('departm.departCategory'), component: 'departCategory' },
    { title: Vue.t('departm.deptRunType'), component: 'deptRunType' },
    { title: Vue.t('departm.depart'), component: 'depart' }
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
