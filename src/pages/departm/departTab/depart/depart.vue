<template>
  <section>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-grid :options='pageopt.emapGrid' v-ref:grid></emap-grid>
  </section>
</template>
<script>
import { setDepartFormReadOnly } from './departAddOrEdit/departAddOrEdit.vuex'
import service from './depart.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapGrid, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.depart
      },
    },

    actions: { setDepartFormReadOnly }
  },

  ready() {
    var self = this;
    $(this.$el).on('click', '.opt-button', function(e) {
      var row = $(this).data('row');
      var event = $(this).attr('data-event');
      self.$dispatch(event, row);
    })
  },

  events: {
    'depart:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'depart:buttonlist:add': function() {
      this.setDepartFormReadOnly(false)
      this.pageopt.paperDialog.title = Vue.t('depart.paperDialog.add_title')
      Vue.paperDialog(this)
    },

    'depart:buttonlist:del': function() {
      var checked = this.$refs.grid.getGrid().checkedRecords()
      if (checked.length === 0) {
        Vue.tip(this, 'noselect')
        return
      }
      Vue.toast(this, 'del')
    },

    'depart:buttonlist:import': function() {
      Vue.dialog(this)
    },

    'depart:grid:edit': function(row) {
      this.setDepartFormReadOnly(false)
      this.pageopt.paperDialog.title = Vue.t('depart.paperDialog.edit_title')
      Vue.paperDialog(this)
      this.$broadcast('departAddOrEdit:setvalue', row)
    },

    'depart:grid:del': function(row) {
      service.delete([row.wid]).then(({ data }) => {
        Vue.tip(this, 'del_success')
        this.$refs.grid.reload()
      })
    },

    'depart:grid:detail': function(row) {
      this.setDepartFormReadOnly(true)
      this.pageopt.paperDialog.title = Vue.t('depart.paperDialog.detail_title')
      Vue.paperDialog(this)
      this.$broadcast('departAddOrEdit:setvalue', row)
    },

    'depart:tipdialog:del': function() {
      var checked = this.$refs.grid.checkedRecords()
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip(this, 'del_success')
        this.$refs.grid.reload()
      })
    },

    'depart:card:edit': function(row) {
      console.log(row)
    }

  }
}
</script>
<style type="text/css">
.depart-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.depart-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.depart-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
