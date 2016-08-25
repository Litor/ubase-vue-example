<template>
  <article bh-layout-role="single">
    <div>data:{{login}}</div>
    <div>vuex:{{app.message}}</div>
    <div>global vuex:{{global.message}}</div>
    <div>config:APP_NAME:{{$root.config.APP_NAME}}</div>
    <button @click="change">测试vuex</button>
  </article>
</template>
<style scoped lang="sass">
</style>
<script>
import { setTestState } from './app1.vuex'
export default {
  data: () => ({
    login: '2010111',
    password: null,
  }),

  vuex: {
    actions: {
      setTestState
    },

    getters: {
      app: function(state) {
        return state.app
      },

      global:function(state){
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
