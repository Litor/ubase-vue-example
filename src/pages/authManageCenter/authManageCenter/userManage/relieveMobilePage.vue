<template>
  <div>
    <div class="title">
      <i class="iconfont icon-erroroutline"></i>
      <span>警告</span>
    </div>
    <div class="content bh-mv-16">您确定要解绑吗？解绑后，将清空手机号。</div>
    <div class="cus-buttons">
      <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-small waves-effect"
         @click="relieveMobile()">解绑</a>
      <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-small waves-effect" @click="cancel()">取消</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import service from './userManage.service'

  export default {
    vuex: {
      getters: {
        pageState: function (state) {
          return state.userManage
        }
      }
    },

    methods: {
      cancel(){
        Vue.pop('hide')
      },

      relieveMobile(){
        service.relieveMobile(this.pageState.relieveMobieId).then(()=> {
          Vue.tip({
            content:'解绑成功'
          })
        })
        Vue.pop('hide')
      }
    }
  }
</script>
<style scoped type="text/css">
  .iconfont {
    font-size: 42px;
    color: #EE981D;
  }

  .title {
    font-size: 24px;
  }

  .title > span {
    vertical-align: text-top;
  }

  .content {
    padding: 8px;
  }

  .cus-buttons {
    text-align: right;
  }
</style>
