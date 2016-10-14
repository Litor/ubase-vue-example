let apiRootPath = 'jcsj-apps-web';
let apiBaseName = 'schoolYear';

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

  delete(wids) {
    return Vue.http.post(this.api.delete, { wids: wids });
  }
};
