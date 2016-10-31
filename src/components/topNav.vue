<template>
  <section>
    <div class="cus-top-nav">
      <title>认证管理中心</title>
      <nav>
        <a href="#{{item.route}}" class="cus-top-nav-hover" :class="selectedRoute==item.route?'a-selected':''"
           @click="changeRoute(item.route)" v-for="item in menu">
          <div>{{item.title}}</div>
        </a>
      </nav>
    </div>
    <div class="cus-content">
      <router-view></router-view>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">

  export default {
    props: {
      menu: {
        type: Array,
        default: []
      }
    },
    data: function () {
      return {
        selectedRoute: ''
      }
    },

    ready(){
      let defaultRoute = null
      this.menu.forEach(function (item) {
        if (item.default) {
          defaultRoute = item.route
        }
      })

      if (!defaultRoute) {
        defaultRoute = this.menu[0].route;
      }
      if (this.$route.router._currentRoute.path === '/') {
        this.$route.router.go(defaultRoute)
        this.selectedRoute = defaultRoute
      } else {
        this.selectedRoute = this.$route.router._currentRoute.path
      }

    },

    methods: {
      changeRoute(route){
        this.selectedRoute = route
      }
    }
  }
</script>
<style type="text/css">
  .cus-top-nav {
    width: 100%;
    height: 50px;
    background-color: #fff;
  }

  .cus-top-nav > nav {
    display: inline-block;
    height: 50px;
    line-height: 50px;
  }

  .cus-top-nav > title {
    display: inline-block;
    height: 50px;
    line-height: 50px;
  }

  .cus-top-nav > title {
    font-size: 16px;
    color: #b3b3b3;
    padding: 0 16px;
  }

  .cus-top-nav > nav > a {
    display: inline-block;
    font-size: 16px;
    color: #666666;
    box-sizing: content-box;
    line-height: 44px;
  }

  .cus-top-nav > nav > a > div {
    padding: 0 16px;
  }

  .cus-top-nav > nav > a:after {
    display: block;
    content: ' ';
    height: 4px;
    border-bottom: 2px solid #72efd4;
    transform: scale(0);
    transition-duration: 250ms;
  }

  .cus-top-nav > nav > a:hover:after {
    transform: scale(1);
  }

  .cus-top-nav > nav > .a-selected:after {
    border-bottom: 4px solid #30EFEC;
    transform: scale(1);
  }

  .cus-content {
    margin: 16px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 8px;
  }
</style>
