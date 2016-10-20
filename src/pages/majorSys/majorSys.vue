<template>
  <article bh-layout-role="single">
    <h2>{{$t('majorSys.title')}}</h2>
    <section>
      <comp-tab :tabs="pageopt.tabs"></comp-tab>
    </section>
  </article>
</template>
<script>
import compTab from 'bh-vue/comp-tab/compTab.vue'

export default {
  components: { compTab},

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.majorSys;
      }
    }
  }
}
</script>
