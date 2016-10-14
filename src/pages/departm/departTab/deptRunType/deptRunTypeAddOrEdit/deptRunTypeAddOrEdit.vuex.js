import service from './deptRunTypeAddOrEdit.service';
// init state
export const state = {
  title: Vue.t('deptRunTypeAddOrEdit.title'),
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
      content: Vue.t('deptRunTypeAddOrEdit.tip.save_success')
    }
  },
  outline: false
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
