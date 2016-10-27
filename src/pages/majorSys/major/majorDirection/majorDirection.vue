<template>
  <article bh-layout-role="single">
    <h2>{{$t('majorDirection.title')}}</h2>
    <section>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('majorDirection.buttonList.add')}}</bh-button>
      </div>
      <emap-card :options='pageState.emapCard' v-ref:table></emap-card>
    </section>
  </article>
</template>
<script  type="text/ecmascript-6">
import service from './majorDirection.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapCard, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.majorDirection
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
      Vue.dialog({
        currentView: 'majorDirectionAddOrEdit',
        title: Vue.t('majorDirection.dialog.title'),
        okEvent: 'majorDirectionAddOrEdit:save',
        width: '400px',
        height: '350px'
      })
    }
  },

  events: {
    'majorDirection:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'majorDirection:card:edit': function(row) {
      console.log(row)
    },

    'majorDirection:card:del': function(row) {

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
