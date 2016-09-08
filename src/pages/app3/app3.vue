<template>
  <article bh-layout-role="single">
    test31115554322{{app.message}}
    <button @click="change">测试vuex</button>
  </article>
</template>
<style scoped lang="sass">
</style>
<script>
import { setTestState } from './app3.vuex'
export default {
  data: () => ({
    login: '111111',
    password: null,
  }),

  vuex: {
    actions: {
      setTestState
    },

    getters: {
      app: function(state) {
        return state.app3
      }
    }
  },

  ready() {
  },

  methods: {
    change() {
      this.setTestState('dfd')
    }
  }
}
</script>
