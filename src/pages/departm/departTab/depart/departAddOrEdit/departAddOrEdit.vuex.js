import service from './departAddOrEdit.service';

// init state
export const state = {
  title: Vue.t('departAddOrEdit.title'),
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
      content: Vue.t('departAddOrEdit.tip.save_success')
    }
  },
  outline: false
};

// actions
export const setDepartFormReadOnly = ({ actions, dispatch }, readonly) => {
  state.options.readonly = readonly;
};
