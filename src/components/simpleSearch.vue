<template>
  <div class="search">
    <div class="bh-simple-search">
      <input class="bh-form-control" type="text" :placeholder="placeholder">
      <a href="javascript:void(0)"><i class="iconfont"></i></a>
    </div>
    <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-small waves-effect search-button" @click="doSearch(searchEvent)">搜索</a>
  </div>
</template>
<style scoped lang="sass">
.bh-simple-search {
  width: 300px;
  display: inline-block;
}

.search-button {
  vertical-align: top;
}
</style>
<script>
export default {
  props: ['placeholder', 'searchEvent'],

  methods: {
    doSearch(searchEvent) {
      this.$dispatch(searchEvent)
    }
  }
}
</script>
