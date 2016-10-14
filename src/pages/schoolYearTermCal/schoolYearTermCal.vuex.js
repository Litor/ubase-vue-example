import service from './schoolYearTermCal.service';

// initial state
export const state = {
  title: Vue.t('schoolYearTermCal.title'),
  tabs: [
    { title: Vue.t('schoolYearTermCal.schoolYear'), component: 'schoolYear' },
    { title: Vue.t('schoolYearTermCal.term'), component: 'term' },
    { title: Vue.t('schoolYearTermCal.schoolCalendar'), component: 'schoolCalendar' }
  ]
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
