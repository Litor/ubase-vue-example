<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
      <button-list :button-list="pageopt.buttonList"></button-list>
      <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script>
import {setTitle} from './campusaddoredit/campusaddoredit.vuex'
import service from './campus.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapDatatable, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.campus
      },
    }
  },

  events: {
    'campus:table:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
    },

    'campus:buttonlist:add': function() {
      this.pageopt.propertyDialog.title = Vue.t('campus.propertyDialog.add_title')
      Vue.propertyDialog(this)
    },

    'campus:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      this.pageopt.willDeleteWids = checked
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'campus:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'campus:table:edit': function(row) {
      this.pageopt.propertyDialog.title = Vue.t('campus.propertyDialog.edit_title')
      Vue.propertyDialog(this)
      this.$broadcast('campusaddoredit:setvalue', row)
    },

    'campus:table:del': function(row) {
      this.pageopt.willDeleteWids = [row.wid]
      Vue.tipDialog(this, 'del')
    },

    'campus:tipdialog:del': function() {
      var checked = this.pageopt.willDeleteWids
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
