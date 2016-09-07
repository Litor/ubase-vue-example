<template>
    <div class="page-buttons">
      <bh-button v-ref:add  v-if="isAdd()" type="primary" icon="add" >新增</bh-button>
      <bh-button v-ref:del v-if="isDel()" >删除</bh-button>
      <bh-button v-ref:upload v-if="isUpload()" type="primary">导入</bh-button>
      <bh-button v-ref:download v-if="isDownload()">导出</bh-button>
      <bh-button  v-if="isSwitch()" v-ref:table class="buttons-icon" @click="switchTable" :small = 'false' :iconbtn="true" icon="list" ></bh-button>
      <bh-button  v-if="isSwitch()" v-ref:card class="buttons-icon" @click="switchCard" :small="false" :iconbtn="true"   icon="apps" ></bh-button>
    </div>
</template>

<script type="text/ecmascript-6">
    import BhButton from 'components/bh-button/bhButton.vue'

    export default {
        methods:{
            switchTable(){
              this.$refs.card.type = "default";
              this.$refs.table.type = "primary";
            },
            switchCard(){
              this.$refs.card.type = "primary";
              this.$refs.table.type = "default";
            },
          isAdd(){
            return this.add;
          },
          isDel(){
            return this.del;
          },
          isUpload(){
            return this.upload;
          },
          isDownload(){
            return this.download;
          },
          isSwitch(){
            return this.switch;
          }
        },

      ready(){
        var vm = this;
        var addBtn = vm.$refs.add;
        var delBtn = vm.$refs.del;
        var uploadBtn = vm.$refs.upload;
        var downloadBtn = vm.$refs.download;
        var switchTableBtn = vm.$refs.table;
        var switchCardBtn = vm.$refs.card;


        if(addBtn) {
          $(addBtn.$el).on('click', function () {
            vm.$dispatch("add");
          });
        }

        if(delBtn) {
          $(delBtn.$el).on('click', function () {
            vm.$dispatch("del");
          });
        }

        if(uploadBtn) {
          $(uploadBtn.$el).on('click', function () {
            vm.$dispatch("upload");
          });
        }

        if(downloadBtn) {
          $(downloadBtn.$el).on('click', function () {
            vm.$dispatch("download");
          });
        }

        if(switchTableBtn) {
          console.log(switchTableBtn);
          $(switchTableBtn.$el).on('click', function () {
            vm.$dispatch("totable");
          });
        }

        if(switchCardBtn) {
          $(switchCardBtn.$el).on('click', function () {
            vm.$dispatch("tocard");
          })
        }

      },
        components: {BhButton},
      /**
       *  @property {String} [add=true] 是否有新增按钮
       *  @property {Boolean} [del=true] 是否有删除按钮
       *  @property {Boolean} [upload=false] 是否有导入按钮
       *  @property {String} [download=false] 是否有到处按钮
       *  @property {String} [switch=false] 是否有列表和卡片页的切换按钮
       */
      props: {
        'add': {
          type: Boolean,
          default: true
        },
        'del': {
          type: Boolean,
          default: true
        },
        'upload': {
          type: Boolean,
          default: false
        },
        'download':{
          type: Boolean,
          default: false
        },
        'switch':{
          type:Boolean,
          default:false
        }

      }
    }
</script>

<style scoped>

  .page-buttons {
    display: -webkit-flex;
    display: flex;
    position: relative;
    margin-bottom: 10px;
  }

</style>
