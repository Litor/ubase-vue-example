<template>
    <article bh-layout-role="single-no-title">
        <section class="main">
            <div class="title">找回密码</div>
            <div class="content">
                <div class="step-content" v-if="!pageState.contactAdmin && !pageState.step3">
                    <div class="steps">
                        <div class="step-circle" :class="{'color-active':pageState.step1 || pageState.step2}">1<span class="step-circle-title">手机验证</span></div>
                        <div class="divider" :class="{'color-divider-active':pageState.step2}"></div>
                        <div class="step-circle" :class="{'color-active':pageState.step2}">2<span class="step-circle-title">设置新密码</span></div>
                        <div class="divider"></div>
                        <div class="step-circle">3<span class="step-circle-title">完成</span></div>
                    </div>
                    <div class="step-content-wrap">
                        <div class="step1-content" v-if="pageState.step1 && !pageState.step2">
                            <div class="form">
                                <div class="form-item">
                                    <label>手机号码：</label>
                                    <input type="text">
                                    <div class="phone-error"><i class="iconfont icon-erroroutline"></i>手机号不正确</div>
                                </div>
                                <div class="form-item">
                                    <label>验证码：</label>
                                    <input type="text" class="verify-input">
                                    <div class="verify-input-fetch">发送验证码</div>
                                </div>
                            </div>
                            <div class="tip">提示：您今天短信验证码发送次数已达上限，请联系管理员</div>
                            <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-large waves-effect next-button next-button-disable"
                               @click="gotoStep2()">下一步</a>
                            <div class="contact-admin-tip">未绑定手机？或手机号码已停用？请<a @click="gotoContactAdmin">联系管理员</a></div>
                        </div>
                        <div class="step2-content" v-if="pageState.step2">
                            <div class="form">
                                <div class="form-item">
                                    <label>设置新密码：</label>
                                    <input type="text">
                                </div>
                                <div class="tip tip-step2">6-14位，必须包含字母、数字、特殊字符中的2种及以上</div>
                                <div class="form-item">
                                    <label>确认新密码：</label>
                                    <input type="text">
                                </div>
                            </div>
                            <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-large waves-effect next-button next-button-disable bh-mt-24"
                               @click="gotoStep3()">确认</a>
                        </div>
                    </div>
                </div>
                <div class="step3-success" v-if="pageState.step3">
                    <div class="check-wrap"><i class="iconfont icon-check"></i></div>
                    <div class="check-tip">
                        <div>新密码设置成功！</div>
                        <div>3秒后将自动调整到登录页！</div>
                    </div>
                </div>
                <div class="contact-admin-content" v-if="pageState.contactAdmin">
                    <textarea class="contact-area">hello</textarea>
                    <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-large waves-effect bh-pull-right orange-color"
                       @click="backStep()">确定</a>
                </div>
            </div>
        </section>
        <div class="footer-content">版权信息：© 2015 江苏金智教育信息股份有限公司 苏ICP备10204514号</div>
    </article>
</template>
<script type="text/ecmascript-6">
    import service from './findPwd.service'

    export default {
        components: {},

        vuex: {
            getters: {
                pageState: function (state) {
                    return state.findPwd
                },
            }
        },

        methods: {
            gotoContactAdmin(){
                this.pageState.contactAdmin = true;
            },

            backStep(){
                this.pageState.contactAdmin = false;
            },

            gotoStep2(){
                this.pageState.step2 = true
            },

            gotoStep3(){
                this.pageState.step3 = true
            }
        },

        events: {}
    }
</script>
<style>
    body{
        overflow-y: auto!important;
    }
    body>main{
        background-image: url('../../../statics/images/back.jpg');
        background-size:100%;
    }
    body>main>article,body>main>article>h2{
        background-color: transparent!important;
    }
