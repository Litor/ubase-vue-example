<template>
  <div>
    <div class="cus-label"><span>＊</span>{{$t('postProfileList.staffPerson')}}</div>
    <emap-dd-table v-ref:staff :options='staffOptions'></emap-dd-table>
  </div>
</template>
<script type="text/ecmascript-6">
  import service from '../postManage.service'
  import {emapDdTable} from 'bh-vue'

  export default {
    components: {emapDdTable},

    data: function (item) {
      return {
        staffOptions: {
          url: service.api.searchUser,
          displayMember: 'name',
        },
        staff: '',
        depart: ''
      }
    },

    computed: {
      ps(){
        return this.$store.state.postProfileList
      },
      departId(){
        return this.$store.state.postManage.treeSelectedNode.id
      }
    },

    methods: {
      saveStaff(){
        service.savePostStaff({
          id: this.$refs.staff.getValue(),
          departId: this.departId,
          postLevel: this.ps.currentEditPost.level,
          postId: this.ps.currentEditPost.wid
        }).then((res) => {
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
