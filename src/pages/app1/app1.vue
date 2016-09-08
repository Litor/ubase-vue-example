<template>
  <article bh-layout-role="single">
    <div>data:{{login}}</div>
    <div>vuex:{{app.message}}</div>
    <div>global vuex:{{global.message}}</div>
    <div>国际化测试_normal: {{$t('title')}}</div>
    <div>国际化测试_format: {{$t('message.hello', { msg: i18ntest })}}</div>
    <div>国际化测试_inJs: {{i18nInJs}}</div>
    <div>config:APP_NAME:{{$root.config.APP_NAME}}</div>
    <button @click="change">测试vuex</button>
    <subpage></subpage>
  </article>
</template>
<style scoped lang="sass">
</style>
<script>
import { setTestState } from './app1.vuex'
import subpage from './subpage.vue'
export default {
  components: { subpage },
  data: () => ({
    login: '2011111',
    password: null,
    i18ntest: 'i18n format test',
    i18nInJs: Vue.t('title')
  }),

  vuex: {
    actions: {
      setTestState
    },

    getters: {
      app: function(state) {
        return state.app1
      },

      global: function(state) {
        return state.global
      }
    }
  },

  ready() {
    console.log(this.$root.config.APP_NAME)
  },

  methods: {
    change() {
      this.setTestState('dfd')
    }
  }
}
</script>
