<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <tabs :tabs="pageopt.tabs"></tabs>
    </section>
  </article>
</template>
<script>
import pageConfig from './zyxzwh.config'
import tabs from 'components/tabs.vue'
import zywh from './zywh/zywh.vue'
import xzwh from './xzwh/xzwh.vue'

export default {
  components: { tabs, zywh, xzwh },

  data: function() {
    return pageConfig
  }
}
</script>
