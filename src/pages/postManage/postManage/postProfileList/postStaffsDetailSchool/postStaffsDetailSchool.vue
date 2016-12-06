<template>
  <article bh-layout-role="single">
    <section>
      <bh-search @search='search' :value.sync='keyword' :placeholder='$t("postStaffsDetailSchool.simpleSearch.placeholder")' style="width:500px"></bh-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="importt" :small="false">{{$t('postStaffsDetailSchool.buttonList.import')}}
        </bh-button>
        <bh-button type="primary" @click="out" :small="false">{{$t('postStaffsDetailSchool.buttonList.out')}}
        </bh-button>
        <bh-button type="primary" @click="inn" :small="false" v-if="currentEditPost.status != '0'">{{$t('postStaffsDetailSchool.buttonList.in')}}</bh-button>
      </div>
      <emap-datatable :options='ps.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  import {EmapDatatable, bhButton, bhSearch} from 'bh-vue'

  export default {
    components: {EmapDatatable, bhButton, bhSearch},

    data:function () {
      return {
        keyword: ''
      }
    },

    computed: {
      ps(){
        return this.$store.state.postStaffsDetailSchool
      },

      currentEditPost(){
        return this.$store.state.postProfileList.currentEditPost
      }
    },

    created(){
      this.ps.emapDatatable.params.postId = this.currentEditPost.wid
    },

    methods: {
      search(){
        this.$refs.table.reload({searchContent: this.keyword})
      },

      // TODO
      importt() {

      },

      out() {
        var leavedStaffs = this.$refs.table.checkedRecords()
        this.ps.leavedStaffs = leavedStaffs

        if (leavedStaffs.length === 0) {
          Vue.tip({
            state: 'warning',
            content: Vue.t('postStaffsDetailSchool.noSelect')
          })
          return
        }

        Utils.dialog({
          title: Vue.t('postStaffsDetailSchool.leave'),
          currentView: 'leaveStaff',
          height: '380px',
          width: '350px',
          okEvent:'leaveStaff.saveLeaveStaff'
        })
      },

      inn() {
        Utils.dialog({
          title: `${Vue.t('postStaffsDetailSchool.add')}-${this.currentEditPost.name}`,
          currentView: 'addStaff',
          height: '270px',
          width: '350px',
          okEvent: 'addStaff.saveStaff'
        })
      },

      reload(){
        this.$refs.table.reload()
      }
    }
  }
</script>
