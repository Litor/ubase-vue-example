<template>
  <article bh-layout-role="single">
    <h2>{{$t('grade.title')}}</h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('grade.simpleSearch.placeholder')" :search-event="'grade:search:top'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('grade.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('grade.buttonList.del')}}</bh-button>
      </div>
      <emap-card :options='pageopt.emapCard' v-ref:table></emap-card>
    </section>
  </article>
</template>
<script>
import service from './grade.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapCard, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.grade
      }
    }
  },

  methods: {
    add() {
      Vue.dialog({
        width: '300px',
        height: '250px',
        currentView: 'gradeAddOrEdit',
        title: Vue.t('grade.dialog.title')
      })
    },

    del() {

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

  events: {
    'grade:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'grade:card:edit': function(row) {
      console.log(row)
    },

    'grade:card:del': function(row) {

    }
  }
}
</script>
<style type="text/css">
.grade-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.grade-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.grade-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
