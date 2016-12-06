<template>
  <article bh-layout-role="single">
    <section>
      <bh-search @search='search' :value.sync='ps.keyword' :placeholder='$t("postStaffsDetail.simpleSearch.placeholder")' style="width:500px"></bh-search>
      <div class="bh-mv-16">
        <div class="post-level-label">{{$t('postStaffsDetail.postStatus')}}:</div>
        <div class="post-level-value bh-label-radio-group">
          <div class="bh-label-radio bh-active" @click="filterPost('-1')">{{$t('postStaffsDetail.all')}}</div>
          <div class="bh-label-radio" v-for="item in ps.status" @click="filterPost(item.id)">
            {{item.name}}
          </div>
        </div>
      </div>
      <emap-datatable :options='ps.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  import {EmapDatatable, buttonList, bhSearch} from 'bh-vue'

  export default {
    components: {EmapDatatable, bhSearch, buttonList},

    computed: {
      ps(){
        return this.$store.state.postStaffsDetail
      },

      treeSelectedNode(){
        return this.$store.state.postManage.treeSelectedNode
      },

      currentEditPost(){
        return this.$store.state.postProfileList.currentEditPost
      }
    },

    created(){
      this.ps.emapDatatable.params.unitId = this.treeSelectedNode.id
      this.ps.emapDatatable.params.postLevel = this.treeSelectedNode.value
      this.ps.emapDatatable.params.postId = this.currentEditPost.wid
    },

    methods:{
      filterPost(id){
        this.ps.emapDatatable.params.status = id
        this.$refs.table.reload()
      },

      search(){
        this.$refs.table.reload({searchContent: this.ps.keyword})
      }
    }
  }
</script>
<style>
  .post-level-label,
  .post-level-value {
    display: inline-block;
    vertical-align: middle;
  }
</style>
