let app = 'gradeMajor';

export default {
  api: {
    getList_meta: `../statics/meta-info/${app}_getList.json`,
    getGradeMajorNumList_meta: `../statics/meta-info/${app}_getGradeMajorNumList.json`,
    getList_action: `${app}_getList`,
    getGradeMajorNumList_action: `${app}_getGradeMajorNumList`,
    addOrEdit_meta: `../statics/meta-info/${app}_addOrEdit.json`,
    addOrEdit_action: `${app}_addOrEdit`,
    delete_meta: `../statics/meta-info/${app}_delete.json`,
    getList: `/jcsj-apps-web/${app}/getList`,
    delete: `/jcsj-apps-web/${app}/delete`,
    addOrEdit: `/jcsj-apps-web/${app}/addOrEdit`,
    getGradeMajorNumList: `/jcsj-apps-web/${app}/getGradeMajorNumList`
  },

  addOrEdit(info) {
    return Vue.http.post(this.api.addOrEdit, { gradeMajor: info });
  }
};
