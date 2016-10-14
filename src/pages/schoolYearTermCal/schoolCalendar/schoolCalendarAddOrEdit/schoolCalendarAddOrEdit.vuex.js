import service from './schoolCalendarAddOrEdit.service';

// init state
export const state = {
  title: Vue.t('schoolCalendarAddOrEdit.title'),
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
      content: Vue.t('schoolCalendarAddOrEdit.tip.save_success')
    }
  },
  outline: false
};

// actions
export const setFormReadOnly = ({ actions, dispatch }, readonly) => {
  state.options.readonly = readonly;
};
