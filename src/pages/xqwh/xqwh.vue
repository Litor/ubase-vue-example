<template>
  <article bh-layout-role="single">
    <h2>校区维护</h2>
    <section>
      <simple-search></simple-search>
      <button-list></button-list>
      <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script>
import { setTestState } from './xqwh.vuex'
import service from './service'
import addedit from './addedit.vue'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import buttonList from 'components/buttonList.vue'
import simpleSearch from 'components/simpleSearch.vue'
import propertyDialogForm from 'components/propertyDialogForm.vue'

export default {
  components: { EmapDatatable, buttonList, simpleSearch, propertyDialogForm, addedit },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.xqwh
      }
    }
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
    }
  }
}
</script>
