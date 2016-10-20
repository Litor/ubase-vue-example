import service from './deptRunTypeAddOrEdit.service';

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

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
