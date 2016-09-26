<template>
  <section>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-grid :options='pageopt.emapGrid' v-ref:grid></emap-grid>
  </section>
</template>
<script>
import service from './major.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapGrid, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.major
      },
    }
  },

  events: {
    'major:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'major:buttonlist:add': function() {
      this.pageopt.paperDialog.title = Vue.t('major.paperDialog.add_title')
      this.pageopt.paperDialog.currentView = 'majorAddOrEdit'
      Vue.paperDialog(this)
    },

    'major:buttonlist:del': function() {
      var checked = this.$refs.grid.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'major:grid:detail': function(row) {
      this.pageopt.propertyDialog.title = Vue.t('major.propertyDialog.detail_title')
      Vue.propertyDialog(this)
      this.$broadcast('majorDetail:setvalue', row)
    },

    'major:buttonlist:import': function() {
      Vue.dialog(this)
    },

    'major:buttonlist:export': function() {

    },

    'major:grid:edit': function(row) {
      this.pageopt.paperDialog.title = Vue.t('major.paperDialog.edit_title')
      this.pageopt.paperDialog.currentView = 'majorAddOrEdit'
      Vue.paperDialog(this)
      this.$broadcast('majorAddOrEdit:setvalue', row)
    },

    'major:grid:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.grid.reload()
      })
    },

    'major:grid:direction': function(row) {
      this.pageopt.paperDialog.title = Vue.t('major.paperDialog.majorDirection_setting')
      this.pageopt.paperDialog.currentView = 'majorDirection'
      Vue.paperDialog(this)
    },

    'major:tipdialog:del': function() {
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
