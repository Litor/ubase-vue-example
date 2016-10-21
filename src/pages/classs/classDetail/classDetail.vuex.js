import service from './classDetail.service';

export const state = {
  options: {
    pagePath: service.api.addOrEdit_meta,
    modelName: service.api.addOrEdit_action,
    outline: false,
    readonly: true,
    model: 'h'
  },
  outline: false
};
