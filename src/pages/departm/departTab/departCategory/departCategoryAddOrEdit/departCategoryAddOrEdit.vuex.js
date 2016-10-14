import service from './departCategoryAddOrEdit.service';

// init state
export const state = {
  title: Vue.t('departCategoryAddOrEdit.title'),
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
      content: Vue.t('departCategoryAddOrEdit.tip.save_success')
    }
  },
  outline: false
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
