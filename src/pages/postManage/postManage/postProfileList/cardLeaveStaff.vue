<template>
  <div>
    <div class="cus-label"><span>＊</span>{{$t('postProfileList.leavePerson')}}</div>
    <emap-dd-table v-ref:staff :options='staffOptions'></emap-dd-table>
    <div class="cus-label"><span>＊</span>{{$t('postProfileList.leaveReason')}}</div>
    <bh-textarea v-ref:reason :value.sync="reason"></bh-textarea>
    <div class="cus-label"><span>＊</span>{{$t('postProfileList.leaveDate')}}</div>
    <bh-datetime v-ref:leaveDate :value.sync="leaveDate"></bh-datetime>
  </div>
</template>
<script type="text/ecmascript-6">
  import service from '../postManage.service'
  import bhTextarea from 'bh-vue/bh-textarea/bhTextarea.vue'
  import bhDatetime from 'bh-vue/bh-datetime/bhDatetime.vue'
  import emapDdTable from 'bh-vue/emap-dd-table/emapDdTable.vue'

  export default {
    components: {bhDatetime, bhTextarea, emapDdTable},

    data: function () {
      return {
        reason: '',
        leaveDate: '',
        staffOptions: {
          url: service.api.searchUser,
          displayMember: 'name',
        }
      }
    },

    computed: {
      ps(){
        return this.$store.state.postProfileList
      }
    },

    methods: {
      saveLeaveStaff(){
        if (!this.reason) {
          Utils.tip({
            state: 'warning',
            content: Vue.t('postStaffsDetailSchool.noReason')
          })
          return
        }

        if (!this.leaveDate) {
          Utils.tip({
            state: 'warning',
            content: Vue.t('postStaffsDetailSchool.noLeaveDate')
          })
          return
        }

        service.savePostLeaveStaff({
          wids: this.$refs.staff.getValue(),
          content: this.reason,
          date: moment(this.leaveDate).format('YYYY-MM-DD hh:mm:ss')
        }).then((res)=> {
          Utils.dialog('hide')
          Ubase.invoke('postProfileList.reload')
        })
      }
    }
  }
</script>
<style scoped>
  .cus-tip {
    padding: 8px;
  }
</style>
