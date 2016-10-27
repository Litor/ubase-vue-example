<template>
  <article bh-layout-role="single">
    <h2 v-html="pageState.title"></h2>
    <section>
      <simple-search v-ref:simplesearch :simple-search="pageState.simpleSearch"></simple-search>
      <button-list :button-list="pageState.buttonList"></button-list>
      <emap-datatable :options='pageState.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script  type="text/ecmascript-6">
import service from './teachGroup.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapDatatable, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.teachGroup
      },
    }
  },

  events: {
    'teachGroup:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'teachGroup:buttonlist:add': function() {
      this.pageState.propertyDialog.title = Vue.t('teachGroup.propertyDialog.add_title')
      Vue.propertyDialog(this)
    },

    'teachGroup:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      this.pageState.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip(this, 'noselect')
        return
      }
      Vue.toast(this, 'del')
    },

    'teachGroup:buttonlist:import': function() {
      Vue.dialog(this)
    },

    'teachGroup:table:detail': function(row) {
      this.pageState.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
    },

    'teachGroup:table:edit': function(row) {
      this.pageState.propertyDialog.title = Vue.t('teachGroup.propertyDialog.edit_title')
      Vue.propertyDialog(this)
      this.$broadcast('teachGroupAddOrEdit:setvalue', row)
    },

    'teachGroup:table:del': function(row) {
      this.pageState.selectedRows = [row]
      Vue.toast(this, 'del')
    },

    'teachGroup:tipdialog:del': function() {
      var checked = this.pageState.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip(this, 'del_success')
        this.$refs.table.reload()
      })
    }
    
  }
}
</script>
