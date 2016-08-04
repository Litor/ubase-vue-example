import template from './template.html'

var name = 'login'
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
    console.log('444444')
  },

  methods: {

  },
}
