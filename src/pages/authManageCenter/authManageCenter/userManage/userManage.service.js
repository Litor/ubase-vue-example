let apiRootPath = 'iap-mngt';
let apiBaseName = 'userManage';

export default {
  api: {
    getList_meta: `../statics/meta-info/${apiBaseName}_list.json`,
    getList_action: `${apiBaseName}_list`,
    addOrEdit_meta: `../statics/meta-info/${apiBaseName}_addOrEdit.json`,
    addOrEdit_action: `${apiBaseName}_addOrEdit`,
    delete_meta: `../statics/meta-info/${apiBaseName}_delete.json`,
    getList: `/${apiRootPath}/${apiBaseName}/list`,
    delete: `/${apiRootPath}/${apiBaseName}/delete`,
    getByWid: `/${apiRootPath}/${apiBaseName}/getByWid`,
    addOrEdit: `/${apiRootPath}/${apiBaseName}/addOrEdit`,
    resetCheckPass: `/${apiRootPath}/${apiBaseName}/resetCheckPass`,
    resetResultPass: `/${apiRootPath}/${apiBaseName}/resetResultPass`,
    getDicts: `/${apiRootPath}/${apiBaseName}/queryCond/dicts`,
    relieveMobile:`/${apiRootPath}/${apiBaseName}/relieveMobile`,
},

  resetCheckPass(wids) {
    return Vue.http.post(this.api.resetCheckPass, {wids: wids});
  },

  resetResultPass(wids) {
    return Vue.http.post(this.api.resetResultPass, {wids: wids});
  },

  relieveMobile(wid) {
    return Vue.http.post(this.api.relieveMobile, {wid: wid});
  },

  getDicts(){
    return Vue.http.post(this.api.getDicts).then(function (res) {
      return res.data.datas;
    });
  },

  getByWid(wid) {
    return Vue.http.post(this.api.getByWid, {wid: wid}).then(function (datas) {
      return datas.data.datas.rows[0];
    });
  }
};
