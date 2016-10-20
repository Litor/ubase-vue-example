<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('schoolCalendar.simpleSearch.placeholder')" :search-event="'schoolCalendar:search:top'"></simple-search>
    <div class="bh-mv-16">
      <bh-button type="primary" @click="add" :small="false">{{$t('schoolCalendar.buttonList.add')}}</bh-button>
    </div>
    <emap-card :options='pageopt.emapCard' v-ref:table></emap-card>
  </section>
</template>
<script>
import service from './schoolCalendar.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapCard, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.schoolCalendar
      }
    }
  },

  ready() {
    var self = this;
    $(this.$el).on('click', '.card-opt-button', function(e) {
      var row = $(this).data('row');
      var event = $(this).attr('data-event');
      self.$dispatch(event, row);
    })
  },

  methods: {
    add() {
      Vue.propertyDialog({
        currentView: 'schoolCalendarAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('schoolCalendar.propertyDialog.add_title')
      })
    }
  },

  events: {
    'schoolCalendar:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'schoolCalendar:card:edit': function(row) {
      console.log(row)
    },

    'schoolCalendar:card:detail': function(wid) {
      Vue.paperDialog({
        currentView: 'calendarDetail'
      })
      Vue.broadcast('calendardetail:init', wid)
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
