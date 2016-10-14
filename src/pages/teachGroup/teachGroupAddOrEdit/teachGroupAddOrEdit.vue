<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
  </section>
  </article>
</template>
<script>
import service from './teachGroupAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
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
