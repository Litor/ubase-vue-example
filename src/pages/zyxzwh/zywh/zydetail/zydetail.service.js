let app = 'major'

export default {
  api: {
    addOrEdit_meta: `./statics/meta-info/${app}_addOrEdit.json`,
    addOrEdit_action: `${app}_addOrEdit`,
    addOrEdit: `/jcsj-apps-web/${app}/addOrEdit`,
  },

  AddOrEdit(info) {
    return Vue.http.post(this.api.addOrEdit, { major: info })
  }

}
