<template>
  <article bh-layout-role="single">
    <h2>校区维护</h2>
    <section>
      <simple-search :search-event="search.searchEvent" :placeholder="search.placeholder"></simple-search>
      <button-list :buttons="buttons"></button-list>
      <emap-datatable :options='options' @edit='edit' @del='del' v-ref:table></emap-datatable>
      <property-dialog-form v-ref:form :page-path='form.pagepath' :model-name='form.modelName'></property-dialog-form>
    </section>
  </article>
</template>
<script>
import { setTestState } from './xqwh.vuex'
import service from './xqwh.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import buttonList from 'components/buttonList.vue'
import simpleSearch from 'components/simpleSearch.vue'
import propertyDialogForm from 'components/propertyDialogForm.vue'

export default {
  components: { EmapDatatable, buttonList, simpleSearch, propertyDialogForm },
  data: function() {
    return {
      paperdialog: 'simpleSearch',
      buttons: [{
        text: '新增',
        click: 'buttonlist:add',
        primary: true
      }, {
        text: '删除',
        click: 'buttonlist:del'
      }],
      search: {
        placeholder: '请输入',
        searchEvent: this.searchEvent
      },
      form: {
        pagepath: service.api.campus_addOrEdit_meta,
        modelName: 'campus_addOrEdit'
      },
      options: {
        pagePath: service.api.campus_getList_meta,
        url: service.api.campus_getList,
        action: 'campus_getList',
        method: 'POST',
        customColumns: this.getCustomColumns(),
        checkable: true,
        sortable: true,
        columnsReorder: true,
        operations: {
          title: '操作',
          width: 100,
          items: [{
            title: '编辑',
            name: 'edit',
            type: 'link'
          }, {
            title: '删除',
            name: 'del',
            type: 'link'
          }]
        }
      }
    }
  },

  methods: {
    getCustomColumns() {
      var customColumns = [{
        colField: 'status',
        type: 'tpl',
        width: 50,
        column: {
          cellsRenderer: function(row, column, value, rowData) {
            return value ? '有效' : '无效';
          }
        }
      }, {
        colField: 'name',
        type: 'tpl',
        width: 300,
        column: {
          cellsRenderer: function(row, column, value, rowData) {
            return '<a href="#/bzxq" target="_blank" data-action="save-id" data-wid="' + rowData.WID + '">' + value + '</span>';
          }
        }
      }];
      return customColumns;
    },
    // 新增记录
    add() {

    },

    save() {
      this.$refs.form.save((formValue) => {

      })
    },

    edit(row) {
      this.$refs.form.show(row)
    },

    del(row) {
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

    searchEvent() {
      this.$root.paperdialog(this)
    }
  },
  events: {
    'buttonlist:add': function() {
      this.$refs.form.show()
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
    }
  }
}
</script>
