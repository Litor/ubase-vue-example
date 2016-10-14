<template>
  <div>
    <div class="week-wrap">
      <div v-for="week in weeks" class="week-title" :class="{'wenkend-title':(week == '日' || week === '六')}">
        星期{{week}}
      </div>
    </div>
    <div v-for="item in cldInfo" class="day-item">
      <span v-bind:class="{ 'prev-next-day': item.prevMonth || item.nextMonth }" class="s-day">{{item.solarFestival || item.sDay}}</span>
      <span v-bind:class="{ 'prev-next-day': item.prevMonth || item.nextMonth }" class="l-day">{{item.lunarFestival || item.lDayName}}</span>
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
      weeks: ['日', '一', '二', '三', '四', '五', '六']
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
  text-align: center;
  height: 32px;
  line-height: 32px;
  background-color: rgba(91, 161, 216, 0.7);
}

.wenkend-title {
  background-color: rgba(252, 234, 210, 1);
}

.day-item {
  display: inline-block;
  width: calc( (100% / 7));
  height: 80px;
  border:1px solid #eee;
  position: relative;
}

.prev-next-day {
  color: #ccc;
}

.s-day{
  font-weight: 700;
  font-size: 14px;
  display: inline-block;
  margin-top: 4px;
  margin-left: 8px;
}

.l-day{
  font-size: 14px;
  display: inline-block;
  position: relative;
  right: 8px;
  position: absolute;
}
</style>
