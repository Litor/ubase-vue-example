<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
      <button-list :button-list="pageopt.buttonList"></button-list>
      <emap-card :options='pageopt.emapCard' v-ref:table></emap-card>
    </section>
  </article>
</template>
<script>
import service from './njwh.service'
import EmapCard from 'bh-vue/emap-card/EmapCard.vue'

export default {
  components: { EmapCard },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.njwh
      }
    }
  },

  events: {
    'njwh:buttonlist:add': function() {
      Vue.dialog(this)
    },

    'njwh:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    }
  }
}
</script>
<style type="text/css">
.njwh-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.njwh-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.njwh-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
