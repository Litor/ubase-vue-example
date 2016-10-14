<template>
  <section>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-card :options='pageopt.emapCard' v-ref:table></emap-card>
  </section>
</template>
<script>
import service from './schoolCalendar.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapCard, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.schoolCalendar
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
    'schoolCalendar:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'schoolCalendar:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = Vue.t('schoolYear.propertyDialog.add_title')
      Vue.propertyDialog(this)
    },

    'schoolCalendar:card:edit': function(row) {
      console.log(row)
    },

    'schoolCalendar:card:detail': function(wid) {
      this.pageopt.paperDialog.currentView = 'calendarDetail'
      Vue.paperDialog(this)
      this.$broadcast('calendardetail:init', wid)
    }
  }
}
</script>
<style type="text/css">
.schoolCalendar-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.schoolCalendar-card .sc-panel-thingNoImg-1-container {
  padding-right: 4px;
}

.schoolCalendar-card .sc-panel-thingNoImg-1-title {
  max-width: 155px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin-right: 0;
  vertical-align: middle;
}
</style>
