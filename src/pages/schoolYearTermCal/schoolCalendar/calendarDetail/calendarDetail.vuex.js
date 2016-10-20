import service from './calendarDetail.service';

// init state
export const state = {
  year: 2016,
  month: 9,

  calendarProfile: {},
  calendarDetail: {}
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};

export const getCalendarProfile = ({ actions, dispatch }, wid) => {
  return service.getByWid(wid).then((res) => {
    state.calendarProfile = res || {};
  });
};

export const getCalendarDetail = ({ actions, dispatch }, wid) => {
  service.getDateEventByCalendarWid(wid).then((res) => {
    state.calendarDetail = res || {};
  });
};
