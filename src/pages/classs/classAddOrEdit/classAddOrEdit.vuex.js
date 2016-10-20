import service from './classAddOrEdit.service';
const FORM_READYONLY = 'FORM_READYONLY';

// init state
export const state = {
  options: {
    pagePath: service.api.addOrEdit_meta,
    modelName: service.api.addOrEdit_action,
    outline: false,
    readonly: false,
    model: 'v'
  },
  outline: false
};

// mutations
export const mutations = {
  [FORM_READYONLY](state, data) {
    state.options.readonly = data.readonly;
  }
};

// actions
export const setFormReadOnly = ({ actions, dispatch }, readonly) => {
  return dispatch(FORM_READYONLY, { readonly: readonly });
};
