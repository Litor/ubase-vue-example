<template>
  <div class="search">
    <div class="bh-simple-search">
      <input class="bh-form-control" type="text" :placeholder="simpleSearch.placeholder" v-model="keyword">
      <a href="javascript:void(0)"><i class="iconfont"></i></a>
    </div>
    <a href="javascript:void(0);" class="bh-btn bh-btn-primary bh-btn-small waves-effect search-button" @click="doSearch(simpleSearch.searchEvent)">搜索</a>
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
  props: ['name', 'simpleSearch'],
  data: function() {
    return {
      //simpleSearch: {},
      keyword: ''
    }
  },
  created() {
    if (!this.simpleSearch) {
      this.simpleSearch = this.$parent.pageopt[this.name ? this.name : 'simpleSearch']
    }
  },
  methods: {
    doSearch(searchEvent) {
      this.$dispatch(searchEvent)
    }
  }
}
</script>
