<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('depart.simpleSearch.placeholder')" :search-event="'depart:search:top'"></simple-search>
    <div class="bh-mv-16">
      <bh-button type="primary" @click="add" :small="false">{{$t('depart.buttonList.add')}}</bh-button>
      <bh-button type="primary" @click="del" :small="false">{{$t('depart.buttonList.del')}}</bh-button>
      <bh-button type="primary" @click="importt" :small="false">{{$t('depart.buttonList.import')}}</bh-button>
    </div>
    <emap-grid :options='pageState.emapGrid' v-ref:grid></emap-grid>
  </section>
</template>
<script  type="text/ecmascript-6">
import service from './depart.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapGrid, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.depart
      },
    }
  },

  methods: {
    add() {
      Vue.updateState('departAddOrEdit', { 'options.readonly': false })
      this.pageState.paperDialog.title = Vue.t('depart.paperDialog.add_title')
      Vue.paperDialog({
        currentView: 'departAddOrEdit',
        title: Vue.t('depart.paperDialog.add_title')
      })
    },

    del() {
      var checked = this.$refs.grid.getGrid().checkedRecords()
      this.pageState.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('depart.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('depart.toast.del'),
        okEvent: 'depart:tipdialog:del'
      })
    },

    importt() {
      Vue.dialog({
        currentView: 'depart',
        title: Vue.t('depart.dialog.title')
      })
    }
  },

  events: {
    'depart:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'depart:grid:edit': function(row) {
      this.setDepartFormReadOnly(false)
      Vue.paperDialog({
        title: Vue.t('depart.paperDialog.edit_title'),
        currentView: 'departAddOrEdit',
      })
      Vue.broadcast('departAddOrEdit:setvalue', row)
    },

    'depart:grid:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('depart.tip.del_success')
        })
        this.$refs.grid.reload()
      })
    },

    'depart:grid:detail': function(row) {
      this.setDepartFormReadOnly(true)
      Vue.paperDialog({
        title: Vue.t('depart.paperDialog.detail_title'),
        currentView: 'departAddOrEdit',
      })
      Vue.broadcast('departAddOrEdit:setvalue', row)
    },

    'depart:tipdialog:del': function() {
      var checked = this.$refs.grid.getGrid().checkedRecords()
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('depart.tip.del_success')
        })
        this.$refs.grid.reload()
      })
    },

    'depart:card:edit': function(row) {
      console.log(row)
    }

  }
}
</script>
<style type="text/css">
.depart-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.depart-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.depart-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
