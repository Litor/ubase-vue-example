<template>
  <article bh-layout-role="single">
    11154322866{{app.message}}
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
    login: '111333111',
    password: null,
  }),

  vuex: {
    actions: {
      setTestState
    },

    getters: {
      app: function(state) {
        return state.app
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
