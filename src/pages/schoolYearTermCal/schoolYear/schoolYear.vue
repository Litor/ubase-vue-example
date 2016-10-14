<template>
  <section>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
  </section>
</template>
<script>
import service from './schoolYear.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapDatatable, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.schoolYear
      },
    }
  },

  events: {
    'schoolYear:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'schoolYear:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = Vue.t('schoolYear.propertyDialog.add_title')
      Vue.propertyDialog(this)
    },

    'schoolYear:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      this.pageopt.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip(this, 'noselect')
        return
      }
      Vue.toast(this, 'del')
    },

    'schoolYear:buttonlist:import': function() {
      Vue.dialog(this)
    },

    'schoolYear:table:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
    },

    'schoolYear:table:edit': function(row) {
      this.pageopt.propertyDialog.title = Vue.t('schoolYear.propertyDialog.edit_title')
      Vue.propertyDialog(this)
      this.$broadcast('schoolYearAddOrEdit:setvalue', row)
    },

    'schoolYear:table:del': function(row) {
      this.pageopt.selectedRows = [row]
      Vue.toast(this, 'del')
    },

    'schoolYear:tipdialog:del': function() {
      var checked = this.pageopt.selectedRows
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
