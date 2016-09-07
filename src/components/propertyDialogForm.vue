<script>
function _show(vm, row) {
  var datamodel = WIS_EMAP_SERV.getModel(vm.pagePath, vm.modelName, 'form');
  $.bhPropertyDialog.show({
    title: vm.title,
    content: '<div class="xqwh-form"></div>',
    footer: 'default',
    ok: () => {
      this.save()
    }
  });
  $.bhPropertyDialog.footerShow();

  $('.xqwh-form').emapForm({
    root: '',
    data: datamodel,
    readonly: false,
    model: 'v'
  });

  if (row) {
    $('.xqwh-form').emapForm('setValue', row)
  }
}
export default {
  props: {
    title: {
      default: '编辑数据'
    },
    saveText: {
      default: '保存'
    },
    cancelText: {
      default: '取消'
    },
    pagePath: String,
    modelName: String
  },

  methods: {
    show(row) {
      _show(this, row)
    },

    save(callback) {
      let formValue = $('.xqwh-form').emapForm('getValue')
      callback(formValue)
    }
  }
}
</script>
