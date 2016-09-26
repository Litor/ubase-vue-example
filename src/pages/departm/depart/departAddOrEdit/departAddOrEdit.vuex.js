import service from './departAddOrEdit.service';
const DEPART_READYONLY = 'DEPART_READYONLY';

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
  tipPop: {
    save_success: {
      state: 'success',
      content: Vue.t('departAddOrEdit.tipPop.save_success')
    }
  },
  outline: false
};

// mutations
export const mutations = {
  [DEPART_READYONLY](state, data) {
    state.options.readonly = data.readonly;
  }
};

// actions
export const setDepartFormReadOnly = ({ actions, dispatch }, readonly) => {
  return dispatch(DEPART_READYONLY, { readonly: readonly });
};
