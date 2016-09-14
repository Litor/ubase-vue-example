<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <tabs :tabs="pageopt.tabs"></tabs>
    </section>
  </article>
</template>
<script>
import tabs from 'components/tabs.vue'

export default {
  components: { tabs},

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.dwwh
      }
    }
  }
}
</script>
