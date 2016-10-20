<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('deptRunType.simpleSearch.placeholder')" :search-event="'deptRunType:search:top'"></simple-search>
    <div class="bh-mv-16">
      <bh-button type="primary" @click="add" :small="false">{{$t('deptRunType.buttonList.add')}}</bh-button>
      <bh-button type="primary" @click="del" :small="false">{{$t('deptRunType.buttonList.del')}}</bh-button>
    </div>
    <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
  </section>
</template>
<script>
import service from './deptRunType.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapDatatable, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.deptRunType
      },
    }
  },

  methods: {
    add() {
      this.pageopt.propertyDialog.title = Vue.t('deptRunType.propertyDialog.add_title')
      Vue.propertyDialog({
        currentView: 'deptRunTypeAddOrEdit',
        okEvent: 'deptRunTypeAddOrEdit:save',
        title: Vue.t('deptRunType.propertyDialog.add_title')
      })
    },

    del() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('deptRunType.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('deptRunType.toast.del'),
        okEvent: 'deptRunType:tipdialog:del'
      })
    }
  },

  events: {
    'deptRunType:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'deptRunType:table:edit': function(row) {
      Vue.propertyDialog({
        currentView: 'deptRunTypeAddOrEdit',
        okEvent: 'deptRunTypeAddOrEdit:save',
        title: Vue.t('deptRunType.propertyDialog.edit_title')
      })
      Vue.broadcast('deptRunTypeAddOrEdit:setvalue', row)
    },

    'deptRunType:table:del': function(row) {
      this.pageopt.selectedRows = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('deptRunType.toast.del'),
        okEvent: 'deptRunType:tipdialog:del'
      })
    },

    'deptRunType:tipdialog:del': function() {
      var checked = this.$refs.table.checkedRecords()
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('deptRunType.tip.del_success')
        })
        this.$refs.table.reload()
      })
    }

  }
}
</script>
