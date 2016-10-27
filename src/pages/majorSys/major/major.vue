<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('major.simpleSearch.placeholder')" :search-event="'major:search:top'"></simple-search>
    <div class="bh-mv-16">
      <bh-button type="primary" @click="add" :small="false">{{$t('major.buttonList.add')}}</bh-button>
      <bh-button type="primary" @click="del" :small="false">{{$t('major.buttonList.del')}}</bh-button>
      <bh-button type="primary" @click="importt" :small="false">{{$t('major.buttonList.import')}}</bh-button>
      <bh-button type="primary" @click="exportt" :small="false">{{$t('major.buttonList.export')}}</bh-button>
    </div>
    <emap-grid :options='pageState.emapGrid' v-ref:grid></emap-grid>
  </section>
</template>
<script  type="text/ecmascript-6">
import service from './major.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapGrid, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.major
      },
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
      Vue.paperDialog({
        currentView: 'majorAddOrEdit',
        title: Vue.t('major.paperDialog.add_title')
      })
    },

    del() {
      var checked = this.$refs.grid.getGrid().checkedRecords()
      this.pageState.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('major.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('major.toast.del'),
        okEvent: 'major:tipdialog:del'
      })
    },

    importt() {
      Vue.dialog({
        currentView: 'major.vue',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('major.dialog.title')
      })
    },

    exportt() {
      console.log('export')
    }
  },

  events: {
    'major:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'major:grid:detail': function(row) {
      Vue.propertyDialog({
        currentView: 'majorDetail',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: row['name'],
        footerShow: false
      })
      Vue.broadcast('majorDetail:setvalue', row)
    },

    'major:grid:edit': function(row) {
      Vue.paperDialog({
        currentView: 'majorAddOrEdit',
        title: Vue.t('major.paperDialog.edit_title')
      })
      Vue.broadcast('majorAddOrEdit:setvalue', row)
    },

    'major:grid:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('major.tip.del_success')
        })
        this.$refs.grid.reload()
      })
    },

    'major:grid:direction': function(row) {
      Vue.paperDialog({
        currentView: 'majorDirection',
        title: Vue.t('major.paperDialog.majorDirection_setting')
      })
    },

    'major:tipdialog:del': function() {
      var checked = this.pageState.willDeleteWids
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('major.tip.del_success')
        })
        this.$refs.grid.reload()
      })
    },

    'major:card:edit': function(row) {
      console.log(row)
    }

  }
}
</script>
<style type="text/css">
.major-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.major-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.major-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
