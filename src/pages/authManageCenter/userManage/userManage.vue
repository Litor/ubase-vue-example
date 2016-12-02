<template>
  <section>
    <simple-search v-ref:simplesearch :placeholder="$t('userManage.simpleSearch.placeholder')"
                   :search-event="'userManage:search:top'"></simple-search>
    <div>
      <div class="bh-dropdown  bh-dropdown-primary bh-pull-left bh-mv-16"
           bh-dropdown-role="bhDropdown">
        <button class="bh-btn bh-btn-primary " type="button" bh-dropdown-role="bhDropdownBtn">重置密码</button>
        <ul class="bh-dropdown-menu" bh-dropdown-role="bhDropdownMenu">
          <li>
            <a href="javascript:void(0)" @click="resetBySelected()">重置勾选数据</a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="resetBySearch()">重置查询结果数据</a>
          </li>
        </ul>
      </div>
      <div class="bh-dropdown  bh-dropdown-primary bh-pull-left bh-mv-16 bh-mh-8"
           bh-dropdown-role="bhDropdown">
        <button class="bh-btn bh-btn-primary" type="button" bh-dropdown-role="bhDropdownBtn">设置状态</button>
        <ul class="bh-dropdown-menu" bh-dropdown-role="bhDropdownMenu">
          <li>
            <a href="javascript:void(0)" @click="setStateBySelected()">重置勾选数据</a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="setStateBySearch()">重置查询结果数据</a>
          </li>
        </ul>
      </div>
    </div>
    <emap-datatable :options='pageState.emapDatatable' v-ref:table></emap-datatable>
  </section>
</template>
<script type="text/ecmascript-6">
  import service from './userManage.service'
  import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
  import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'

  export default {
    components: {EmapDatatable, simpleSearch},

    vuex: {
      getters: {
        pageState: function (state) {
          return state.userManage
        },
      }
    },

    route: {
      activate: function (transition) {
        Promise.all([service.getDicts()]).then(function (res) {
          Vue.updateState('userManage', {dicts: res[0]})
          transition.next();
        })
      }
    },

    ready(){
      $(this.$el).on('click', '.cus-table-mobile', function (event) {
        Vue.updateState('userManage', {relieveMobieId: $(event.currentTarget).attr('data-wid')})
        Vue.pop({
          selector: event.currentTarget,
          currentView: 'relieveMobilePage'
        })
      })

      $(this.$el).on('click', '.cus-table-status', function (event) {
        Vue.updateState('userManage', {statusChangeID: $(event.currentTarget).attr('data-wid')})
        Vue.pop({
          selector: event.currentTarget,
          width: 400,
          currentView: 'stateSettingPage'
        })
      })
    },

    methods: {
      resetBySearch() {
        var keyword = this.$refs.simplesearch.keyword
        Vue.updateState('userManage', {resetPassType: 'resetBySearch'})
        Vue.dialog({
          title: '警告',
          width: '400px',
          height: '235px',
          currentView: 'pwdResetWarningPage',
          okEvent: 'userManage:toast:resetBySearch'
        })
      },

      resetBySelected() {
        var checked = this.$refs.table.checkedRecords()
        this.pageState.selectedRows = checked
        if (checked.length === 0) {
          Vue.tip({
            state: 'warning',
            content: Vue.t('userManage.tip.noselect')
          })
          return
        }

        Vue.updateState('userManage', {resetPassType: 'resetBySelected'})
        Vue.dialog({
          title: '警告',
          width: '400px',
          height: '235px',
          currentView: 'pwdResetWarningPage',
          okEvent: 'userManage:toast:resetBySelected'
        })
      },

      setStateBySelected: function () {
        var checked = this.$refs.table.checkedRecords()
        this.pageState.selectedRows = checked

        if (checked.length === 0) {
          Vue.tip({
            state: 'warning',
            content: Vue.t('userManage.tip.noselect')
          })
          return
        }
        Vue.dialog({
          title: '设置状态',
          width: '400px',
          height: '400px',
          currentView: 'stateSettingPage',
          okEvent: 'userManage:toast:setStateBySelected'
        })
      },

      setStateBySearch: function () {
        var keyword = this.$refs.simplesearch.keyword

        Vue.dialog({
          title: '设置状态',
          width: '400px',
          height: '350px',
          currentView: 'stateSettingPage',
          okEvent: 'userManage:toast:setStateBySearch',
          buttons: []
        })
      }
    },

    events: {
      'userManage:search:top': function () {
        var keyword = this.$refs.simplesearch.keyword
        this.$refs.table.reload({searchContent: keyword})
      },

      'userManage:toast:resetBySelected': function () {
        var checked = this.pageState.selectedRows
        var wids = []

        checked.forEach((item) => {
          wids.push(item.wid)
        })

        service.resetCheckPass(wids).then(({ data }) => {
          Vue.tip({
            state: 'success',
            content: Vue.t('userManage.tip.del_success', {affected: data.affected})
          })
          this.$refs.table.reload()
        })

        Vue.dialog('hide')
      },

      'userManage:toast:resetBySearch': function () {
        var keyword = this.$refs.simplesearch.keyword
        service.resetResultPass({advanceContent: keyword}).then(({ data }) => {
          Vue.tip({
            state: 'success',
            content: Vue.t('userManage.tip.del_success', {affected: data.affected})
          })
          this.$refs.table.reload()
        })
        Vue.dialog('hide')
      }

    }
  }
</script>
<style>
  .cus-table-edit {
    cursor: pointer;
  }

  .cus-table-edit i {
    visibility: hidden;
    color: rgba(96, 190, 41, 1);
    vertical-align: text-top;
  }

  .cus-table-edit:hover i {
    visibility: visible;
  }
</style>
