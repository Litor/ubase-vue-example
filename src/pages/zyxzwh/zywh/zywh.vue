<template>
  <div>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
  </div>
</template>
<script>
import service from './zywh.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'

export default {
  components: { EmapDatatable },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.zywh
      },
    }
  },

  events: {
    'zywh:table:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
    },

    'zywh:buttonlist:add': function() {
      this.pageopt.paperDialog.title = '新增专业'
      Vue.paperDialog(this)
    },

    'zywh:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'zywh:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'zywh:table:edit': function(row) {
      this.pageopt.paperDialog.title = '编辑专业'
      Vue.paperDialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    'zywh:table:del': function(row) {
      service.zyDelete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    },

    'zywh:tipdialog:del': function() {
      var checked = this.$refs.table.checkedRecords()
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.zyDelete(wids).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    },

    'zywh:buttonlist:import': function() {
      Vue.dialog(this)
    }
  }
}
</script>
