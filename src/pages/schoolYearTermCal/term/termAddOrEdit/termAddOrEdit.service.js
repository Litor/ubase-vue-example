let apiRootPath = 'jcsj-apps-web';
let apiBaseName = 'term';

export default {
  api: {
    getList_meta: `../statics/meta-info/${apiBaseName}_getList.json`,
    getList_action: `${apiBaseName}_getList`,
    addOrEdit_meta: `../statics/meta-info/${apiBaseName}_addOrEdit.json`,
    addOrEdit_action: `${apiBaseName}_addOrEdit`,
    delete_meta: `../statics/meta-info/${apiBaseName}_delete.json`,
    getList: `/${apiRootPath}/${apiBaseName}/getList`,
    delete: `/${apiRootPath}/${apiBaseName}/delete`,
    addOrEdit: `/${apiRootPath}/${apiBaseName}/addOrEdit`
  },

  addOrEdit(info) {
    return Vue.http.post(this.api.addOrEdit, { termAddOrEdit: info });
  }
};
