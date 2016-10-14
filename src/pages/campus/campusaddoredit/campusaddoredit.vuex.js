import service from './campusaddoredit.service';

// init state
export const state = {
  title: Vue.t('campusaddoredit.title'),
  options: {
    pagePath: service.api.addOrEdit_meta,
    modelName: service.api.addOrEdit_action,
    outline: false,
    readonly: false,
    model: 'v'
  },
  tip: {
    save_success: {
      state: 'success',
      content: Vue.t('campusaddoredit.tip.save_success')
    }
  },
  outline: false
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
