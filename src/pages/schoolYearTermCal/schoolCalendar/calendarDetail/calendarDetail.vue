<template>
  <article bh-layout-role="single">
    <h2>
      <span v-html="pageState.calendarProfile.schoolYear"></span>
      <span v-html="pageState.calendarProfile.term" class="title-term"></span>
      <a href="javascript:void(0);" class="bh-tag bh-tag-warning current-term" v-if="pageState.calendarProfile.isThisTerm">当前学期</a>
    </h2>
    <section>
      <input type="" name="" v-model="pageState.year" number>
      <input type="" name="" v-model="pageState.month" number>
      <calendar :year='pageState.year' :month="pageState.month"></calendar>
    </section>
  </article>
</template>
<script  type="text/ecmascript-6">
import service from './calendarDetail.service'

export default {
  components: {},

  vuex: {
    getters: {
      pageState: function(state) {
        return state.calendarDetail
      }
    }
  },

  events: {
    'calendardetail:init': function(wid) {
      Promise.all([service.getByWid(wid), service.getDateEventByCalendarWid(wid)]).then(function(res) {
        console.log(res)
        Vue.updateState('calendarDetail', {
          'calendarProfile': res[0],
          'calendarDetail': res[1]
        })
      })
    }
  }
}
</script>
<style type="text/css" scoped>
.title-term {
  font-size: 14px;
  display: inline-block;
  margin-left: 8px;
}

.current-term {
  font-size: 14px;
}
</style>
