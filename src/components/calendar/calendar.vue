<template>
  <div>
    <div class="week-wrap">
      <div v-for="week in weeks" class="week-title">
        {{week}}
      </div>
    </div>
    <div v-for="item in cldInfo" class="day-item">
      <span v-bind:class="{ 'prev-next-day': item.prevMonth || item.nextMonth }">{{item.sDay}}</span>
    </div>
  </div>
</template>
<style scoped lang="sass">
.opt-buttons {
  margin-left: -4px;
}
</style>
<script>
import { getCalendarInfo } from './calendar.js'
export default {
  props: {
    year: {
      type: Number,
      default: 2015
    },
    month: {
      type: Number,
      default: 1
    }
  },
  data: function() {
    return {
      weeks: ['一', '二', '三', '四', '五', '六', '日']
    }
  },
  computed: {
    cldInfo: function() {
      return getCalendarInfo(this.year, this.month)
    }
  },
  ready() {
    console.log(this.cldInfo)
  }
}
</script>
<style type="text/css">
.week-wrap {
  width: 100%;
}

.week-title {
  display: inline-block;
  width: calc( (100% / 7));
}

.day-item {
  display: inline-block;
  width: calc( (100% / 7));
  height: 80px;
}

.prev-next-day {
  color: #ccc;
}
</style>
