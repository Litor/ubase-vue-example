let app = 'postSetting';
let apiRootPath = 'yxxzry';

export default {
  api: {
    getList: `/${apiRootPath}/${app}/getList`,
    delete: `/${apiRootPath}/${app}/delete`,
    addOrEdit: `/${apiRootPath}/${app}/addOrEdit`
  },

  delete(wids) {
    return Vue.http.post(this.api.delete, {wids:wids}).then(function (res) {
      return res.data;
    });
  },

  getPostList(params){
    return Vue.http.post(this.api.getList, params).then(function(res) {
      return res.data.datas.rows;
    });
  }
};
