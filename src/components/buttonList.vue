<template>
  <div class="opt-buttons bh-mv-16">
    <a href="javascript:void(0);" class="bh-btn bh-btn-{{item.primary?'primary':'default'}} waves-effect" @click='click(item.click)' v-for="item in buttonList">{{item.text}}</a>
  </div>
</template>
<style scoped lang="sass">
.opt-buttons {
  margin-left: -4px;
}
</style>
<script>
export default {
  props: ['name'],
  data: function() {
    return {
      buttonList: []
    }
  },
  created() {
    this.buttonList = this.$parent.pageopt[this.name ? this.name : 'buttonList']
  },
  methods: {
    click(click) {
      this.$dispatch(click)
    }
  }
}
</script>
