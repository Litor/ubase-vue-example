import template from './template.html'
import style from './style.scss'
var name = 'index'

export default {
  name,
  template: template,

  data: () => ({
    login: null,
    password: null,
  }),

  vuex: {
    actions: {

    },

    getters: {

    }
  },

  ready() {
    console.log(this.$root.config.APP_NAME)
  },

  methods: {

  },
}