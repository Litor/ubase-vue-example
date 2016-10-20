<template>
  <article bh-layout-role="single">
    <h2>{{$t('gradeMajorAddOrEdit.title')}}</h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('gradeMajorAddOrEdit.simpleSearch.placeholder')" :search-event="'gradeMajorAddOrEdit:search:top'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('gradeMajorAddOrEdit.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('gradeMajorAddOrEdit.buttonList.del')}}</bh-button>
        <bh-button type="primary" @click="importt" :small="false">{{$t('gradeMajorAddOrEdit.buttonList.import')}}</bh-button>
        <bh-button type="primary" @click="exportt" :small="false">{{$t('gradeMajorAddOrEdit.buttonList.export')}}</bh-button>
      </div>
      <emap-grid :options='pageopt.emapGrid' v-ref:grid></emap-grid>
    </section>
  </article>
</template>
<script>
import service from './gradeMajorAddOrEdit.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapGrid, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.gradeMajorAddOrEdit
      },
    }
  },

  methods: {
    add() {
      Vue.paperDialog({
        currentView: 'gradeMajorAddOrEdit',
        title: Vue.t('gradeMajorAddOrEdit.paperDialog.add_title')
      })
    },

    del() {
      var checked = this.$refs.grid.getGrid().checkedRecords()
      this.pageopt.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('gradeMajorAddOrEdit.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('gradeMajorAddOrEdit.toast.del'),
        okEvent: 'gradeMajorAddOrEdit:tipdialog:del'
      })
    },

    importt() {
      Vue.dialog({
        currentView: 'gradeMajorAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('gradeMajorAddOrEdit.dialog.title')
      })
    },

    exportt() {
      console.log('export')
    }
  },

  events: {
    'gradeMajorAddOrEdit:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.grid.reload({ searchContent: keyword })
    },

    'gradeMajorAddOrEdit:grid:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog({
        currentView: 'gradeMajorAddOrEdit',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('gradeMajorAddOrEdit.propertyDialog.title'),
        footerShow: false
      })
    },

    'gradeMajorAddOrEdit:grid:edit': function(row) {
      Vue.paperDialog({
        currentView: 'gradeMajorAddOrEdit',
        title: Vue.t('gradeMajorAddOrEdit.paperDialog.edit_title')
      })
      Vue.broadcast('addedit:setvalue', row)
    },

    'gradeMajorAddOrEdit:grid:del': function(row) {
      this.pageopt.willDeleteWids = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('gradeMajorAddOrEdit.toast.del'),
        okEvent: 'gradeMajorAddOrEdit:tipdialog:del'
      })
    },

    'gradeMajorAddOrEdit:tipdialog:del': function() {
      var checked = this.pageopt.willDeleteWids
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('gradeMajorAddOrEdit.tip.del_success')
        })
        this.$refs.grid.reload()
      })
    }

  }
}
</script>
<style type="text/css">
.gradeMajorAddOrEdit-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.gradeMajorAddOrEdit-card .sc-panel-thing-1-container {
  padding-right: 4px;
}

.gradeMajorAddOrEdit-card .sc-panel-thing-1-title {
  width: 158px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
