<template>
  <article bh-layout-role="single">
    <h2>{{$t('postSetting.title')}}</h2>
    <section>
      <template v-if="pageopt.baseInfo.totalCount == 0">
        <div class="cus-empty">
          <img src="../../statics/images/empty.png">
          <div class="cus-empty-tip bh-mv-16">{{$t('postSetting.empty.tip')}}</div>
          <a href="javascript:void(0);" class="bh-btn bh-btn-primary waves-effect">{{$t('postSetting.empty.createButton')}}</a>
        </div>
      </template>
      <template v-else>
        <div class="cus-tip bh-mb-8">{{$t('postSetting.userTip')}}</div>
        <div>
          <div class="post-level-label">{{$t('postSetting.leftTree.postLevel')}}:</div>
          <div class="post-level-value bh-label-radio-group">
            <div class="bh-label-radio" @click="filterPost()">{{$t('postSetting.leftTree.all')}}</div>
            <div class="bh-label-radio" v-for="item in pageopt.baseInfo.levelList" @click="filterPost(item.id)">{{item.name}}</div>
          </div>
        </div>
        <div class="bh-mv-16">
          <bh-button type="primary" @click="create" :small="false">{{$t('postSetting.buttonList.create')}}</bh-button>
        </div>
        <emap-card :options='pageopt.emapCard' v-ref:table></emap-card>
      </template>
    </section>
  </article>
</template>
<script>
import service from './postSetting.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapCard, bhButton },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.postSetting
      }
    }
  },

  created() {
    service.getBaseInfo().then(function(res) {
      Vue.updateState('postSetting', { 'baseInfo': res })
    })
  },

  methods: {
    filterPost(id) {
      if (id !== undefined) {
        this.$refs.table.reload({ postLevel: id })
      } else {
        this.$refs.table.reload()
      }
    },

    create() {
      Vue.dialog({
        currentView: 'postAddOrEdit',
        okEvent: 'postAddOrEdit:save',
        title: Vue.t('postSetting.dialog.title'),
        height: '500px'
      })
    }
  },

  ready() {
    var self = this;
    $(this.$el).on('click', '.card-opt-button', function(e) {
      var row = $(this).data('row');
      var event = $(this).attr('data-event');
      self.$dispatch(event, row);
    })
  },

  events: {
    'postSetting:card:edit': function(row) {
      Vue.dialog({
        currentView: 'postAddOrEdit',
        okEvent: 'postAddOrEdit:save',
        title: Vue.t('postSetting.dialog.edit') + '-' + row.name,
        height: '500px'
      })
      Vue.broadcast('postAddOrEdit:setvalue', row)
    },

    'postSetting:card:del': function(row) {
      this.pageopt.willDeleteWids = [{ wid: row.wid }]
      if (row.hasMember) {
        Vue.toast({
          type: 'danger',
          title: Vue.t('postSetting.toast.deldeny'),
          content: Vue.t('postSetting.toast.deldenytip'),
          buttons: [{ text: Vue.t('postSetting.toast.iknow') }]
        })
      } else {
        Vue.toast({
          type: 'warning',
          content: ' ',
          title: Vue.t('postSetting.toast.delpass'),
          okEvent: 'postSetting:toast:del'
        })
      }
    },

    'postSetting:toast:del': function() {
      var checked = this.pageopt.willDeleteWids
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('postSetting.tip.del_success')
        })
        this.$refs.table.reload()
      })
    }
  }
}
</script>
<style type="text/css">
.postSetting-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.postSetting-card .sc-panel-thingNoImg-1-container {
  padding-right: 4px;
}

.postSetting-card .sc-panel-thingNoImg-1-title {
  max-width: 155px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin-right: 0;
  vertical-align: middle;
}

.cus-tip {
  width: 100%;
  padding: 8px;
  color: #666;
  border-color: #FFEACC;
  background-color: #FFF7EB;
}

.bh-label-radio-group:after {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.cus-empty {
  text-align: center;
}

.cus-empty-tip {
  font-size: 22px;
  color: #666;
}

.post-level-label,
.post-level-value {
  display: inline-block;
  vertical-align: middle;
}
</style>
