<template>
  <div style="width:250px;" class="njadd-container">
    <div class="njadd-label">名称</div>
    <div class="njadd-input-wrap">
      <div type="text" id="njadd-input"></div>
    </div>
    <div class="njadd-label">级</div>
  </div>
</template>
<script>
import service from './njadd.service'

export default {
  vuex: {
    getters: {
      pageopt: function(state) {
        return state.njadd
      }
    }
  },

  ready() {
    var inputOptions = $.extend({}, {
      inputMode: 'simple',
      spinButtons: true,
      decimal: null,
      decimalDigits: 0,
      min: 2000,
      max: 3000,
      promptChar: ''
    });
    $('#njadd-input').jqxNumberInput(inputOptions);
    $('#njadd-input').jqxNumberInput('val', 2000)
  },

  events: {
    'njadd:ok': function() {
      var grade = $('#njadd-input').jqxNumberInput('val')
      service.gradeAddOrEdit(grade).then(() => {
        Vue.tipPop(this, 'save_success')
      })
    }
  }
}
</script>
<style type="text/css">
.njadd-container>div {
  display: inline-block;
  vertical-align: middle;
}

.njadd-input-wrap {
  width: 100px;
}

.njadd-label {
  font-weight: 700;
  padding: 0 8px;
}
</style>
