<template>
  <article bh-layout-role="single">
    <h2>{{$t('postSetting.title')}}</h2>
    <section>
      <template v-if="ps.baseInfo.totalCount == 0">
        <div class="cus-empty">
          <img src="../../../statics/images/empty.png">
          <div class="cus-empty-tip bh-mv-16">{{$t('postSetting.empty.tip')}}</div>
          <a href="javascript:void(0);" class="bh-btn bh-btn-primary waves-effect">{{$t('postSetting.empty.createButton')}}</a>
        </div>
      </template>
      <template v-else>
        <div class="cus-tip bh-mb-8">{{$t('postSetting.userTip')}}</div>
        <div>
          <div class="post-level-label">{{$t('postSetting.leftTree.postLevel')}}:</div>
          <div class="post-level-value bh-label-radio-group">
            <div class="bh-label-radio bh-active" @click="filterPost('-1')">{{$t('postSetting.leftTree.all')}}</div>
            <div class="bh-label-radio" v-for="item in ps.baseInfo.levelList" @click="filterPost(item.id)">
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="bh-mv-16">
          <bh-button type="primary" @click="create" :small="false">{{$t('postSetting.buttonList.create')}}</bh-button>
        </div>
        <div>
          <div class="sc-panel-thingNoImg-1 bh-mr-8 bh-mb-8 postSetting-card" v-for="row in ps.postList">
            <div class="sc-panel-thingNoImg-1-container bh-animate-all bh-animate-fast">
              <div class="sc-panel-thingNoImg-1-description">
                <div class="sc-panel-thingNoImg-1-header">
                  <div class="sc-panel-thingNoImg-1-title"><span v-if="row.preinstall"><i
                    class="iconfont icon-star"></i></span>{{row.name}}
                  </div>
                  <a href="javascript:void(0);" class="bh-tag bh-tag-{{row.status?'success':'warning'}}">{{row.status?'已使用':'未使用'}}</a>
                </div>
                <div class="sc-panel-thingNoImg-1-subject">
                  <div class="sc-panel-thingNoImg-1-subjectKey sc-width-50">{{$t('postSetting.card.level')}}</div>
                  <div class="sc-panel-thingNoImg-1-subjectValue postSetting-card-value">{{levelDispaly(row.level)}}</div>
                </div>
                <div class="sc-panel-thingNoImg-1-subject">
                  <div class="sc-panel-thingNoImg-1-subjectKey sc-width-50">{{$t('postSetting.card.personInCharge')}}
                  </div>
                  <div class="sc-panel-thingNoImg-1-subjectValue postSetting-card-value">
                    {{row.personInCharge_DISPLAY}}
                  </div>
                </div>
              </div>
              <div class="sc-panel-thingNoImg-1-operate bh-animate-bottom bh-animate-fast">
                <span class="bh-mh-4 card-opt-button" @click="editPost(row)">{{$t('postSetting.card.edit')}}</span><span
                v-if="!row.preinstall"> | <span class="bh-mh-4 card-opt-button" @click="deletePost(row)">{{$t('postSetting.card.del')}}</span></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  import service from './postSetting.service'
  import {bhButton, listView} from 'bh-vue'

  export default {
    components: {bhButton, listView},

    computed: {
      ps(){
        return this.$store.state.postSetting
      }
    },

    ready(){
      this.filterPost('-1')
    },

    methods: {
      // 请求后端接口 获取岗位列表
      getPostList(postLevel){
        if (postLevel) {
          this.ps.currentLevel = postLevel
        }
        service.getPostList({postLevel: this.ps.currentLevel}).then((res) => {
          this.ps.postList = res
        })
      },

      // 通过岗位级别过滤
      filterPost(id) {
        this.getPostList(id)
      },

      // 创建新的岗位
      create() {
        Vue.dialog({
          currentView: 'postAddOrEdit',
          okEvent: 'postAddOrEdit.save',
          title: Vue.t('postSetting.dialog.title'),
          height: '500px'
        })
      },

      // 编辑岗位
      editPost(row){
        Utils.dialog({
          currentView: 'postAddOrEdit',
          okEvent: 'postAddOrEdit.save',
          title: Vue.t('postSetting.dialog.edit') + '-' + row.name,
          height: '500px'
        })
        Ubase.invoke('postAddOrEdit.setValue', row)
      },

      // 删除岗位
      deletePost(row){
        this.ps.willDeleteWids = [row]
        if (row.hasMember) {
          Vue.toast({
            type: 'danger',
            title: Vue.t('postSetting.toast.deldeny'),
            content: Vue.t('postSetting.toast.deldenytip'),
            buttons: [{text: Vue.t('postSetting.toast.iknow')}]
          })
        } else {
          Vue.toast({
            type: 'warning',
            content: ' ',
            title: Vue.t('postSetting.toast.delpass'),
            okEvent: 'postSetting.confirmDelete'
          })
        }
      },

      confirmDelete() {
        var checked = this.ps.willDeleteWids
        var wids = []

        checked.forEach((item) => {
          wids.push(item.wid)
        })

        service.delete(wids).then((res) => {
          console.log(res)
          if (res.code != '200') {
            Vue.tip({
              state: 'danger',
              content: res.message || Vue.t('postSetting.tip.delFail')
            })
            return
          }

          Vue.tip({
            state: 'success',
            content: Vue.t('postSetting.tip.del_success')
          })
          this.getPostList()
        })
      },

      levelDispaly(level){
        var selected = _.find(this.ps.baseInfo.levelList,  (item)=> {
          return item.id == level
        })

        return selected && selected.name
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

  .sc-panel-thingNoImg-1-title i {
    color: #f4b865;
  }
</style>
