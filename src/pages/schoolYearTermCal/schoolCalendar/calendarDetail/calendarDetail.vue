<template>
  <article bh-layout-role="single">
    <h2>
      <span v-html="pageopt.calendarProfile.schoolYear"></span>
      <span v-html="pageopt.calendarProfile.term" class="title-term"></span>
      <a href="javascript:void(0);" class="bh-tag bh-tag-warning current-term" v-if="pageopt.calendarProfile.isThisTerm">当前学期</a>
    </h2>
    <section>
      <input type="" name="" v-model="pageopt.year" number>
      <input type="" name="" v-model="pageopt.month" number>
      <calendar :year='pageopt.year' :month="pageopt.month"></calendar>
    </section>
  </article>
</template>
<script>
import service from './calendarDetail.service'
import { getCalendarProfile, getCalendarDetail } from './calendarDetail.vuex'

export default {
  components: {},

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.calendarDetail
      }
    },

    actions: {
      getCalendarProfile,
      getCalendarDetail
    }
  },

  events: {
    'calendardetail:init': function(wid) {
      this.getCalendarProfile(wid)
      this.getCalendarDetail(wid)
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
