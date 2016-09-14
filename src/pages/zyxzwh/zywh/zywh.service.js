let app = 'major'

export default {
  api: {
    getList_meta: `./statics/meta-info/${app}_getList.json`,
    getList_action: `${app}_getList`,
    addOrEdit_meta: `./statics/meta-info/${app}_addOrEdit.json`,
    getList: `/jcsj-apps-web/${app}/getList`,
    delete: `/jcsj-apps-web/${app}/delete`,
  },

  zyDelete(wids) {
    return Vue.http.post(this.api.delete, { wids: wids })
  }
}
