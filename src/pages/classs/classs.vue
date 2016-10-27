<template>
  <article bh-layout-role="single">
    <h2>{{$t('classs.title')}}</h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('classs.simpleSearch.placeholder')" :search-event="'classs:search:top'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('classs.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('classs.buttonList.del')}}</bh-button>
        <bh-button type="primary" @click="importt" :small="false">{{$t('classs.buttonList.import')}}</bh-button>
      </div>
      <emap-grid :options='pageState.emapGrid' v-ref:grid></emap-grid>
    </section>
  </article>
</template>
<script  type="text/ecmascript-6">
import service from './classs.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapGrid, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.classs
      },
    }
  },

  methods: {
    add() {
      this.pageState.paperDialog.title = Vue.t('classs.paperDialog.add_title')
      Vue.paperDialog(this)
    },

    del() {
      var checked = this.$refs.grid.getGrid().checkedRecords()
      this.pageState.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('classs.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('classs.toast.del'),
        okEvent: 'classs:tipdialog:del'
      })
    },

    importt() {
      Vue.dialog({
        currentView: 'classs',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('classs.dialog.title')
      })
    }
  },

  events: {
    'classs:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'classs:grid:detail': function(row) {
      Vue.propertyDialog({
        title: row['name'],
        currentView: 'classDetail',
      })
      Vue.broadcast('classDetail:setvalue', row)
    },

    'classs:grid:edit': function(row) {
      Vue.paperDialog({
        title: Vue.t('classs.paperDialog.edit_title'),
        currentView: 'classAddOrEdit',
      })
      Vue.broadcast('classAddOrEdit:setvalue', row)
    },

    'classs:grid:del': function(row) {
      this.pageState.selectedRows = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('classs.toast.del'),
        okEvent: 'classs:tipdialog:del'
      })
    },

    'classs:tipdialog:del': function() {
      var checked = this.pageState.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('classs.tip.del_success')
        })
        this.$refs.grid.reload()
      })
    },

    'classs:card:edit': function(row) {
      service.getByWid(row.wid).then((row) => {
        Vue.paperDialog({
          title: Vue.t('classs.paperDialog.edit_title'),
          currentView: 'classAddOrEdit',
        })
        Vue.broadcast('classAddOrEdit:setvalue', row)
      })
    },

    'classs:card:detail': function(row) {
      service.getByWid(row.wid).then((row) => {
        Vue.propertyDialog({
          title: row['name'],
          currentView: 'classDetail',
        })
        Vue.broadcast('classDetail:setvalue', row)
      })
    },

    'classs:card:del': function(row) {
      this.pageState.selectedRows = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('classs.toast.del'),
        okEvent: 'classs:tipdialog:del'
      })
    }
  }
}
</script>
<style type="text/css">
.classs-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.classs-card .sc-panel-thingNoImg-1-container {
  padding-right: 4px;
}

.classs-card .sc-panel-thingNoImg-1-title {
  max-width: 155px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin-right: 0;
  vertical-align: middle;
}
</style>
