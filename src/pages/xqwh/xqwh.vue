<template>
  <article bh-layout-role="single">
    <h2>校区维护</h2>
    <section>
      <simple-search :search-event="pageopt.search.searchEvent" :placeholder="pageopt.search.placeholder"></simple-search>
      <button-list :buttons="pageopt.buttons"></button-list>
      <emap-datatable :options='pageopt.options' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script>
import { setTestState } from './xqwh.vuex'
import service from './xqwh.service'
import xqwh1 from './xqwh1.vue'
import addEdit from './addEdit.vue'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import buttonList from 'components/buttonList.vue'
import simpleSearch from 'components/simpleSearch.vue'
import propertyDialogForm from 'components/propertyDialogForm.vue'

export default {
  components: { EmapDatatable, buttonList, simpleSearch, propertyDialogForm, xqwh1, addEdit },
  vuex: {
    getters: {
      pageopt: function(state) {
        return state.app.xqwh
      }
    }
  },
  methods: {
    save() {
      this.$refs.form.save((formValue) => {

      })
    },
  },
  events: {
    'buttonlist:add': function() {
      this.$root.propertydialog(this)
    },

    'buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        $.bhDialog({
          type: 'warning',
          title: '您选择需要删除的信息吗？',
          buttons: [{
            text: '取消',
            callback: null
          }]
        });
      }
    },
    'search:top': function() {
      this.$root.paperdialog(this)
    },
    'table:edit': function(row) {
      this.$root.propertydialog(this)
      var self = this
      setTimeout(function() { self.$broadcast('form:setvalue', row) }, 1000)

    },
    'table:del': function() {
      $.bhDialog({
        type: 'warning',
        title: '您确定要删除所选信息吗？',
        buttons: [{
          text: '确定',
          callback: () => {

            console.log(checked)
          }
        }, {
          text: '取消',
          callback: null
        }]
      });
    },
    'propertydialog:ok': function() {
      alert()
    }
  }
}
</script>
