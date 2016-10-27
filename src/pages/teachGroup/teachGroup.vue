<template>
  <article bh-layout-role="single">
    <h2 v-html="pageState.title"></h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('teachGroup.simpleSearch.placeholder')" :search-event="'teachGroup:search:top'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('teachGroup.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('teachGroup.buttonList.del')}}</bh-button>
        <bh-button type="primary" @click="importt" :small="false">{{$t('teachGroup.buttonList.import')}}</bh-button>
      </div>
      <emap-datatable :options='pageState.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  import service from './teachGroup.service'
  import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
  import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
  import bhButton from 'bh-vue/bh-button/bhButton.vue'

  export default {
    components: {EmapDatatable, simpleSearch, bhButton},

    vuex: {
      getters: {
        pageState: function (state) {
          return state.teachGroup
        },
      }
    },

    methods:{
      add(){
        Vue.propertyDialog({
          currentView: 'teachGroupAddOrEdit',
          okEvent: '_SUBPAGE_SAVE_EVENT_',
          title: Vue.t('teachGroup.propertyDialog.add_title')
        })
      },
      del(){
        var checked = this.$refs.table.checkedRecords()
        this.pageState.selectedRows = checked
        if (checked.length === 0) {
          Vue.tip( {
            state: 'warning',
            content: Vue.t('teachGroup.tip.noselect')
          })
          return
        }
        Vue.toast( {
          type: 'warning',
          title: Vue.t('teachGroup.toast.del'),
          okEvent: 'teachGroup:tipdialog:del'
        })
      },
      importt(){
        Vue.dialog({
          currentView: 'teachGroup',
          okEvent: '_SUBPAGE_SAVE_EVENT_',
          title: Vue.t('teachGroup.dialog.title')
        })
      }
    },

    events: {
      'teachGroup:search:top': function () {
        var keyword = this.$refs.simplesearch.keyword
        this.$refs.table.reload({searchContent: keyword})
      },

      'teachGroup:table:detail': function (row) {
        Vue.propertyDialog({
          currentView: 'teachGroupAddOrEdit',
          okEvent: '_SUBPAGE_SAVE_EVENT_',
          title: row['name']
        })
      },

      'teachGroup:table:edit': function (row) {
        Vue.propertyDialog({
          currentView: 'teachGroupAddOrEdit',
          okEvent: '_SUBPAGE_SAVE_EVENT_',
          title: Vue.t('teachGroup.propertyDialog.edit_title')
        })
        Vue.broadcast('teachGroupAddOrEdit:setvalue', row)
      },

      'teachGroup:table:del': function (row) {
        this.pageState.selectedRows = [row]
        Vue.toast({
          type: 'warning',
          title: Vue.t('teachGroup.toast.del'),
          okEvent: 'teachGroup:tipdialog:del'
        })
      },

      'teachGroup:tipdialog:del': function () {
        var checked = this.pageState.selectedRows
        var wids = []

        checked.forEach((item) => {
          wids.push(item.wid)
        })

        service.delete(wids).then(({ data }) => {
          Vue.tip( {
            state: 'success',
            content: Vue.t('teachGroup.tip.del_success')
          })
          this.$refs.table.reload()
        })
      }

    }
  }
</script>
