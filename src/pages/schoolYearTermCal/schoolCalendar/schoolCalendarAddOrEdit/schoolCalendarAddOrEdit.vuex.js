import service from './schoolCalendarAddOrEdit.service';

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
export const setFormReadOnly = ({ actions, dispatch }, readonly) => {
  state.options.readonly = readonly;
};
