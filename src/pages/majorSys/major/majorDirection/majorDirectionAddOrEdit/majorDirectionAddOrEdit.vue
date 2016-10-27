<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="pageState.options" :outline="pageState.outline"></emap-form>
  </section>
</template>
<script  type="text/ecmascript-6">
import service from './majorDirectionAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.majorDirectionAddOrEdit
      }
    }
  },

  events: {
    'majorDirectionAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'majorDirectionAddOrEdit:save': function(test) {

      var ret = this.$refs.form.validate()

      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.dialog('hide')
        Vue.tip({
          state: 'success',
          content: Vue.t('majorDirectionAddOrEdit.tip.save_success')
        })
      })
    }
  }
}
</script>
