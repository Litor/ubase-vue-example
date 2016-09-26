<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
      <button-list :button-list="pageopt.buttonList"></button-list>
      <emap-grid :options='pageopt.emapGrid' v-ref:grid></emap-grid>
    </section>
  </article>
</template>
<script>
import service from './test2.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapGrid, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.test2
      },
    }
  },

  events: {
    'test2:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'test2:buttonlist:add': function() {
      this.pageopt.paperDialog.title = Vue.t('test2.paperDialog.add_title')
      Vue.paperDialog(this)
    },

    'test2:buttonlist:del': function() {
      var checked = this.$refs.grid.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'test2:grid:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
    },

    'test2:buttonlist:import': function() {
      Vue.dialog(this)
    },

    'test2:grid:edit': function(row) {
      this.pageopt.paperDialog.title = Vue.t('test2.paperDialog.edit_title')
      Vue.paperDialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    'test2:grid:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.grid.reload()
      })
    },

    'test2:tipdialog:del': function() {
      var checked = this.$refs.grid.checkedRecords()
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.grid.reload()
      })
    }
    
  }
}
</script>
<style type="text/css">
.test2-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.test2-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.test2-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
