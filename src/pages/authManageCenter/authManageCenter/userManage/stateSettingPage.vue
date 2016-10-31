<template>
  <div>
    <div class="tip"> 提示：会通过手机短信的方式提醒用户</div>
    <div class="cus-form-item">
      <label>用户状态</label>
      <div>
        <bh-dropdown :source='pageState.dicts.status.rows' :current.sync='dditem' display-member='name'
                     value-member='id'
                     @change='stateChange'></bh-dropdown>
      </div>
    </div>
    <div class="cus-form-item">
      <label>冻结开始时间</label>
      <div>
        <bh-timepicker></bh-timepicker>
      </div>
    </div>
    <div class="cus-form-item">
      <label>冻结时长</label>
      <div>
        <div class="cus-number-wrap"><input type="number" min="0" max="365" value="0"></div><span>天-</span>
        <div class="cus-number-wrap"><input type="number" min="0" max="24" value="0"></div><span>小时-</span>
        <div class="cus-number-wrap"><input type="number" min="0" max="60" value="0"></div><span>分钟</span>
      </div>
    </div>
    <div class="cus-buttons bh-mt-16">
      <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-small waves-effect"
         @click="stateChange()">确定</a>
      <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-small waves-effect" @click="cancel()">取消</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  import  bhDropdown from 'bh-vue/bh-dropdown/bhDropdown.vue'
  import  bhTimepicker from 'bh-vue/bh-timepicker/bhTimepicker.vue'

  export default {
    components: {bhDropdown, bhTimepicker},
    data: function () {
      return {
        dditem: ''
      }
    },

    methods: {
      stateChange: function () {
        Vue.pop('hide')
        Vue.dialog('hide')
      },

      cancel(){
        Vue.pop('hide')
        Vue.dialog('hide')
      }
    },

    vuex: {
      getters: {
        pageState: function (state) {
          return state.userManage
        }
      }
    },

    ready(){
      $("input[type='number']").number()
    }
  }
</script>
<style scoped type="text/css">
  .tip {
    background-color: rgba(255, 234, 204, 1);
    color: #EE981D;
    padding: 8px;
  }

  .cus-form-item > label {
    padding:8px 0;
    font-weight: 700;
    display:inline-block;
  }

  .cus-number-wrap{
    display: inline-block;
    position: relative;
    width: 82px;
    height: 21px;
    vertical-align: bottom;
  }

  .fs-light .fs-number-element {
    height: 23px;
    padding: 0 11px 0 6px;
  }

  .cus-buttons{
    text-align: right;
  }
</style>
