<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('term.simpleSearch.placeholder')" :search-event="'term:search:top'"></simple-search>
    <div class="bh-mv-16">
      <bh-button type="primary" @click="add" :small="false">{{$t('term.buttonList.add')}}</bh-button>
      <bh-button type="primary" @click="del" :small="false">{{$t('term.buttonList.del')}}</bh-button>
      <bh-button type="primary" @click="importt" :small="false">{{$t('term.buttonList.import')}}</bh-button>
    </div>
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

  methods: {
    add() {
      Vue.propertyDialog({
        currentView: 'termAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('term.propertyDialog.add_title'),
      })
    },

    del() {
      var checked = this.$refs.table.checkedRecords()
      this.pageopt.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('term.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('term.toast.del'),
        okEvent: 'term:tipdialog:del'
      })
    },

    importt() {
      Vue.dialog(this)
    }
  },

  events: {
    'term:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'term:table:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog({
        currentView: 'termAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: row['name']
      })
    },

    'term:table:edit': function(row) {
      Vue.propertyDialog({
        currentView: 'termAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('term.propertyDialog.edit_title')
      })
      Vue.broadcast('termAddOrEdit:setvalue', row)
    },

    'term:table:del': function(row) {
      this.pageopt.selectedRows = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('term.toast.del'),
        okEvent: 'term:tipdialog:del'
      })
    },

    'term:tipdialog:del': function() {
      var checked = this.pageopt.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('term.tip.del_success')
        })
        this.$refs.table.reload()
      })
    }

  }
}
</script>
