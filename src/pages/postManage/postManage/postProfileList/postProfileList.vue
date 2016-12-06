<template>
  <div>
    <div v-if="ps.loading === false">
      <div v-if="treeSelectedNode.value != '4'">
        <div v-for="row in ps.postList">
          <div class="sc-panel-thingNoImg-1 bh-mr-8 bh-mb-8 postProfile2List-card">
            <div class="sc-panel-thingNoImg-1-container bh-animate-all bh-animate-fast">
              <div class="sc-panel-thingNoImg-1-description">
                <div class="sc-panel-thingNoImg-1-header">
                  <div class="sc-panel-thingNoImg-1-title">{{row.name}}</div>
                  <a href="javascript:void(0);" class="bh-tag bh-tag-primary">{{$t('postProfileList.cardStaffTip', {count:row.staffs.length})}}</a>
                </div>
                <div class="sc-panel-thingNoImg-1-subject">
                  <div class="sc-panel-thingNoImg-1-subjectKey sc-width-50">{{$t('postProfileList.card.staffs')}}</div>
                  <div class="sc-panel-thingNoImg-1-subjectValue postProfile2List-card-value">{{row.staffs.join(' / ') || $t('postProfileList.empty')}}
                  </div>
                </div>
              </div>
              <div class="sc-panel-thingNoImg-1-operate bh-animate-bottom bh-animate-fast">
                <span class="bh-mh-4 card-opt-button" @click="out(row)">{{$t('postProfileList.card.out')}}</span>
                <span v-if="row.status != '0'">| <span class="bh-mh-4 card-opt-button" @click="inn(row)">{{$t('postProfileList.card.in')}}</span></span>
                | <span class="bh-mh-4 card-opt-button"
                        @click="detail(row)">{{$t('postProfileList.card.detail')}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="treeSelectedNode.value == '4'">
        <div v-for="row in ps.postList">
          <div class="sc-panel-thingNoImg-1 bh-mr-8 bh-mb-8 postProfile1List-card">
            <div class="sc-panel-thingNoImg-1-container bh-animate-all bh-animate-fast">
              <div class="sc-panel-thingNoImg-1-description">
                <div class="sc-panel-thingNoImg-1-header">
                  <div class="sc-panel-thingNoImg-1-title">{{row.name}}</div>
                  <a href="javascript:void(0);" class="bh-tag bh-tag-primary">{{$t('postProfileList.cardStaffTip', {count:row.staffs.length})}}</a>
                </div>
                <div class="sc-panel-thingNoImg-1-subject">
                  <div class="sc-panel-thingNoImg-1-subjectKey sc-width-510">{{$t('postProfileList.card.level')}}</div>
                  <div class="sc-panel-thingNoImg-1-subjectValue postProfile1List-card-value">{{levelDispaly(row.level)}}</div>
                </div>
                <div class="sc-panel-thingNoImg-1-subject">
                  <div class="sc-panel-thingNoImg-1-subjectKey sc-width-510">
                    {{$t('postProfileList.card.personInCharge')}}
                  </div>
                  <div class="sc-panel-thingNoImg-1-subjectValue postProfile1List-card-value">{{row.personInCharge}}
                  </div>
                </div>
              </div>
              <div class="sc-panel-thingNoImg-1-operate bh-animate-bottom bh-animate-fast">
              <span class="bh-mh-4 card-opt-button"
                    @click="detailSchool(row)">{{$t('postProfileList.card.detail')}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="ps.postList.length == 0">
        <div class="cus-empty">
          <img :src="ps.emptyImage">
          <div class="cus-empty-tip bh-mv-16">{{$t('postProfileList.emptyTip')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import service from '../postManage.service'

  export default {
    components: {},

    computed: {
      ps(){
        return this.$store.state.postProfileList
      },

      grade(){
        return this.$store.state.postManage.grade
      },

      treeSelectedNode(){
        return this.$store.state.postManage.treeSelectedNode
      }
    },

    ready() {
      this.reload()
    },

    methods: {
      reload(){
        this.ps.loading = true
        service.getPostList({
          type: this.treeSelectedNode.value, // depart level
          departId: this.treeSelectedNode.id,
          grade: this.grade
        }).then((res)=> {
          this.ps.loading = false
          this.ps.postList = res
        })
      },

      detailSchool(post){
        this.ps.currentEditPost = post
        Utils.paperDialog({
          title: Vue.t('postProfileList.paperDialog.viewTitle') + '-' + post.name,
          currentView: 'postStaffsDetailSchool'
        })
      },

      detail(post){
        this.ps.currentEditPost = post
        Utils.paperDialog({
          title: Vue.t('postProfileList.paperDialog.viewTitle') + '-' + post.name,
          currentView: 'postStaffsDetail'
        })
      },

      inn(post){
        this.ps.currentEditPost = post
        Utils.dialog({
          title: Vue.t('postProfileList.in'),
          currentView: 'cardAddStaff',
          height: '220px',
          width: '350px',
          okEvent: 'cardAddStaff.saveStaff'
        })
      },

      out(post){
        this.ps.currentEditPost = post
        Utils.dialog({
          title: Vue.t(' postProfileList.out'),
          currentView: 'cardLeaveStaff',
          height: '410px',
          width: '400px',
          okEvent: 'cardLeaveStaff.saveLeaveStaff'
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
  .postProfile2List-card-value {
    width: 106px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: bottom;
  }

  .postProfile2List-card .sc-panel-thingNoImg-1-container {
    padding-right: 4px;
  }

  .postProfile2List-card .sc-panel-thingNoImg-1-title {
    max-width: 155px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    margin-right: 0;
    vertical-align: middle;
  }

  .cus-empty {
    text-align: center;
  }

  .cus-empty-tip {
    font-size: 22px;
    color: #666;
  }

  .cus-empty-tip2 {
    color: #ccc;
    margin-bottom: 8px;
  }
</style>
