<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('schoolYear.simpleSearch.placeholder')" :search-event="'schoolYear:search:top'"></simple-search>
    <div class="bh-mv-16">
      <bh-button type="primary" @click="add" :small="false">{{$t('schoolYear.buttonList.add')}}</bh-button>
      <bh-button type="primary" @click="del" :small="false">{{$t('schoolYear.buttonList.del')}}</bh-button>
      <bh-button type="primary" @click="importt" :small="false">{{$t('schoolYear.buttonList.import')}}</bh-button>
    </div>
    <emap-datatable :options='pageState.emapDatatable' v-ref:table></emap-datatable>
  </section>
</template>
<script  type="text/ecmascript-6">
import service from './schoolYear.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapDatatable, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.schoolYear
      },
    }
  },

  methods: {
    add() {
      Vue.propertyDialog({
        currentView: 'schoolYearAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('schoolYear.propertyDialog.add_title'),
      })
    },

    del() {
      var checked = this.$refs.table.checkedRecords()
      this.pageState.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('schoolYear.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('schoolYear.toast.del'),
        okEvent: 'schoolYear:tipdialog:del'
      })
    },

    importt() {
      Vue.dialog(this)
    }
  },

  events: {
    'schoolYear:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'schoolYear:table:detail': function(row) {
      Vue.propertyDialog({
        currentView: 'schoolYearAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: row['name'],
      })
    },

    'schoolYear:table:edit': function(row) {
      Vue.propertyDialog({
        currentView: 'schoolYearAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('schoolYear.propertyDialog.edit_title')
      })
      Vue.broadcast('schoolYearAddOrEdit:setvalue', row)
    },

    'schoolYear:table:del': function(row) {
      this.pageState.selectedRows = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('schoolYear.toast.del'),
        okEvent: 'schoolYear:tipdialog:del'
      })
    },

    'schoolYear:tipdialog:del': function() {
      var checked = this.pageState.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('schoolYear.tip.del_success')
        })
        this.$refs.table.reload()
      })
    }

  }
}
</script>
