<template>
  <article bh-layout-role="single">
    <h2>{{$t('gradeMajor.title')}}</h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('gradeMajor.simpleSearch.placeholder')" :search-event="'gradeMajor:search:top'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="addGrade" :small="false">{{$t('gradeMajor.buttonList.addGrade')}}</bh-button>
      </div>
      <emap-card :options='pageState.emapCard' v-ref:table></emap-card>
    </section>
  </article>
</template>
<script  type="text/ecmascript-6">
import service from './gradeMajor.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapCard, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.gradeMajor
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
    addGrade() {
      this.pageState.dialog.currentView = 'gradeAdd'
      Vue.dialog({
        width: '800px',
        height: '550px',
        currentView: 'gradeAdd',
        okEvent: 'gradeAdd:save',
        title: Vue.t('gradeMajor.dialog.title')
      })
    }
  },

  events: {
    'gradeMajor:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'gradeMajor:card:edit': function(row) {
      console.log(row)
    },

    'gradeMajor:card:setting': function(row) {
      Vue.paperDialog({
        currentView: 'gradeMajorAddOrEdit',
        title: row.name
      })
    },

    'gradeMajor:card:copy': function() {
      Vue.dialog({
        width: '800px',
        height: '550px',
        currentView: 'gradeAdd',
        okEvent: 'gradeAdd:save',
        title: Vue.t('gradeMajor.dialog.title')
      })
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
