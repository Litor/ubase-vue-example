<template>
  <article bh-layout-role="single" id="postManage-main">
    <h2>{{$t('postManage.title')}}</h2>
    <section>
      <article bh-layout-role="navLeft" class="sc-navLeft-m sc-navLeft-category bh-card bh-card-lv1">
        <nav id="cus-nav">
          <div class="bh-simple-search">
            <input class="bh-form-control" type="text" :placeholder="$t('postManage.searchPlaceholder')" v-model="ps.keyword"
                   debounce="500" @click.enter="search()">
            <a href="javascript:void(0)"><i class="iconfont"></i></a>
          </div>
          <div class="bh-advancedQuery-groupList bh-label-radio-group bh-mv-8">
            <div class="bh-label-radio bh-active" @click="filterPost('-1')">{{$t('postManage.all')}}</div>
            <div class="bh-label-radio" v-for="item in ps.gradeList" @click="filterPost(item.id)">{{item.name}}
            </div>
          </div>
          <bh-tree v-ref:structuretree :source='ps.structureTree'
                   :selected-item.sync='ps.structureTreeSelectedItem' class="cus-tree" @select="select"></bh-tree>
        </nav>
        <section>
          <div class="h3 bh-mb-16">{{ps.treeSelectedNode.label}}</div>
          <div class="bh-form-groupname sc-title-borderLeft bh-mb-24">{{$t('postManage.postInfo')}}</div>
          <component :is="ps.rightgCurrentView" v-ref:rightgcurrentview></component>
        </section>
      </article>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  import {bhTree} from 'bh-vue'
  import service from './postManage.service'

  export default {
    components: {bhTree},

    computed: {
      ps(){
        return this.$store.state.postManage
      }
    },

    attached() {
      this.$nextTick(function () {
        $('#postManage-main').css('padding-bottom', '0px')
        $('#postManage-main>section').css('padding-left', '0px').css('padding-right', '0px')
        $('[bh-layout-role="navLeft"]').css('min-height', $('#postManage-main').height() - 68)
        var allTreeNodes = this.$refs.structuretree.getAll()

        // 展开根节点
        if (allTreeNodes && allTreeNodes.length > 0) {
          this.$refs.structuretree.selectItem(allTreeNodes[0])
          this.$refs.structuretree.expandItem(allTreeNodes[0])
        }

        // 树懒加载 用loaded标示是否已加载过
        var treeElem = $(this.$refs.structuretree.$el)
        treeElem.on('expand', (event)=> {
          var node = treeElem.jqxTree('getItem', event.args.element);
          if (node.loaded) {
            return
          }
          node.loaded = true
          var $element = $(event.args.element);
          this.getTreeNode(node.id, node.value - 1).then((data)=> {
            treeElem.jqxTree('addTo', data, $element[0]);
          })
        })
      })
    },

    methods: {
      filterPost(grade) {
        this.ps.grade = grade
        this.reloadRightCard()
      },

      reloadRightCard: function () {
        this.ps.rightgCurrentView = ''
        this.$nextTick(() => {
          this.ps.rightgCurrentView = 'postProfileList'
          Ubase.invoke('postProfile2List.reload')
        })
      },

      getTreeNode(parentId, level){
        return service.getStructureTree({
          keyword: this.ps.keyword,
          grade: this.ps.grade,
          level: level,
          parentId: parentId
        }).then((data)=> {
          return data.structureTree
        })
      },

      select(selected){
        if (!selected) {
          return
        }

        this.ps.treeSelectedNode = selected
        this.reloadRightCard()
      },

      search(){
        this.getStructureTree({
          keyword: this.ps.keyword,
          grade: this.ps.grade,
          level: '3',
          parentId: ""
        }).then(() => {
          this.$nextTick(() => {
            var allTreeNodes = this.$refs.structuretree.getAll()
            if (allTreeNodes && allTreeNodes.length > 0) {
              this.$refs.structuretree.selectItem(allTreeNodes[0])
              this.ps.treeSelectedNode = allTreeNodes[0]
            }
          })
        })
      }
    },

    route: {
      activate: function (transition) {
        service.getUsedGradeList().then((res)=>{
          this.ps.gradeList = res.gradeList
          this.getTreeNode('', '-1').then((data)=> {
            this.ps.structureTree = data
            transition.next()
          })
        })
      }
    }
  }
</script>
<style type="text/css" scoped="">
  #cus-nav {
    padding-right: 16px;
  }

  .cus-tree{
    height: 600px;
    overflow:scroll;
    margin-left: -8px;
  }
</style>
