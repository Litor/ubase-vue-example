<template>
  <article bh-layout-role="single">
    <h2 v-html="title"></h2>
    <section>
      <simple-search></simple-search>
      <button-list></button-list>
      <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script>
import pageConfig from './subpage.config'
import service from './subpage.service'
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
    'xqwh:buttonlist:add': function() {
      this.$root.propertydialog(this)
    },

    'xqwh:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        this.$root.tipDialog(this, 'del')
      }
    },

    'xqwh:search:top': function() {
      this.$root.paperdialog(this)
    },

    'xqwh:table:edit': function(row) {
      this.$root.propertydialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    'xqwh:table:del': function() {
      this.$root.tipDialog(this, 'del')
    },
    'xqwh:tipdialog:del': function() {
      alert(33)
    },
    'xqwh:buttonlist:import':function(){
      this.$root.paperdialog(this)
    }
  }
}
</script>
