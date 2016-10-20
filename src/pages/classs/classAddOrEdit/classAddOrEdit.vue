<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
    </section>
    <footer>
      <a class="bh-btn bh-btn-primary waves-effect" @click="save()">保存</a>
      <a class="bh-btn bh-btn-default waves-effect" @click="cancel()">取消</a>
    </footer>
  </article>
</template>
<script>
import service from './classAddOrEdit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.classAddOrEdit
      }
    }
  },

  methods: {
    save() {
      this.$emit('classAddOrEdit:save')
    },
    cancel() {
      Vue.paperDialog('hide')
    }
  },

  events: {
    'classAddOrEdit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    'classAddOrEdit:save': function() {
      var ret = this.$refs.form.validate()
      
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('classAddOrEdit.tip.save_success')
        })
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
