<template>
  <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
  <button-list :button-list="pageopt.buttonList"></button-list>
  <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
</template>
<script>
import service from './dwbbwh.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'

export default {
  components: { EmapDatatable },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.dwbbwh
      }
    },
  },

  events: {
    'xqwh:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = '新增单位办别'
      Vue.propertyDialog(this)
    },

    'xqwh:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'xqwh:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'xqwh:table:edit': function(row) {
      this.pageopt.propertyDialog.title = '编辑单位办别'
      Vue.propertyDialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    'xqwh:table:del': function(row) {
      service.deptRunTypeDelete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    },
    'xqwh:tipdialog:del': function() {
      var checked = this.$refs.table.checkedRecords()
      console.log(checked)
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.deptRunTypeDelete(wids).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    },
    'xqwh:buttonlist:import': function() {
      Vue.paperDialog(this)
    },
    'addedit:save': function() {

    }
  }
}
</script>
