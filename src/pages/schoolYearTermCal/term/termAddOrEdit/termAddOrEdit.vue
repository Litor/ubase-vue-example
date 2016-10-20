<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
  </section>
</template>
<script>
import service from './termAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.termAddOrEdit
      }
    }
  },

  events: {
    'termAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'termAddOrEdit:save': function() {
      var ret = this.$refs.form.validate()

      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('termAddOrEdit.tip.save_success')
        })
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
