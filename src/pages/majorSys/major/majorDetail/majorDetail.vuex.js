import service from './majorDetail.service';

export const state = {
  title: Vue.t('majorDetail.title'),
  options: {
    pagePath: service.api.addOrEdit_meta,
    modelName: service.api.addOrEdit_action,
    outline: false,
    readonly: true,
    model: 'v'
  },
  outline: false
};
