let app = 'postSetting';

export default {
  api: {
    getList_meta: `../statics/meta-info/${app}_getList.json`,
    getList_action: `${app}_getList`,
    addOrEdit_meta: `../statics/meta-info/${app}_addOrEdit.json`,
    addOrEdit_action: `${app}_addOrEdit`,
    delete_meta: `../statics/meta-info/${app}_delete.json`,
    getList: `/yxxzry-apps-web/${app}/getList`,
    delete: `/yxxzry-apps-web/${app}/delete`,
    getByWid: `/yxxzry-apps-web/${app}/getByWid`,
    getBaseInfo: `/yxxzry-apps-web/${app}/getBaseInfo`,
    addOrEdit: `/yxxzry-apps-web/${app}/addOrEdit`
  },

  delete(wids) {
    return Vue.http.post(this.api.delete, { wids: wids });
  },

  addOrEdit(info) {
    return Vue.http.post(this.api.addOrEdit, { postSetting: info });
  },

  getByWid(wid) {
    return Vue.http.post(this.api.getByWid, { wid: wid }).then(function(res) {
      return res.data.datas.rows[0];
    });
  },

  getBaseInfo() {
    return Vue.http.post(this.api.getBaseInfo).then(function(res) {
      return res.data;
    });
  }
};
