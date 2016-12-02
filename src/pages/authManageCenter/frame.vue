<template>
  <top-nav :title="title" :menu="menu"></top-nav>
</template>

<script>
  export default {
    data: function () {
      return {
        title: '认证管理中心',
        menu: [{title:'用户认证信息维护', route:'/userAuthSetting'}, {title:'用户认证配置', route:'/userManage'}]
      }
    }
  }
</script>
