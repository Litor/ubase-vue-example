import service from './schoolCalendarAddOrEdit.service';

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
