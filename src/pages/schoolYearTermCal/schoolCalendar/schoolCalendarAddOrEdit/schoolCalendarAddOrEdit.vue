<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="pageState.options" :outline="pageState.outline"></emap-form>
  </section>
</template>
<script  type="text/ecmascript-6">
import service from './schoolCalendarAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.schoolCalendarAddOrEdit
      }
    }
  },

  events: {
    'schoolCalendarAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'schoolCalendarAddOrEdit:save': function() {
      var ret = this.$refs.form.validate()

      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('schoolCalendarAddOrEdit.tip.save_success')
        })
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
