<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="pageState.options" :outline="pageState.outline"></emap-form>
  </section>
  </article>
</template>
<script  type="text/ecmascript-6">
import service from './teachGroupAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.teachGroupAddOrEdit
      }
    }
  },

  events: {
    'teachGroupAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'teachGroupAddOrEdit:save': function() {
      var ret = this.$refs.form.validate()
      console.log(ret)
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.tip(this, 'save_success')
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
