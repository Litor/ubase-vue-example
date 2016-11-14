<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('departCategory.simpleSearch.placeholder')" :search-event="'departCategory:search:top'"></simple-search>
    <div class="bh-mv-16">
      <bh-button type="primary" @click="add" :small="false">{{$t('departCategory.buttonList.add')}}</bh-button>
      <bh-button type="primary" @click="del" :small="false">{{$t('departCategory.buttonList.del')}}</bh-button>
    </div>
    <emap-datatable :options='pageState.emapDatatable' v-ref:table></emap-datatable>
  </section>
</template>
<script  type="text/ecmascript-6">
import service from './departCategory.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapDatatable, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.departCategory
      },
    }
  },

  methods: {
    add() {
      Vue.propertyDialog({
        currentView: 'departCategoryAddOrEdit',
        okEvent: 'departCategoryAddOrEdit:save',
        title: Vue.t('departCategory.propertyDialog.add_title')
      })
    },

    del() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('departCategory.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('departCategory.toast.del'),
        okEvent: 'departCategory:tipdialog:del'
      })
    }
  },

  events: {
    'departCategory:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'departCategory:table:edit': function(row) {
      Vue.propertyDialog({
        currentView: 'departCategoryAddOrEdit',
        okEvent: 'departCategoryAddOrEdit:save',
        title: Vue.t('departCategory.propertyDialog.edit_title')
      })
      Vue.broadcast('departCategoryAddOrEdit:setvalue', row)
    },

    'departCategory:table:del': function(row) {
      this.pageState.selectedRows = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('departCategory.toast.del'),
        okEvent: 'departCategory:tipdialog:del'
      })
    },

    'departCategory:tipdialog:del': function() {
      var checked = this.$refs.table.checkedRecords()
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('departCategory.tip.del_success')
        })
        this.$refs.table.reload()
      })
    }

  }
}
</script>
