<template>
  <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
</template>
<script>
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },
  vuex: {
    getters: {
      pageopt: function(state) {
        return state.app.addedit
      }
    }
  },
  methods: {

  },

  events: {
    'form:setvalue': function(val) {
      this.$refs.form.setValue(val)
    }
  }
}
</script>
