<template>
  <div>
    <div class="title">您确定要批量重置 <b>{{types[pageState.resetPassType]}}</b> 的密码吗？</div>
    <div class="content">提示：重置后，密码将恢复为默认密码。同时，会通过手机短信的方式提醒相应的教职工。</div>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    data: function () {
      return {
        types: {
          'resetBySelected': '所勾选人员',
          'resetBySearch': '查询结果中所有人员 '
        }
      }
    },
    vuex: {
      getters: {
        pageState: function (state) {
          return state.userManage
        }
      }
    }
  }
</script>
<style scoped type="text/css">
  .title {
    font-size: 14px;
  }

  .content {
    background-color: rgba(255, 234, 204, 1);
    color: #EE981D;
    padding: 8px;
    margin-top: 8px;
  }
</style>
