<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <button-list :button-list="pageopt.buttonList"></button-list>
      <emap-card :options='pageopt.emapCard' v-ref:table></emap-card>
    </section>
  </article>
</template>
<script>
import service from './majorDirection.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapCard, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.majorDirection
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
    'majorDirection:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },
    
    'majorDirection:buttonlist:add': function() {
      Vue.dialog(this)
    },

    'majorDirection:card:edit':function(id){
      alert(id)
    },

    'majorDirection:card:del':function(){

    }
  }
}
</script>
<style type="text/css">
.majorDirection-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.majorDirection-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.majorDirection-card .sc-panel-thing-1-title {
  max-width: 112px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin-right: 0;
  vertical-align: middle;
}
</style>
