let apiRootPath = 'jcsj-apps-web';
let apiBaseName = 'gradeMajor';

export default {
  api: {
    getList_meta: `../statics/meta-info/${apiBaseName}_getList.json`,
    getGradeMajorNumList_meta: `../statics/meta-info/${apiBaseName}_getGradeMajorNumList.json`,
    getList_action: `${apiBaseName}_getList`,
    getGradeMajorNumList_action: `${apiBaseName}_getGradeMajorNumList`,
    addOrEdit_meta: `../statics/meta-info/${apiBaseName}_addOrEdit.json`,
    addOrEdit_action: `${apiBaseName}_addOrEdit`,
    delete_meta: `../statics/meta-info/${apiBaseName}_delete.json`,
    getList: `/${apiRootPath}/${apiBaseName}/getList`,
    delete: `/${apiRootPath}/${apiBaseName}/delete`,
    addOrEdit: `/${apiRootPath}/${apiBaseName}/addOrEdit`,
    getGradeMajorNumList: `/${apiRootPath}/${apiBaseName}/getGradeMajorNumList`
  },

  addOrEdit(info) {
    return Vue.http.post(this.api.addOrEdit, { gradeMajor: info });
  }
};
