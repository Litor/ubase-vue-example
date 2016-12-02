<template>
  <section class="bh-mt-16">
    <div class="cus-form-item">
      <label @click="testt($event)">密码长度范围</label>
      <div><input type="text" class="bh-form-control cus-pwd"><span>位 - </span>
        <input type="text" class="bh-form-control cus-pwd"><span>位</span>
      </div>
    </div>
    <div class="cus-form-item">
      <label>密码元素</label>
      <div>
        <bh-checklist :source="test"></bh-checklist>
      </div>
    </div>
    <div class="cus-form-item">
      <label>密码生效要求</label>
      <div><span>用户设置的密码必须包含</span><input type="text" class="bh-form-control"
                                          style="margin:0 8px; width:40px;height: 20px;"><span>种及以上密码元素才能生效。</span>
      </div>
    </div>
    <div class="cus-form-item">
      <label>默认密码策略</label>
      <div class='cus-default-pwd-stra'>
        <bh-dropdown :source='words' :current.sync='dditem' display-member='name' value-member='sid'
                     @change='onselect'></bh-dropdown>
      </div>
    </div>
    <div class="cus-form-item">
      <label>默认密码固定值</label>
      <div><input type="text" class="bh-form-control" style="width: 400px;"></div>
    </div>
    <div class="cus-form-item">
      <label style="vertical-align: top">验证码策略</label>
      <div><span>当天密码输错</span><input type="text" class="bh-form-control" style="margin:0 8px; width:40px;height: 20px;"><span>次以上时，需要填写验证码。</span>
        <div style="color:#EE981D;">提示: <span><div> （1）“当天”指凌晨12点之前；</div><div>（2） 当设置为“0”次时，意味着每次登录都需要填写验证码。
        </div></span>
        </div>
      </div>
    </div>
    <div class="cus-form-item">
      <label  style="vertical-align: top"  @click="testt($event)">联系方式说明页</label>
      <div>
        <emap-editor :options='options'></emap-editor>
        <div style="color:#EE981D;">提示：联系方式用于找回账号密码</div>
      </div>
    </div>
    <div class="cus-form-item">
      <label></label>
      <div>
        <a href="javascript:void(0);" class="bh-btn bh-btn-primary waves-effect">保存</a>
      </div>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
  import service from './userAuthSetting.service'
  import bhChecklist from 'bh-vue/bh-checklist/bhChecklist.vue'
  import bhDropdown from 'bh-vue/bh-dropdown/bhDropdown.vue'
  import emapEditor from 'bh-vue/emap-editor/emapEditor.vue'

  export default {
    components: {bhChecklist, bhDropdown, emapEditor},

    data(){
      return {

        test: [{value: true, name: '大写字母'}, {value: true, name: '小写字母'}, {value: true, name: '数字'}, {
          value: true,
          name: '特殊字符'
        }],
        words: [{name: '232', sid: '22'}],
        dditem: '',
        options: {}
      }

    },

    methods:{
      testt(e){
        console.log(e.currentTarget)
        Vue.pop({
          selector:e.currentTarget,
          //width:'500px',
          currentView:'userAuthSetting'
        })
      },
      onselect(){

      }
    },
    vuex: {
      getters: {
        pageState: function (state) {
          return state.userAuthSetting
        },
      }
    },

    events: {}
  }
</script>
<style scoped type="text/css">
  .cus-form-item {
    padding: 8px 0;
  }

  .cus-form-item > label {
    display: inline-block;
    font-weight: 700;
    width: 150px;
  }

  .cus-form-item > div {
    display: inline-block;
  }

  .cus-form-item .bh-form-control {
    display: inline-block;
  }

  .cus-pwd {
    margin-right: 8px;
    width: 80px;
    height: 20px;
  }

  .cus-default-pwd-stra {
    width: 400px;
  }
</style>
