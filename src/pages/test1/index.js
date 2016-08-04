import { setTestState } from './test1.vuex'
import template from './template.html'
import style from './style.scss'

var name = 'test1'
export default {
  name,
  template: template,

  data: () => ({
    login: '111',
    password: null
  }),

  vuex: {
    actions: {
      setTestState
    },

    getters: {
      test1state: function(state) {
        return state.test1
      },
    }
  },

  ready() {
    console.log(this.$root.config.APP_NAME)
  },

  methods: {
    change() {
      this.setTestState('dfd')
    }
  },
}
