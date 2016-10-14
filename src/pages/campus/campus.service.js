let apiRootPath = 'jcsj-apps-web';
let apiBaseName = 'campus';

export default {
  api: {
    getList_meta: `../statics/meta-info/${apiBaseName}_getList.json`,
    getList_action: `${apiBaseName}_getList`,
    addOrEdit_meta: `../statics/meta-info/${apiBaseName}_addOrEdit.json`,
    addOrEdit_action: `${apiBaseName}_addOrEdit`,
    delete_meta: `../statics/meta-Ïo/${apiBaseName}_delete.json`,
    getList: `/${apiRootPath}/${apiBaseName}/getList`,
    delete: `/${apiRootPath}/${apiBaseName}/delete`,
    addOrEdit: `/${apiRootPath}/${apiBaseName}/addOrEdit`,
    getByWid: `/${apiRootPath}/${apiBaseName}/getByWid`
  },

  delete(wids) {
    return Vue.http.post(this.api.delete, { wids: wids });
  }
};
