import service from './departTab.service';

export const state = {
  tabs: [
    { title: Vue.t('departTab.departCategory'), component: 'departCategory' },
    { title: Vue.t('departTab.deptRunType'), component: 'deptRunType' },
    { title: Vue.t('departTab.depart'), component: 'depart' }
  ]
};

