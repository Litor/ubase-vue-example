let apiRootPath = 'jcsj-apps-web';
let apiBaseName = 'class';

export default {
  api: {
    getList_meta: `../statics/meta-info/${apiBaseName}_getList.json`,
    getList_action: `${apiBaseName}_getList`,
    addOrEdit_meta: `../statics/meta-info/${apiBaseName}_addOrEdit.json`,
    addOrEdit_action: `${apiBaseName}_addOrEdit`,
    delete_meta: `../statics/meta-info/${apiBaseName}_delete.json`,
    getList: `/${apiRootPath}/${apiBaseName}/getList`,
    delete: `/${apiRootPath}/${apiBaseName}/delete`,
    getByWid: `/${apiRootPath}/${apiBaseName}/getByWid`,
    addOrEdit: `/${apiRootPath}/${apiBaseName}/addOrEdit`
  },

  delete(wids) {
    return Vue.http.post(this.api.delete, { wids: wids });
  },

  getByWid(wid) {
    return Vue.http.post(this.api.getByWid, { wid: wid }).then(function(datas) {
      return datas.data.datas.rows[0];
    });
  }
};
