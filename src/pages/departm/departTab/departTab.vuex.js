import service from './departTab.service';

// initial state
export const state = {
  title: Vue.t('departTab.title'),
  tabs: [
    { title: Vue.t('departTab.departCategory'), component: 'departCategory' },
    { title: Vue.t('departTab.deptRunType'), component: 'deptRunType' },
    { title: Vue.t('departTab.depart'), component: 'depart' }
  ]
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
