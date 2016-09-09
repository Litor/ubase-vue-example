import service from './addedit.service'

export default {
  pageopt: {
    title: '测试纸质弹框',
    options: {
      pagePath: service.api.campus_addOrEdit_meta,
      modelName: 'campus_addOrEdit',
      outline: false,
      readonly: false,
      model: 'v'
    },
    outline: false
  }
}
