<template>
  <article bh-layout-role="single">
    <h2>{{$t('campus.title')}}</h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('campus.simpleSearch.placeholder')" :search-event="'campus:search'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('campus.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('campus.buttonList.del')}}</bh-button>
      </div>
      <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script>
import service from './campus.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapDatatable, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.campus
      },
    }
  },

  methods: {
    add() {
      Vue.propertyDialog({
        title: Vue.t('campus.propertyDialog.add_title'),
        currentView: 'campusaddoredit',
        okEvent: 'campusaddoredit:save'
      })
    },

    del() {
      var checked = this.$refs.table.checkedRecords()
      this.pageopt.willDeleteWids = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('campus.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('campus.toast.del'),
        okEvent: 'campus:tipdialog:del'
      })
    }
  },

  events: {
    'campus:search': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },
    'campus:table:edit': function(row) {
      Vue.propertyDialog({
        title: Vue.t('campus.propertyDialog.edit_title'),
        currentView: 'campusaddoredit',
        okEvent: 'campusaddoredit:save'
      })
      Vue.broadcast('campusaddoredit:setvalue', row)
    },

    'campus:table:del': function(row) {
      this.pageopt.willDeleteWids = [{ wid: row.wid }]
      Vue.toast({
        type: 'warning',
        title: Vue.t('campus.toast.del'),
        okEvent: 'campus:tipdialog:del'
      })
    },

    'campus:tipdialog:del': function() {
      var checked = this.pageopt.willDeleteWids
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('campus.tip.del_success')
        })
        this.$refs.table.reload()
      })
    }
  }
}
</script>
