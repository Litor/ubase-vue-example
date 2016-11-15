export default {
  '/': {
    component: function (resolve) {
      require(['././departTab/departTab.vue'], resolve)
    }
  },

  '/depart': {
    component: function (resolve) {
      resolve('./departTab/depart/depart.vue')
    }
  }
}
;
