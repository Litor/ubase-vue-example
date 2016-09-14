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
import service from './zyaddedit.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.zyaddedit
      }
    }
  },

  methods: {
    cancel() {
      Vue.paperDialog('hide')
    },

    save() {
      var ret = this.$refs.form.validate()
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.xxdwSave(info).then(({ data }) => {
        Vue.tipPop(this, 'save_success')
        Vue.paperDialog('hide')
      })
    }
  },

  events: {
    'addedit:setvalue': function(val) {
      this.$refs.form.setValue(val)
    }
  }
}
</script>
