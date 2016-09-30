var Calendar = function($) {

  var tpl = getTpl();

  var zc = 1;

  function getTpl() {
    var tplArray = [];
    tplArray.push('<div class="calendar-wrap"><div class="real-wrap">');
    tplArray.push(' <div class="h" onselectstart="return false"><div class="cal-month-last"></div><div class="t">{{year}}年{{month}}月</div><div class="cal-month-next"></div></div>');
    tplArray.push('<div class="cal-topside"><div class="calendar" data-index="0">');
    tplArray.push(' <table>');
    tplArray.push('   <thead><tr><th class="w1 cal-month-w">一</th><th class="w2 cal-month-w">二</th><th class="w3 cal-month-w">三</th><th class="w4 cal-month-w">四</th><th class="w5 cal-month-w">五</th><th class="w6 cal-month-w">六</th><th class="w0 cal-month-w">日</th><th class="cal-month-zc"></th><th class="cal-month-zcl">周信息栏</th></tr></thead>');
    tplArray.push('   <tbody>');
    tplArray.push('     {{#tr}}<tr>');
    tplArray.push('       {{#td}}<td class="w1 st st-d {{#weekend}}weekend{{/weekend}}" data-info="disable" {{#id}}valid{{/id}}><span class="{{#isfestival}}f-red{{/isfestival}}" {{#id}}data-id="{{id}}"{{/id}}>{{text}}</span></td>{{/td}}');
    tplArray.push('     <td>{{#zc}}<div class="zc">{{zc}}</div>{{/zc}}</td><td {{#zc}}data-zc="{{zc}}"{{/zc}} style="border-bottom:1px dashed gray;text-align:left;font-weight:normal;"><span>{{tip}}</span></td>');
    tplArray.push('     </tr>{{/tr}}');
    tplArray.push('   </tbody>');
    tplArray.push(' </table>');
    tplArray.push(' <div class="cal-cld_dbg">{{month}}</div>');
    tplArray.push('</div>');
    tplArray.push('</div>');
    tplArray.push('<div class="cal-bottomside">');
    tplArray.push('   {{#daytip}}<div class="hdxx-list"><div hdxx-del><span class="cal-day-tip"></span>&nbsp;<span>{{text}}</span><span class="hdxx-del" data-id="{{day}}"></span></div></div>{{/daytip}}');
    tplArray.push('</div>');
    tplArray.push('</div>');
    tplArray.push('</div>');

    return tplArray.join("");
  }

  var Today = new Date();
  var tY = Today.getFullYear();
  var tM = Today.getMonth();
  var tD = Today.getDate();

  var lunarInfo = new Array(
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0);

  var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
  var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
  var Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
  var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", " 大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至")
  var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758)
  var nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十')
  var nStr2 = new Array('初', '十', '廿', '卅', '　')
  var monthName = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");

  //国历节日 *表示放假日
  var sFtv = new Array(
    "0101*元旦",
    "0214 情人节",
    "0308 妇女节",
    "0312 植树节",
    "0315 消费者权益日",
    "0317 St. Patrick's",
    "0401 愚人节",
    "0501 劳动节",
    "0504 青年节",
    "0512 护士节",
    "0520 文珊生日",
    "0601 儿童节",
    "0613 坤生日",
    "0614 Flag Day",
    "0701 建党节 香港回归纪念",
    "0801 建军节",
    "0808 父亲节",
    "0908 茂生日",
    "0909 ***逝世纪念",
    "0910 教师节",
    "0928 孔子诞辰",
    "1001*国庆节",
    "1006 老人节",
    "1011 少珊生日",
    "1024 联合国日",
    "1111 Veteran's / Remembrance Day",
    "1112 孙中山诞辰纪念",
    "1220 澳门回归纪念",
    "1225 Christmas Day",
    "1226 ***诞辰纪念");

  //农历节日 *表示放假日
  var lFtv = new Array(
    "0101*春节",
    "0115 元宵节",
    "0505 端午节",
    "0707 七夕情人节",
    "0715 中元节",
    "0815 中秋节",
    "0909 重阳节",
    "1208 腊八节",
    "1224 小年",
    "0100*除夕");

  //国历节日 *表示放假日
  var sFtv_short = new Array(
    "0101 元旦",
    "0501 劳动",
    "1001 国庆");

  //农历节日 *表示放假日
  var lFtv_short = new Array(
    "0101 春节",
    "0505 端午",
    "0815 中秋",
    "0100 除夕");

  //某月的第几个星期几
  var wFtv = new Array(
    "0131 Martin Luther King Day",
    "0231 President's Day",
    "0520 母亲节",
    "0530 Armed Forces Day",
    "0531 Victoria Day",
    "0716 合作节",
    "0730 被奴役国家周",
    "0811 Civic Holiday",
    "0911 Labor Holiday",
    "1021 Columbus Day",
    "1144 Thanksgiving");


  /*****************************************************************************
   日期计算
   *****************************************************************************/

  //====================================== 传回农历 y年的总天数
  function lYearDays(y) {
    var i, sum = 348
    for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
    return (sum + leapDays(y));
  }

  //====================================== 传回农历 y年闰月的天数
  function leapDays(y) {
    if (leapMonth(y)) return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
    else return (0)
  }

  //====================================== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
  function leapMonth(y) {
    return (lunarInfo[y - 1900] & 0xf);
  }

  //====================================== 传回农历 y年m月的总天数
  function monthDays(y, m) {
    return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
  }

  //====================================== 算出农历, 传入日期物件, 传回农历日期物件
  // 该物件属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl
  function Lunar(objDate) {

    var i, leap = 0,
      temp = 0
    var baseDate = new Date(1900, 0, 31)
    var offset = (objDate - baseDate) / 86400000

    this.dayCyl = offset + 40
    this.monCyl = 14

    for (i = 1900; i < 2050 && offset > 0; i++) {
      temp = lYearDays(i)
      offset -= temp;
      this.monCyl += 12;
    }

    if (offset < 0) {
      offset += temp;
      i--;
      this.monCyl -= 12;
    }

    this.year = i;
    this.yearCyl = i - 1864;

    leap = leapMonth(i); //闰哪个月
    this.isLeap = false;

    for (i = 1; i < 13 && offset > 0; i++) {
      //闰月
      if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
        --i;
        this.isLeap = true;
        temp = leapDays(this.year);
      } else {
        temp = monthDays(this.year, i);
      }

      //解除闰月
      if (this.isLeap == true && i == (leap + 1))
        this.isLeap = false;
      offset -= temp;
      if (this.isLeap == false)
        this.monCyl++;
    }

    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (this.isLeap) {
        this.isLeap = false;
      } else {
        this.isLeap = true;
        --i;
        --this.monCyl;
      }
    }

    if (offset < 0) {
      offset += temp;
      --i;
      --this.monCyl;
    }

    this.month = i;
    this.day = offset + 1;
  }

  //==============================传回国历 y年某m+1月的天数
  function solarDays(y, m) {
    if (m == 1)
      return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28)
    else
      return (solarMonth[m])
  }
  //============================== 传入 offset 传回干支, 0=甲子
  function cyclical(num) {
    return (Gan[num % 10] + Zhi[num % 12])
  }

  //============================== 月历属性
  function calElement(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay) {

    this.isToday = false;
    //国历
    this.sYear = sYear;
    this.sMonth = sMonth;
    this.sDay = sDay;
    this.week = nStr1[week];
    this.weekIndex = week == 0 ? 7 : week;
    //农历
    this.lYear = lYear;
    this.lMonth = lMonth;
    this.lDay = lDay;
    this.isLeap = isLeap;
    //干支
    this.cYear = cYear;
    this.cMonth = cMonth;
    this.cDay = cDay;

    this.color = '';

    this.lunarFestival = ''; //农历节日
    this.solarFestival = ''; //国历节日
    this.solarTerms = ''; //节气

  }

  //===== 某年的第n个节气为几日(从0小寒起算)
  function sTerm(y, n) {
    var offDate = new Date((31556925974.7 * (y - 1900) + sTermInfo[n] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
    return (offDate.getUTCDate())
  }

  //============================== 传回月历物件 (y年,m+1月)
  function _calendar(y, m) {

    var sDObj, lDObj, lY, lM, lD = 1,
      lL, lX = 0,
      tmp1, tmp2
    var lDPOS = new Array(3)
    var n = 0
    var firstLM = 0

    sDObj = new Date(y, m, 1) //当月一日日期

    this.length = solarDays(y, m) //国历当月天数
    this.firstWeek = sDObj.getDay() //国历当月1日星期几


    for (var i = 0; i < this.length; i++) {

      if (lD > lX) {
        sDObj = new Date(y, m, i + 1) //当月一日日期
        lDObj = new Lunar(sDObj) //农历
        lY = lDObj.year //农历年
        lM = lDObj.month //农历月
        lD = lDObj.day //农历日
        lL = lDObj.isLeap //农历是否闰月
        lX = lL ? leapDays(lY) : monthDays(lY, lM) //农历当月最後一天

        if (n == 0) firstLM = lM
        lDPOS[n++] = i - lD + 1
      }

      //sYear,sMonth,sDay,week,
      //lYear,lMonth,lDay,isLeap,
      //cYear,cMonth,cDay
      this[i] = new calElement(y, m + 1, i + 1, (i + this.firstWeek) % 7,
        lY, lM, lD++, lL,
        cyclical(lDObj.yearCyl), cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++))


      if ((i + this.firstWeek) % 7 == 0) this[i].color = 'red' //周日颜色
      if ((i + this.firstWeek) % 14 == 13) this[i].color = 'red' //周休二日颜色
    }

    //节气
    tmp1 = sTerm(y, m * 2) - 1
    tmp2 = sTerm(y, m * 2 + 1) - 1
    this[tmp1].solarTerms = solarTerm[m * 2]
    this[tmp2].solarTerms = solarTerm[m * 2 + 1]
    if (m == 3) { this[tmp1].color = 'red';
      this[tmp1].festival = solarTerm[m * 2]; } //清明颜色

    //国历节日
    for (var i = 0; i < sFtv.length; i++) {
      if (sFtv[i].match(/^(\d{2})(\d{2})([\s*])(.+)$/)) {
        if (Number(RegExp.$1) == (m + 1)) {
          this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + ' '
          if (RegExp.$3 == '*') this[Number(RegExp.$2) - 1].color = 'red'
        }
      }
    }

    //国历节日
    //for(i in sFtv_short){
    for (var i = 0; i < sFtv_short.length; i++) {
      if (sFtv_short[i].match(/^(\d{2})(\d{2})([\s*])(.+)$/)) {
        if (Number(RegExp.$1) == (m + 1)) {
          this[Number(RegExp.$2) - 1].festival = RegExp.$4;
        }
      }
    }

    //月周节日
    for (var i = 0; i < wFtv.length; i++) {
      //for(i in wFtv){
      if (wFtv[i].match(/^(\d{2})(d)(\d)([\s*])(.+)$/)) {
        if (Number(RegExp.$1) == (m + 1)) {
          tmp1 = Number(RegExp.$2)
          tmp2 = Number(RegExp.$3)
          this[((this.firstWeek > tmp2) ? 7 : 0) + 7 * (tmp1 - 1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' '
        }
      }
    }

    //农历节日
    for (var i = 0; i < lFtv.length; i++)
    //for(i in lFtv)
      if (lFtv[i].match(/^(\d{2})(.{2})([\s*])(.+)$/)) {
        tmp1 = Number(RegExp.$1) - firstLM
        if (tmp1 == -11) tmp1 = 1
        if (tmp1 >= 0 && tmp1 < n) {
          tmp2 = lDPOS[tmp1] + Number(RegExp.$2) - 1
          if (tmp2 >= 0 && tmp2 < this.length) {
            this[tmp2].lunarFestival += RegExp.$4 + ' '
            if (RegExp.$3 == '*') this[tmp2].color = 'red'
          }
        }
      }

      //农历节日
    for (var i = 0; i < lFtv_short.length; i++)
    //for(i in lFtv_short)
      if (lFtv_short[i].match(/^(\d{2})(.{2})([\s*])(.+)$/)) {
        tmp1 = Number(RegExp.$1) - firstLM
        if (tmp1 == -11) tmp1 = 1
        if (tmp1 >= 0 && tmp1 < n) {
          tmp2 = lDPOS[tmp1] + Number(RegExp.$2) - 1
          if (tmp2 >= 0 && tmp2 < this.length) {
            this[tmp2].festival = RegExp.$4;
          }
        }
      }
      //黑色星期五
    if ((this.firstWeek + 12) % 7 == 5)
      this[12].solarFestival += '黑色星期五 '

    //今日
    if (y == tY && m == tM) this[tD - 1].isToday = true;

  }

  var calendar = function(__params__) {

    /**DOM元素id*/
    var domId = null;

    /**学期开始日期*/
    var startDate = null;

    /**显示月份，空表示显示6个月，不为空则显示showMonth代表的月份*/
    var showMonth = null;

    /**周计划*/
    /**
     [{id:'1',text:'开学'}{id:'2', text:'正式上课'}...]
     */
    var weekPlan = null;

    /**天计划*/
    /**
     [{start:'20140910',end:'20140911',text:'教师节活动'}{start:'20141001',end:'20141007', text:'国庆节放假'}...]
     */
    var dayPlan = null;

    var zc = 1;

    this.setDomId = function(t) {
      domId = t;
    }

    this.getDomId = function() {
      return domId;
    }

    this.setStartDate = function(t) {
      startDate = t;
    }

    this.getStartDate = function() {
      return startDate;
    }

    this.setWeekPlan = function(t) {
      weekPlan = t;
    }

    this.getWeekPlan = function() {
      return weekPlan;
    }

    this.setDayPlan = function(t) {
      dayPlan = t;
    }

    this.getDayPlan = function() {
      return dayPlan;
    }

    this.getZc = function() {
      return zc;
    }

    this.setZc = function(t) {
      zc = t;
    }

    this.getShowMonth = function() {
      return showMonth;
    }
    this.setShowMonth = function(t) {
      showMonth = t;
    }
    if (__params__ != null || __params__ != undefined) {
      if (__params__.startDate != null) startDate = __params__.startDate;
      if (__params__.weekPlan != null) weekPlan = __params__.weekPlan;
      if (__params__.dayPlan != null) dayPlan = __params__.dayPlan;
      if (__params__.domId != null) domId = __params__.domId;
      if (__params__.showMonth != null) showMonth = __params__.showMonth;
    }
  }

  calendar.prototype = {
    getTplData: function(year, month) {
      var weekPlan = this.getWeekPlan();
      var date = this.getStartDateArray();
      var _this = this;
      var cld = new _calendar(year, month);
      var tplData = {};
      tplData.year = year;
      tplData.month = month + 1;
      tplData.tr = [];
      tplData.daytip = [];
      var index = 0;
      var zc = this.getZc();
      while (index < cld.length) {
        tplData.tr.push(getOneWeekData(cld));
      }

      function getOneWeekData(cld) {
        var tds = {};
        var td = [];
        var count = 0;
        var zcoffset = false;
        for (var i = index; i < cld.length; i++) {
          count++;
          if (index == 0) {
            if (zc > 1 && cld[0].weekIndex > 1) {
              zcoffset = true;
            }
            for (var j = 0; j < cld[0].weekIndex - 1; j++) {
              td.push({ id: "", text: "" });
              count++;
            }
          }
          var month = cld[i].sMonth,
            day = cld[i].sDay;

          if (cld[i].sMonth < 10) month = "0" + month;
          if (cld[i].sDay < 10) day = "0" + day;
          var daytip = _this.getDayPlanInfo(cld[i].sYear, cld[i].sMonth, cld[i].sDay);
          if (daytip != null) tplData.daytip.push(daytip);
          if (cld[i].sYear == date.startYear && cld[i].sMonth == (date.startMonth + 1) && cld[i].sDay == (date.startDay + 1)) { _this.zcStart = true; }
          var isfestival = _this.isFestival(cld[i].sYear, cld[i].sMonth, cld[i].sDay);
          var weekend = (cld[i].weekIndex == 6 || cld[i].weekIndex == 7) ? true : false;
          td.push({ id: cld[i].sYear + "_" + month + "_" + day, text: (cld[i].festival != null ? cld[i].festival : cld[i].sDay), weekend: weekend, isfestival: isfestival ? true : false });
          index++;
          if (cld[i].weekIndex == 7) break;
        }
        tds.td = td;
        if (_this.zcStart) {
          if (zcoffset) {
            zc = zc - 1;
          }
          tds.zc = zc;
          for (var i = 0; i < weekPlan.length; i++) {
            if (weekPlan[i].zc == zc) {
              tds.tip = weekPlan[i].text;
            }
          }
          _this.setZc(++zc);
        }

        for (var i = 0; i < 7 - count; i++) {
          tds.td.push({ id: "", text: "" });
        }
        return tds;
      }
      return tplData;
    },
    getDayPlanInfo: function(year, month, day) {
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      var dayPlan = this.getDayPlan();
      var currentday = year + "" + month + "" + day;
      for (var i = 0; i < dayPlan.length; i++) {
        if (currentday >= dayPlan[i].start1 && currentday <= dayPlan[i].end1 && !dayPlan[i].hasshow) {
          dayPlan[i].start1.match(/^(\d{4})(\d{2})(\d{2})$/);
          var startMonth = RegExp.$2,
            startDay = RegExp.$3;
          dayPlan[i].end1.match(/^(\d{4})(\d{2})(\d{2})$/);
          var endMonth = RegExp.$2,
            endDay = RegExp.$3;

          var text = "";

          if (endMonth == month && endDay == startDay) {
            text = day + "日 ";
          } else if (endMonth == month && endDay > startDay) {
            text = startDay + "-" + endDay + "日 ";
          } else if (endMonth > month) {
            text = startMonth + "月" + startDay + "日-" + endMonth + "月" + endDay + "日 ";
          }
          dayPlan[i].hasshow = true;
          return { day: dayPlan[i].id, text: text + dayPlan[i].text, isfestival: dayPlan[i].isfestival };
        }
      }
      return null;
    },
    isFestival: function(year, month, day) {
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      var dayPlan = this.getDayPlan();
      var currentday = year + "" + month + "" + day;
      for (var i = 0; i < dayPlan.length; i++) {
        if (currentday >= dayPlan[i].start1 && currentday <= dayPlan[i].end1 && !!dayPlan[i].isfestival) {
          return true;
        }
      }
      return false;
    },
    getStartDateArray: function() {
      var startDate = this.getStartDate().split("_");
      if (startDate == "") {
        return null;
      } else
        return { startYear: parseInt(startDate[0], 10), startMonth: parseInt(startDate[1], 10) - 1, startDay: parseInt(startDate[2], 10) };
    },
    render: function() {

      var domId = this.getDomId();
      var date = this.getStartDateArray();
      if (date == null) {
        $("#" + domId).html("选择学期暂没维护开始结束时间!");
        return;
      }
      var year = date.startYear,
        month = date.startMonth;

      var isMonthWrong = true;
      for (var i = 1; i <= 6; i++) {
        var html = Mustache.render(tpl, this.getTplData(year, month));
        if (++month > 11) {
          year++;
          month = 0;
        }
        if (this.getShowMonth() == null) {
          $("#" + domId).append(html);
          isMonthWrong = false;
        } else if (this.getShowMonth() == month) {
          $("#" + domId).append(html);
          isMonthWrong = false;
        }
      }

      if (isMonthWrong) {
        $("#" + domId).html("您要显示的月份有错误!");
        return;
      }
      this.bindEvent();
    },
    bindEvent: function() {
      var domId = this.getDomId();
    }
  }

  function getInstance(params) {
    params.domId = this.attr("id");
    var instance = new calendar(params);
    instance.render();
    return instance;
  }

  $.prototype.calendar = getInstance;

  return calendar;
}(jQuery);
