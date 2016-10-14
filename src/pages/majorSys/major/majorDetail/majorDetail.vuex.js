import service from './majorDetail.service';

// init state
export const state = {
  title: Vue.t('majorDetail.title'),
  options: {
    pagePath: service.api.addOrEdit_meta,
    modelName: service.api.addOrEdit_action,
    outline: false,
    readonly: true,
    model: 'v'
  },
  tip: {
    save_success: {
      state: 'success',
      content: Vue.t('majorDetail.tip.save_success')
    }
  },
  outline: false
};

// actions
export const setFormReadOnly = ({ actions, dispatch }, readonly) => {
  state.options.readonly = readonly;
};
