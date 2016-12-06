import service from './postAddOrEdit.service';

export const state = {
  title: Vue.t('postAddOrEdit.title'),
  options: {
    pagePath: service.api.addOrEdit_meta,
    modelName: service.api.addOrEdit_action,
    outline: false,
    readonly: false,
    model: 'v',
    defaultOptions: {
      "selecttable": {
        displayMember: 'name'
      }
    }
  },
  tip: {
    save_success: {
      state: 'success',
      content: Vue.t('postAddOrEdit.tip.save_success')
    }
  }
  ,
  outline: false
}
