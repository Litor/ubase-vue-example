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
      var row = $(this).data('row');
      var event = $(this).attr('data-event');
      self.$dispatch(event, row);
    })
  },

  events: {
    'gradeMajor:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'gradeMajor:buttonlist:addGrade': function() {
      this.pageopt.dialog.currentView = 'gradeAdd'
      Vue.dialog(this)
    },

    'gradeMajor:card:edit': function(row) {
      console.log(row)
    },

    'gradeMajor:card:setting': function(row) {
      this.pageopt.paperDialog.title = row.name
      this.pageopt.paperDialog.currentView = 'gradeMajorAddOrEdit'
      Vue.paperDialog(this)
    },

    'gradeMajor:card:copy': function() {
      Vue.dialog(this)
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
