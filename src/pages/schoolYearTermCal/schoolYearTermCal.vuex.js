import service from './schoolYearTermCal.service';
const SET_TITLE = 'SET_TITLE';

// initial state
export const state = {
  title: Vue.t('schoolYearTermCal.title'),
  tabs: [
    { title: Vue.t('schoolYearTermCal.schoolYear'), component: 'schoolYear' },
    { title: Vue.t('schoolYearTermCal.term'), component: 'term' },
    { title: Vue.t('schoolYearTermCal.schoolCalendar'), component: 'schoolCalendar' }
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
