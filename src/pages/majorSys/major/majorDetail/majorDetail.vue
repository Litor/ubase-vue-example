<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
  </section>
</template>
<script>
import service from './majorDetail.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.majorDetail
      }
    }
  },

  events: {
    'majorDetail:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'majorDetail:save': function() {
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
