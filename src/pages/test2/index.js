import template from './template.html'
import style from './style.scss'

var name = 'test2'
export default {
  name,
  template: template,

  data: () => ({
    login: null,
    password: null,
  }),
  route: {
    activate: function(transition) {
      console.log('hook-example activated!')
      transition.next()
    }},

    vuex: {
      actions: {

      },

      getters: {

      }
    },

    ready() {},

    methods: {

    },
  }
