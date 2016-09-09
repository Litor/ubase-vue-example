import service from './addedit.service'

export default {
  pageopt: {
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
