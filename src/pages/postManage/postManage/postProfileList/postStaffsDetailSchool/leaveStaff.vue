<template>
  <div>
    <div class="cus-tip sc-bg-warning-lv3">{{$t('postStaffsDetailSchool.leaveStaffTip', {count:
      ps.leavedStaffs.length})}}
    </div>
    <div class="cus-label"><span>＊</span>{{$t('postStaffsDetailSchool.leaveReason')}}</div>
    <bh-textarea v-ref:reason :value.sync="reason"></bh-textarea>
    <div class="cus-label"><span>＊</span>{{$t('postStaffsDetailSchool.leaveDate')}}</div>
    <bh-datetime v-ref:leaveDate  :value.sync="leaveDate"></bh-datetime>
  </div>
</template>
<script type="text/ecmascript-6">
  import service from '../../postManage.service'
  import {bhTextarea, bhDatetime} from 'bh-vue'

  export default {
    components: {bhDatetime, bhTextarea},

    data() {
      return {
        reason: '',
        leaveDate: ''
      }
    },

    computed: {
      ps(){
        return this.$store.state.postStaffsDetailSchool
      }
    },

    methods: {
      saveLeaveStaff(){
        var leaveStaffids = _.map(this.ps.leavedStaffs, (item)=> {
          return item.wid
        })

        if(!this.reason){
          Utils.tip({
            state: 'warning',
            content: Vue.t('postStaffsDetailSchool.noReason')
          })
          return
        }

        if(!this.leaveDate){
          Utils.tip({
            state: 'warning',
            content: Vue.t('postStaffsDetailSchool.noLeaveDate')
          })
          return
        }

        service.savePostLeaveStaff({
          wids: leaveStaffids.join(','),
          content: this.reason,
          date: moment(this.leaveDate).format('YYYY-MM-DD hh:mm:ss')
        }).then((res)=> {
          Utils.dialog('hide')
          Ubase.invoke('postStaffsDetailSchool.reload')
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
