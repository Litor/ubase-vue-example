let app = 'postSetting';
let apiRootPath = 'yxxzry';

export default {
  api: {
    addOrEdit_meta: `../statics/meta-info/${app}_addOrEdit.json`,
    addOrEdit_action: `${app}_addOrEdit`,
    getList: `/${apiRootPath}/${app}/getList`,
    delete: `/${apiRootPath}/${app}/delete`,
    addOrEdit: `/${apiRootPath}/${app}/addOrEdit`
  },

  addOrEdit(info) {
    delete info.level_DISPLAY
    delete info.status_DISPLAY
    delete info.hasMember
    info.status = info.status === 0 ? false : true
    info.wid = info.wid || '0'
    delete info.preinstall
    return Vue.http.post(this.api.addOrEdit, info);
  }
};
