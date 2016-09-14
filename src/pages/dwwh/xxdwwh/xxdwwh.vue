<template>
  <div>
    <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
    <button-list :button-list="pageopt.buttonList"></button-list>
    <emap-grid :options='pageopt.emapDatatable' v-ref:table></emap-grid>
  </div>
</template>
<script>
import { setTitle as setXxdwAddEditTitle } from './xxdwaddedit/xxdwaddedit.vuex'
import service from './xxdwwh.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'

export default {
  components: { EmapDatatable, EmapGrid },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.xxdwwh
      }
    },
    actions: {
      setXxdwAddEditTitle
    }
  },

  ready() {
    var self = this
    $(this.$el).on('click', '.opt-button', function(e) {
      var _this = $(this);
      var row = JSON.parse(_this.attr('data-row'))
      var name = _this.attr('data-name');
      self.$dispatch(name, row)
    })
  },

  events: {
    'xxdwwh:card:edit': function(xx) {
      console.log(xx)
    },
    'xxdwwh:buttonlist:add': function() {
      this.setXxdwAddEditTitle('新增学校单位')
      Vue.paperDialog(this)
    },

    'xxdwwh:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      if (checked.length === 0) {
        Vue.tipPop(this, 'noselect')
        return
      }
      Vue.tipDialog(this, 'del')
    },

    'xxdwwh:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    'xxdwwh:table:edit': function(row) {
      this.setXxdwAddEditTitle('编辑学校单位')
      Vue.paperDialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    'xxdwwh:table:del': function(row) {
      service.departDelete([row.wid]).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    },
    'xxdwwh:tipdialog:del': function() {
      var checked = this.$refs.table.checkedRecords()
      console.log(checked)
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.departDelete(wids).then(({ data }) => {
        Vue.tipPop(this, 'del_success')
        this.$refs.table.reload()
      })
    },
    'xxdwwh:buttonlist:import': function() {
      Vue.paperDialog(this)
    }
  }
}
</script>
<style type="text/css">
.xxdwwh-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.xxdwwh-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.xxdwwh-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
