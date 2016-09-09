<template>
  <div>
    <ul>
      <li v-for="item in tabs">{{item.title}}</li>
    </ul>
    <div v-for="item in tabs" class="bh-mt-16">
     <component :is="item.component" keep-alive></component>
    </div>
  </div>
</template>
<style scoped lang="sass">
</style>
<script>
export default {
  props: ['name', 'tabs'],
  data: function() {
    return {

    }
  },
  created() {
    var self = this
    this.tabs.forEach(function(tab){
      self.$options.components[tab.component] = self.$parent.$options.components[tab.component]
    })
  },
  ready() {
    var el = $(this.$el)

    el.jqxTabs({
      width: '100%',
    })
  }
}
</script>
