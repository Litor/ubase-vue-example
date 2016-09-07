<template>
  <div class="opt-buttons bh-mv-16">
    <a href="javascript:void(0);" class="bh-btn bh-btn-{{item.primary?'primary':'default'}} waves-effect" @click='click(item.click)' v-for="item in buttons">{{item.text}}</a>
  </div>
</template>
<style scoped lang="sass">
.opt-buttons {
  margin-left: -4px;
}
</style>
<script>
export default {
  props: ['buttons'],
  methods: {
    click(click) {
       this.$dispatch(click)
    }
  }
}
</script>
