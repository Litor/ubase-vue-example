 let app = 'deptRunType'

 export default {
   api: {
     addOrEdit_meta: `./statics/meta-info/${app}_addOrEdit.json`,
     addOrEdit: `/jcsj-apps-web/${app}/addOrEdit`,
   },

   AddOrEdit(info) {
     return Vue.http.post(this.api.addOrEdit, { deptRunType: info })
   }

 }
