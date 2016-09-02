<template>
  <article bh-layout-role="single">
    <div>vuex:{{app.message}}</div>
    <div>{{subpagedata}}</div>
  </article>
</template>
<style scoped lang="sass">
</style>
<script>
import { setTestState } from '../app1.vuex'
export default {
  data: () => ({
    subpagedata:'subpage'
  }),

  vuex: {
    actions: {
      setTestState
    },

    getters: {
      app: function(state) {
        return state.app
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
