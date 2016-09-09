<template>
  <simple-search></simple-search>
  <button-list></button-list>
  <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
</template>
<script>
import pageConfig from './zywh.config'
import service from './zywh.service'
import addedit from '../addedit/addedit.vue'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import buttonList from 'components/buttonList.vue'
import simpleSearch from 'components/simpleSearch.vue'

export default {
  components: { EmapDatatable, buttonList, simpleSearch, addedit },

  data: function() {
    return pageConfig
  },

  events: {
    'zywh:buttonlist:add': function() {
      this.$root.propertydialog(this)
    },

    'zywh:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        this.$root.tipDialog(this, 'del')
      }
    },

    'zywh:search:top': function() {
      this.$root.paperdialog(this)
    },

    'zywh:table:edit': function(row) {
      this.$root.propertydialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    'zywh:table:del': function() {
      this.$root.tipDialog(this, 'del')
    },
    'zywh:tipdialog:del': function() {
      alert(33)
    },
    'zywh:buttonlist:import': function() {
      this.$root.paperdialog(this)
    }
  }
}
</script>
