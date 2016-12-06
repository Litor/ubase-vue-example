let app = 'postManage';
let apiRootPath = 'yxxzry';

export default {
  api: {
    getUsedGradeList: `/${apiRootPath}/${app}/getUsedGradeList`,
    getAcademyPostList: `/${apiRootPath}/${app}/getAcademyPostList`,
    getStructureTree: `/${apiRootPath}/${app}/getStructureTree`,
    savePostStaff:`/${apiRootPath}/postManage/savePostStaff`,
    savePostLeaveStaff:`/${apiRootPath}/postManage/savePostLeaveStaff`,
    searchUser: `/${apiRootPath}/code/searchUsers`,
    getDepartBySearch: `/${apiRootPath}/postManage/getDepartBySearch`,
    getPostProfileList: `/${apiRootPath}/${app}/getPostProfileList`,
    getPostDetailList_meta: `../statics/meta-info/${app}_getPostDetailList.json`,
    getPostDetailList_action: `${app}_getPostDetailList`,
    getPostDetailList: `/${apiRootPath}/${app}/getPostDetailList`,
  },

  getUsedGradeList() {
    return Vue.http.post(this.api.getUsedGradeList).then(function(res) {
      return res.data;
    });
  },

  getStructureTree(params) {
    return Vue.http.post(this.api.getStructureTree, params).then(function(res) {
      var data = res.data;
      addIcon(data.structureTree);
      return data;
    });
  },

  savePostStaff(params) {
    return Vue.http.post(this.api.savePostStaff, params).then(function (res) {
      return res;
    });
  },

  savePostLeaveStaff(params) {
    return Vue.http.post(this.api.savePostLeaveStaff, params).then(function (res) {
      return res;
    });
  },

  getPostList(params){
    return Vue.http.post(this.api.getPostProfileList, params).then(function(res) {
      return res.data.datas.rows;
    });
  }
};

import folder from 'statics/images/folder.png';
import file from 'statics/images/file.png';

// 在返回的树数据中添加图标属性
function addIcon(data) {
  if (data) {
    data.forEach(function(item) {
      if (item.items || item.value != '1') {
        item.icon = folder;
        item.items = []
        addIcon(item.items);
      } else {
        item.icon = file;
      }
    });
  }
}
