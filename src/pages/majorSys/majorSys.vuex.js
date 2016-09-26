import service from './majorSys.service';
const SET_TITLE = 'SET_TITLE';

// initial state
export const state = {
  title: Vue.t('majorSys.title'),
  tabs: [
    { title: Vue.t('majorSys.major'), component: 'major' },
    { title: Vue.t('majorSys.eduSys'), component: 'eduSys' }
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
