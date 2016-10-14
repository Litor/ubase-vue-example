import service from './majorSys.service';

// initial state
export const state = {
  title: Vue.t('majorSys.title'),
  tabs: [
    { title: Vue.t('majorSys.major'), component: 'major' },
    { title: Vue.t('majorSys.eduSys'), component: 'eduSys' }
  ]
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
