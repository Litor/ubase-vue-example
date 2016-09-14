let app = 'depart'

export default {
  api: {
    getList_meta: `./statics/meta-info/${app}_getList.json`,
    getList_action: `${app}_getList`,
    addOrEdit_meta: `./statics/meta-info/${app}_addOrEdit.json`,
    addOrEdit_action: `${app}_addOrEdit`,
    delete_meta: `./statics/meta-info/${app}_delete.json`,
    getList: `/jcsj-apps-web/${app}/getList`,
    delete: `/jcsj-apps-web/${app}/delete`,
    addOrEdit: `/jcsj-apps-web/${app}/addOrEdit`,
  },

  xxdwSave(info) {
    return Vue.http.post(this.api.addOrEdit, { depart: info })
  }

}
