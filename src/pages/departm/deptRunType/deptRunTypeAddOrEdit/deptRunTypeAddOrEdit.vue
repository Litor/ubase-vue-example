<template>
  <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
</template>
<script>
import service from './deptRunTypeAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.deptRunTypeAddOrEdit
      }
    }
  },

  events: {
    'deptRunTypeAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'deptRunTypeAddOrEdit:save': function() {
      var ret = this.$refs.form.validate()
      console.log(ret)
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.tipPop(this, 'save_success')
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
