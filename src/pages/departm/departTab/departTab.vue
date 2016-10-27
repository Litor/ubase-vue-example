<template>
  <article bh-layout-role="single">
    <h2>{{$t('departTab.title')}}</h2>
    <section>
      <comp-tab :tabs="pageState.tabs"></comp-tab>
    </section>
  </article>
</template>
<script  type="text/ecmascript-6">
import compTab from 'bh-vue/comp-tab/compTab.vue'

export default {
  components: { compTab},

  vuex: {
    getters: {
      pageState: function(state) {
        return state.departTab;
      }
    }
  }
}
</script>
