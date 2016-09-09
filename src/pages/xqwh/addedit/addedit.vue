<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
    </section>
  </article>
</template>
<script>
import pageConfig from './addedit.config'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  data: function() {
    return pageConfig
  },

  events: {
    'addedit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'addedit:save': function() {
      console.log(this.$refs.form.getValue())
    }
  }
}
</script>
