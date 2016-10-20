<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
  </section>
</template>
<script>
import service from './gradeAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.gradeAddOrEdit
      }
    }
  },

  events: {
    'gradeAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'gradeAddOrEdit:save': function() {
      var ret = this.$refs.form.validate()
      
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('gradeAddOrEdit.tip.save_success')
        })
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
