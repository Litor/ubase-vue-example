<template>
  <section>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
  </section>
</template>
<script>
import service from './term.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapDatatable, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.term
      },
    }
  },

  events: {
    'term:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'term:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = Vue.t('term.propertyDialog.add_title')
      Vue.propertyDialog(this)
    },

    'term:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      this.pageopt.selectedRows = checked
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'term:buttonlist:import': function() {
      Vue.dialog(this)
    },

    'term:table:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
    },

    'term:table:edit': function(row) {
      this.pageopt.propertyDialog.title = Vue.t('term.propertyDialog.edit_title')
      Vue.propertyDialog(this)
      this.$broadcast('termAddOrEdit:setvalue', row)
    },

    'term:table:del': function(row) {
      this.pageopt.selectedRows = [row]
      Vue.tipDialog(this, 'del')
    },

    'term:tipdialog:del': function() {
      var checked = this.pageopt.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    }

  }
}
</script>
