<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <input type="" name="" v-model="year" number>
      <input type="" name="" v-model="month" number>
      <calendar :year='year' :month="month"></calendar>
    </section>
  </article>
</template>
<script>
import service from './calendarDetail.service'

export default {
  components: {},

  data: function() {
    return {
      year: 2015,
      month: 11
    }
  },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.calendarDetail
      },
    }
  },

  events: {

  }
}
</script>
