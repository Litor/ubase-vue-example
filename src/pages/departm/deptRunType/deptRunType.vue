<template>
  <section>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
  </section>
</template>
<script>
import service from './deptRunType.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapDatatable, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.deptRunType
      },
    }
  },

  events: {
    'deptRunType:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'deptRunType:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = Vue.t('deptRunType.propertyDialog.add_title')
      Vue.propertyDialog(this)
    },

    'deptRunType:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'deptRunType:table:edit': function(row) {
      this.pageopt.propertyDialog.title = Vue.t('deptRunType.propertyDialog.edit_title')
      Vue.propertyDialog(this)
      this.$broadcast('deptRunTypeAddOrEdit:setvalue', row)
    },

    'deptRunType:table:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    },

    'deptRunType:tipdialog:del': function() {
      var checked = this.$refs.table.checkedRecords()
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
