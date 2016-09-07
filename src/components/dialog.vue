<template>
  <div></div>
</template>
<style scoped lang="sass">
.opt-buttons {
  margin-left: -4px;
}
</style>
<script>
export default {
  props: ['type', 'title', 'content'],
  watch: {
    'type': () => {
      $.bhDialog({
        type: this.type || 'warning',
        title: this.title || '您确定要删除所选信息吗？',
        buttons: [{
          text: '确定',
          callback: () => {

            console.log(checked)
          }
        }, {
          text: '取消',
          callback: null
        }]
      });
    }
  },

  methods: {
    show() {
      $.bhDialog({
        type: this.type || 'warning',
        title: this.title || '您确定要删除所选信息吗？',
        buttons: [{
          text: '确定',
          callback: () => {

            console.log(checked)
          }
        }, {
          text: '取消',
          callback: null
        }]
      });
    }
  }
}
</script>
