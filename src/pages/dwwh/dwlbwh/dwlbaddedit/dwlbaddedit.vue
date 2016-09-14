<template>
  <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
</template>
<script>
import service from './dwlbaddedit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.dwlbaddedit
      },
    }
  },

  events: {
    'dwlbaddedit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'dwlbaddedit:save': function() {
      var ret = this.$refs.form.validate()
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()

      service.AddOrEdit(info).then(({ data }) => {
        Vue.tipPop(this, 'save_success')
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
