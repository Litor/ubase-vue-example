<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
      <button-list :button-list="pageopt.buttonList"></button-list>
      <emap-grid :options='pageopt.emapGrid' v-ref:grid></emap-grid>
    </section>
  </article>
</template>
<script>
import service from './classs.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapGrid, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.classs
      },
    }
  },

  ready() {
    var self = this;
    $(this.$el).on('click', '.opt-button', function(e) {
      var row = $(this).data('row');
      var event = $(this).attr('data-event');
      self.$emit(event, row);
    })
  },

  events: {
    'classs:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'classs:buttonlist:add': function() {
      this.pageopt.paperDialog.title = Vue.t('classs.paperDialog.add_title')
      Vue.paperDialog(this)
    },

    'classs:buttonlist:del': function() {
      var checked = this.$refs.grid.getGrid().checkedRecords()
      this.pageopt.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip(this, 'noselect')
        return
      }
      Vue.toast(this, 'del')
    },

    'classs:grid:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
      this.$broadcast('classDetail:setvalue', row)
    },

    'classs:buttonlist:import': function() {
      Vue.dialog(this)
    },

    'classs:grid:edit': function(row) {
      this.pageopt.paperDialog.title = Vue.t('classs.paperDialog.edit_title')
      Vue.paperDialog(this)
      this.$broadcast('classAddOrEdit:setvalue', row)
    },

    'classs:grid:del': function(row) {
      this.pageopt.selectedRows = [row]
      Vue.toast(this, 'del')
    },

    'classs:tipdialog:del': function() {
      var checked = this.pageopt.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip(this, 'del_success')
        this.$refs.grid.reload()
      })
    },

    'classs:card:edit': function(row) {
      service.getByWid(row.wid).then((row) => {
        Vue.paperDialog(this)
        this.$broadcast('classAddOrEdit:setvalue', row)
      })
    },

    'classs:card:detail': function(row) {
      service.getByWid(row.wid).then((row) => {
        Vue.propertyDialog(this)
        this.$broadcast('classDetail:setvalue', row)
      })
    },

    'classs:card:del': function(row) {
      this.pageopt.selectedRows = [row]
      Vue.toast(this, 'del')
    }
  }
}
</script>
<style type="text/css">
.classs-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.classs-card .sc-panel-thingNoImg-1-container {
  padding-right: 4px;
}

.classs-card .sc-panel-thingNoImg-1-title {
  max-width: 155px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin-right: 0;
  vertical-align: middle;
}
</style>
