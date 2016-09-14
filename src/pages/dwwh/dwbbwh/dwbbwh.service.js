 let app = 'deptRunType'

 export default {
   api: {
     getList_meta: `./statics/meta-info/${app}_getList.json`,
     addOrEdit_meta: `./statics/meta-info/${app}_addOrEdit.json`,
     delete_meta: `./statics/meta-info/${app}_delete.json`,
     getList: `/jcsj-apps-web/${app}/getList`,
     delete: `/jcsj-apps-web/${app}/delete`,
     addOrEdit: `/jcsj-apps-web/${app}/addOrEdit`,
   },

   deptRunTypeDelete(wids) {
     return Vue.http.post(this.api.delete, { wids: wids })
   }
 }
