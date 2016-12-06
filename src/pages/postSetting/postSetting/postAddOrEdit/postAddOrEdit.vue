<template>
  <section>
    <emap-form v-ref:form offset-top=0 :options="ps.options" :outline="ps.outline"></emap-form>
  </section>
</template>
<script type="text/ecmascript-6">
  import service from './postAddOrEdit.service'
  import {EmapForm} from 'bh-vue'

  export default {
    components: {EmapForm},

    computed: {
      ps(){
        return this.$store.state.postAddOrEdit
      }
    },

    methods: {
      setValue(val) {
        if (val.preinstall) {
          this.$refs.form.disableItem(['name', 'level', 'status'])
        }

        this.$refs.form.setValue(val)
      },

      save() {
        var ret = this.$refs.form.validate()

        if (!ret) {
          return
        }
        var info = this.$refs.form.getValue()

        Utils.dialog('hide')
        service.addOrEdit(info).then(() => {
          Utils.tip({
            state: 'success',
            content: Vue.t('postAddOrEdit.tip.save_success')
          })
          Ubase.invoke('postSetting.getPostList')
        })
      }
    }
  }
</script>
