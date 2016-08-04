<template>
  <div>{{test1state.message}}</div>
  <div>{{login}}</div>
  <input type="text" v-model="login">
  <button @click="change()">change22</button>
</template>
<style scoped lang="sass">
</style>
<script>
import { setTestState } from './test3.vuex'

export default {
  vuex: {
    actions: {
      setTestState
    },

    getters: {
      test1state: function(state) {
        return state.test1
      }
    }
  },

  data: () => ({
    login: '111',
    password: null,
  }),

  ready() {},

  methods: {
    change() {
      this.setTestState('dfd')
    }
  }
}
</script>
