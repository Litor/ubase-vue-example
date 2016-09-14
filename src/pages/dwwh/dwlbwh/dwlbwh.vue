<template>
  <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
  <button-list :button-list="pageopt.buttonList"></button-list>
  <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
</template>
<script>
import service from './dwlbwh.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'

export default {
  components: { EmapDatatable },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.dwlbwh
      }
    },
  },

  events: {
    'dwlbwh:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = '新增单位类别'
      Vue.propertyDialog(this)
    },

    'dwlbwh:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'dwlbwh:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'dwlbwh:table:edit': function(row) {
      this.pageopt.propertyDialog.title = '编辑单位类别'
      Vue.propertyDialog(this)
      this.$broadcast('dwlbaddedit:setvalue', row)
    },

    'dwlbwh:table:del': function(row) {
      service.departCategoryDelete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    },
    'dwlbwh:tipdialog:del': function() {
      var checked = this.$refs.table.checkedRecords()
      console.log(checked)
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.departCategoryDelete(wids).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    }

  }
}
</script>