</style>
<style scoped>
    .main {
        width: 730px;
        height: 500px;
        background-color: #ffffff;
        border-radius: 8px;
        top: 50%;
        position: absolute;
        margin-top: -250px;
        left: 50%;
        margin-left: -365px;
        padding: 0 24px;
    }

    .orange-color, .orange-color:hover{
        background-color: #F17A08;
    }
    .title {
        font-weight: 700;
        font-size: 16px;
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #cccccc;
    }

    .step-content {
        text-align: center;
        padding: 32px;
    }

    .step-content-wrap{
        width: 560px;
        padding: 32px;
        margin-top:36px;
        text-align: left;
        margin-left: 60px;
    }

    .steps{
        width: 100%;
    }

    .steps > div {
        display: inline-block;
        vertical-align: middle;
    }

    .phone-error{
        display: inline-block;
        color: #E64A3E;
    }

    .phone-error *{
        vertical-align: middle;
    }

    .phone-error i{
        font-size: 16px;
    }

    .step-circle {
        width: 36px;
        height: 36px;
        line-height: 36px;
        color: #ffffff;
        font-size: 14px;
        border-radius: 20px;
        background-color: #ddd;
    }

    .step-circle-title {
        display: block;
        color: #666;
        width: 100px;
        text-align: center;
        margin-left: -33px;
    }

    .divider {
        width: 200px;
        border: 1px solid #cccccc;
        margin: 0 16px;
    }

    .color-active{
        background-color:#68D02C;
    }

    .color-divider-active{
        border: 1px solid #68D02C;
    }

    .form-item{
        height: 36px;
        line-height: 36px;
    }

    .form-item label{
        width: 80px;
        display: inline-block;
        text-align: right;
        margin-right: 16px;
    }

    .step3-success{
        text-align: center;
        margin-top: 64px;
    }

    .tip-step2{
        color: #cccccc!important;
    }

    .step3-success .check-wrap{
        width: 60px;
        height: 60px;
        line-height: 60px;
        border-radius: 30px;
        background-color: #60BE29;
        display: inline-block;
        vertical-align: middle;
    }

    .step3-success i{
        font-size: 40px;
        color: #ffffff;
    }

    .check-tip{
        display: inline-block;
        text-align: left;
        margin-left: 16px;
        vertical-align: middle;
        font-size: 14px;
        line-height: 36px;
    }

    .form-item input{
        height: 28px;
        padding: 4px;
        font-size: 12px;
        line-height: 18px;
        color: #333;
        background-color: #fff;
        background-image: none;
        border: 1px solid #d8dcf0;
        border-radius: 2px;
        width: 250px;
    }

    .form-item input:hover, .form-item input:focus{
        outline: none;
    }

    .bh-btn, .bh-btn:focus, .bh-btn:hover{
        box-shadow: none;
    }

    .tip{
        color: #E64A3E;
        margin: 4px 0;
        margin-left: 100px;
    }

    .next-button{
        width: 250px;
        margin-left: 98px;
    }

    .next-button-disable, .next-button-disable:hover{
        background-color: #DDDDDD;
    }

    .next-button-success, .next-button-success:hover{
        background-color: #F17A08;
    }

    .contact-admin-tip{
        margin-left: 100px;
        margin-top: 8px;
    }

    .contact-admin-tip a{
        color: #F17A08;
        cursor: pointer;
    }

    .contact-area{
        display: block;
        width: 100%;
        margin: 16px 0;
        height: 336px;
    }

    .verify-input{
        width: 170px!important;
        padding-right: 0px!important;
        border-top-right-radius: 0px!important;
        border-bottom-right-radius: 0px!important;
    }

    .verify-input-fetch{
        width: 84px;
        margin-left:-4px;
        display: inline-block;
        background-color: #dddddd;
        height: 28px;
        line-height: 28px;
        margin-top: -2px;
        vertical-align: middle;
        cursor: pointer;
        text-align: center;
    }

    .footer-content{
        height: 32px;
        text-align: center;
        width: 100%;
        padding: 6px 0;
        color: #fff;
        position: fixed;
        bottom: 10px;
    }
</style>