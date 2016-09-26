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
import service from './gradeMajor.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapCard, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.gradeMajor
      }
    }
  },

  ready() {
    var self = this;
    $(this.$el).on('click', '.opt-button', function(e) {
      var rowId = $(this).attr('data-id');
      var event = $(this).attr('data-event');
      self.$dispatch(event, rowId);
    })
  },

  events: {
    'gradeMajor:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'gradeMajor:buttonlist:add': function() {
      Vue.dialog(this)
    },

    'gradeMajor:card:edit':function(id){
      alert(id)
    },

    'gradeMajor:card:setting':function(){
      Vue.paperDialog(this)
    }
  }
}
</script>
<style type="text/css">
.gradeMajor-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.gradeMajor-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.gradeMajor-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
