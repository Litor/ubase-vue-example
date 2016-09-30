<template>
  <section>
    <div class="bh-form-group">
      <label class="bh-form-label">选择年级：</label>
      <div class="bh-ph-8 major-select">
        <bh-dropdown :source='pageopt.search.source' :current.sync='pageopt.search.current' display-member='name' value-member='wid' @change='onselect'></bh-dropdown>
      </div>
    </div>
    <bh-choose v-ref:choose1 :left-source-url='pageopt.leftSource.url' :left-source-action="pageopt.leftSource.root" :leftcells-renderer='leftcellsRenderer' :id="pageopt.leftSource.id" :right-source-url='pageopt.leftSource.url' :rightcells-renderer='leftcellsRenderer' :right-source-action="pageopt.leftSource.root" :nicescroll="false">
    </bh-choose>
  </section>
</template>
<script>
import service from './gradeAdd.service'
import BhChoose from 'bh-vue/bh-choose/bhChoose.vue'
import bhDropdown from 'bh-vue/bh-dropdown/bhDropdown.vue'

export default {
  components: { BhChoose, bhDropdown },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.gradeAdd
      },
    }
  },

  methods: {
    onselect: function() {

    },
    leftcellsRenderer: function(row, column, value, rowData) {

      var html = '<div>';
      html += '<div row="' + row + '" class="bh-col-md-2"></div>';
      html += '<div class="bh-col-md-8">' + rowData.name + '</div>';
      html += '<div class="bh-col-md-2">' + rowData.calories + '</div>';
      html += '</div>';
      return html;
    },

  },

  events: {
    'gradeAdd:save': function() {
      console.log(this.$refs.choose1.getChecked())
      Vue.dialog('hide')
    }
  }
}
</script>

<style type="text/css" scope>
  .major-select{
    width: 200px;
    display: inline-block;
    vertical-align: bottom;
  }
</style>
