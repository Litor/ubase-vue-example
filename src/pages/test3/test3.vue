<template>
  <article bh-layout-role="single">
    <h2>基础数据管理</h2>
    <section class="sc-navLeft-s" bh-layout-role="navLeft">
      <nav>
        <bh-nav :source='menus'></bh-nav>
      </nav>
      <section>
        <router-view></router-view>
      </section>
    </section>
    <aside></aside>
  </article>
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
    menus: [
      { "id": 1, "name": "学校信息", "icon": "iconfont icon-home", "action": "link", "url": "/", "active": true },
      { "id": 2, "name": "专业", "icon": "iconfont icon-home", "action": "link", "url": "/test1" },
      { "id": 3, "name": "年度专业", "icon": "iconfont icon-home", "action": "link", "url": "/master" },
      { "id": 4, "name": "班级", "icon": "iconfont icon-home", "action": "link", "url": "/class" },
      { "id": 5, "name": "单位", "icon": "iconfont icon-home", "action": "link", "url": "/units" },
      { "id": 6, "name": "教研组", "icon": "iconfont icon-home", "action": "link", "url": "/research" },
      { "id": 7, "name": "校区", "icon": "iconfont icon-home", "action": "link", "url": "/campus" },
      { "id": 8, "name": "学年学期和学历", "icon": "iconfont icon-home", "action": "link", "url": "/term" }
    ]
  }),

  ready() {},

  methods: {
    change() {
      this.setTestState('dfd')
    }
  }
}
</script>
