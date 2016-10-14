<template>
  <section>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
  </section>
</template>
<script>
import service from './departCategory.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapDatatable, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.departCategory
      },
    }
  },

  events: {
    'departCategory:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'departCategory:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = Vue.t('departCategory.propertyDialog.add_title')
      Vue.propertyDialog(this)
    },

    'departCategory:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        Vue.tip(this, 'noselect')
        return
      }
      Vue.toast(this, 'del')
    },

    'departCategory:table:edit': function(row) {
      this.pageopt.propertyDialog.title = Vue.t('departCategory.propertyDialog.edit_title')
      Vue.propertyDialog(this)
      this.$broadcast('departCategoryAddOrEdit:setvalue', row)
    },

    'departCategory:table:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tip(this, 'del_success')
        this.$refs.table.reload()
      })
    },

    'departCategory:tipdialog:del': function() {
      var checked = this.$refs.table.checkedRecords()
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
