import service from './schoolYearTermCal.service';

export const state = {
  tabs: [
    { title: Vue.t('schoolYearTermCal.schoolYear'), component: 'schoolYear' },
    { title: Vue.t('schoolYearTermCal.term'), component: 'term' },
    { title: Vue.t('schoolYearTermCal.schoolCalendar'), component: 'schoolCalendar' }
  ]
};
