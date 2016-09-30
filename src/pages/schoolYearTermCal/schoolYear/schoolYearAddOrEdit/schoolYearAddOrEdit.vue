<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
  </section>
</template>
<script>
import service from './schoolYearAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.schoolYearAddOrEdit
      }
    }
  },

  events: {
    'schoolYearAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'schoolYearAddOrEdit:save': function() {
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
