<template>
  <section>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-grid :options='pageopt.emapGrid' v-ref:grid></emap-grid>
  </section>
</template>
<script>
import service from './eduSys.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapGrid, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.eduSys
      },
    }
  },

  events: {
    'eduSys:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'eduSys:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = Vue.t('eduSys.propertyDialog.add_title')
      Vue.propertyDialog(this)
    },

    'eduSys:buttonlist:del': function() {
      var checked = this.$refs.grid.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'eduSys:grid:edit': function(row) {
      this.pageopt.propertyDialog.title = Vue.t('eduSys.propertyDialog.edit_title')
      Vue.propertyDialog(this)
      this.$broadcast('eduSysAddOrEdit:setvalue', row)
    },

    'eduSys:grid:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.grid.reload()
      })
    },

    'eduSys:tipdialog:del': function() {
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
