<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('eduSys.simpleSearch.placeholder')" :search-event="'eduSys:search:top'"></simple-search>
    <div class="bh-mv-16">
      <bh-button type="primary" @click="add" :small="false">{{$t('eduSys.buttonList.add')}}</bh-button>
      <bh-button type="primary" @click="del" :small="false">{{$t('eduSys.buttonList.del')}}</bh-button>
    </div>
    <emap-grid :options='pageState.emapGrid' v-ref:grid></emap-grid>
  </section>
</template>
<script  type="text/ecmascript-6">
import service from './eduSys.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapGrid, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.eduSys
      },
    }
  },

  methods: {
    add() {
      Vue.propertyDialog({
        currentView: 'eduSysAddOrEdit',
        okEvent: 'eduSysAddOrEdit:save',
        title: Vue.t('eduSys.propertyDialog.add_title')
      })
    },
    
    del() {
      var checked = this.$refs.grid.getGrid().checkedRecords()
      this.pageState.willDeleteWids = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('eduSys.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('eduSys.toast.del'),
        okEvent: 'eduSys:tipdialog:del'
      })
    }
  },

  events: {
    'eduSys:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'eduSys:grid:edit': function(row) {
      Vue.propertyDialog({
        currentView: 'eduSysAddOrEdit',
        okEvent: 'eduSysAddOrEdit:save',
        title: Vue.t('eduSys.propertyDialog.edit_title')
      })
      Vue.broadcast('eduSysAddOrEdit:setvalue', row)
    },

    'eduSys:grid:del': function(row) {
      this.pageState.willDeleteWids = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('eduSys.toast.del'),
        okEvent: 'eduSys:tipdialog:del'
      })
    },

    'eduSys:tipdialog:del': function() {
      var checked = this.pageState.willDeleteWids
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('eduSys.tip.del_success')
        })
        this.$refs.grid.reload()
      })
    },

    'eduSys:card:edit': function(row) {
      console.log(row)
    }

  }
}
</script>
<style type="text/css">
.eduSys-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.eduSys-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.eduSys-card .sc-panel-thing-1-title {
  max-width: 112px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin-right: 0;
  vertical-align: middle;
}
</style>
