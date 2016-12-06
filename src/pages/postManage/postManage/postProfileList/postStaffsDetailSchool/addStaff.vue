<template>
  <div>
    <div class="cus-label"><span>＊</span>{{$t('postStaffsDetailSchool.staffPerson')}}</div>
    <emap-dd-table v-ref:staff :options='staffOptions'></emap-dd-table>
    <div class="cus-label"><span>＊</span>{{$t('postStaffsDetailSchool.staffDepart')}}</div>
    <emap-dd-table v-ref:depart :options='departOptions'></emap-dd-table>
  </div>
</template>
<script type="text/ecmascript-6">
  import service from '../../postManage.service'
  import {emapDdTable} from 'bh-vue'

  export default {
    components: {emapDdTable},

    data(item) {
      return {
        staffOptions: {
          url: service.api.searchUser,
          displayMember: 'name',

        },
        departOptions: {
          url: service.api.getDepartBySearch,
          displayMember: 'name',
          formatData: (data) => {
            data.level = this.currentEditPost.level
          }
        },
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

    methods: {
      saveStaff(){
        service.savePostStaff({
          id: this.$refs.staff.getValue(),
          departId: this.$refs.depart.getValue(),
          postId: this.currentEditPost.wid
        }).then((res)=> {
          Utils.dialog('hide')
          Ubase.invoke('postStaffsDetailSchool.reload')
          Ubase.invoke('postProfileList.reload')
        })
      }
    }
  }
</script>
<style>
  .cus-label {
    margin-top: 8px;
  }

  .cus-label span {
    color: red;
  }
</style>
