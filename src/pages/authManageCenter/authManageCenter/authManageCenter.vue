<template>
  <section>
    <top-nav :menu="pageState.menu"></top-nav>
  </section>
</template>
<script type="text/ecmascript-6">

  export default {
    vuex: {
      getters: {
        pageState: function (state) {
          return state.authManageCenter
        }
      }
    }
  }
</script>
