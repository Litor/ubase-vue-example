<template>
  <simple-search></simple-search>
  <button-list></button-list>
  <emap-grid :options='pageopt.emapDatatable' v-ref:table></emap-grid>
</template>
<script>
import pageConfig from './xzwh.config'
import service from './xzwh.service'
import addedit from '../addedit/addedit.vue'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import buttonList from 'components/buttonList.vue'
import simpleSearch from 'components/simpleSearch.vue'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'

export default {
  components: { EmapDatatable, buttonList, simpleSearch, addedit, EmapGrid },

  data: function() {
    return pageConfig
  },

  events: {
    'xzwh:buttonlist:add': function() {
      this.$root.propertydialog(this)
    },

    'xzwh:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        this.$root.tipDialog(this, 'del')
      }
    },

    'xzwh:search:top': function() {
      this.$root.paperdialog(this)
    },

    'xzwh:table:edit': function(row) {
      this.$root.propertydialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    'xzwh:table:del': function() {
      this.$root.tipDialog(this, 'del')
    },
    'xzwh:tipdialog:del': function() {
      alert(33)
    },
    'xzwh:buttonlist:import': function() {
      this.$root.paperdialog(this)
    }
  }
}
</script>
