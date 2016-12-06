<template>
  <article bh-layout-role="single">
    <h2>{{$t('postQuery.title')}}</h2>
    <section>
      <div class="bh-mb-16">
        <bh-search @search='search' :value.sync='ps.emapDatatable.params.searchContent' :placeholder='$t("postQuery.simpleSearch.placeholder")' style="width:500px"></bh-search>
        <div class="bh-mt-8">
          <div class="post-level-label">{{$t('postQuery.postLevel')}}:</div>
          <div class="post-level-value bh-label-radio-group">
            <div class="bh-label-radio bh-active" @click="filterPostLevel('-1')">{{$t('postQuery.all')}}</div>
            <div class="bh-label-radio" v-for="item in ps.postLevel" @click="filterPostLevel(item.id)">
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="bh-mt-8">
          <div class="post-level-label">{{$t('postQuery.postStatus')}}:</div>
          <div class="post-level-value bh-label-radio-group">
            <div class="bh-label-radio bh-active" @click="filterPostStatus('-1')">{{$t('postQuery.all')}}</div>
            <div class="bh-label-radio" v-for="item in ps.postStatus" @click="filterPostStatus(item.id)">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <emap-datatable :options='ps.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  import service from './postQuery.service'
  import {EmapDatatable, bhSearch} from 'bh-vue'

  export default {
    components: {EmapDatatable, bhSearch},

    computed: {
      ps(){
        return this.$store.state.postQuery
      }
    },

    methods: {
      filterPostLevel(id){
        this.ps.emapDatatable.params.type = id
        this.reload()
      },

      filterPostStatus(id){
        this.ps.emapDatatable.params.status = id
        this.reload()
      },

      reload(){
        this.$refs.table.reload()
      },

      search(){
        this.reload()
      }
    }
  }
</script>
<style scoped>
  .post-level-label,
  .post-level-value {
    display: inline-block;
    vertical-align: middle;
  }
</style>
