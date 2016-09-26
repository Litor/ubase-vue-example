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
import service from './gradeMajorAddOrEdit.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapGrid, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.gradeMajorAddOrEdit
      },
    }
  },

  events: {
    'gradeMajorAddOrEdit:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'gradeMajorAddOrEdit:buttonlist:add': function() {
      this.pageopt.paperDialog.title = Vue.t('gradeMajorAddOrEdit.paperDialog.add_title')
      Vue.paperDialog(this)
    },

    'gradeMajorAddOrEdit:buttonlist:del': function() {
      var checked = this.$refs.grid.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'gradeMajorAddOrEdit:grid:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
    },

    'gradeMajorAddOrEdit:buttonlist:import': function() {
      Vue.dialog(this)
    },

    'gradeMajorAddOrEdit:grid:edit': function(row) {
      this.pageopt.paperDialog.title = Vue.t('gradeMajorAddOrEdit.paperDialog.edit_title')
      Vue.paperDialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    'gradeMajorAddOrEdit:grid:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.grid.reload()
      })
    },

    'gradeMajorAddOrEdit:tipdialog:del': function() {
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
.gradeMajorAddOrEdit-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.gradeMajorAddOrEdit-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.gradeMajorAddOrEdit-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
