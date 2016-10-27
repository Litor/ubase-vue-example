<template>
  <emap-form v-ref:form offset-top=0 :options="pageState.options" :outline="pageState.outline"></emap-form>
</template>
<script  type="text/ecmascript-6">
import service from './deptRunTypeAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.deptRunTypeAddOrEdit
      }
    }
  },

  events: {
    'deptRunTypeAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'deptRunTypeAddOrEdit:save': function() {
      var ret = this.$refs.form.validate()
      console.log(ret)
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('deptRunTypeAddOrEdit.tip.save_success')
        })
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
