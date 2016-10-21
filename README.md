# ubase-vue-example
vue application based ubase-vue

## 应用目录结构
```
src/
├── app1/
│   ├── page1/
│   │   ├── page11/
│   │   │   ├── page11.i18n.js
│   │   │   ├── page11.service.js
│   │   │   ├── page11.vue
│   │   │   └── page11.vuex.js
│   │   ├── page1.i18n.js
│   │   ├── page1.service.js
│   │   ├── page1.vue
│   │   ├── page1.vuex.js
│   │   └── ···
│   ├── page2/
│   │   ├── page2.i18n.js
│   │   ├── page2.service.js
│   │   ├── page2.vue
│   │   ├── page2.vuex.js
│   │   └── ···
│   ├── config.json
│   ├── routes.js
│   └── index.html
├── app2/
│   ├── page21/
│   │   ├── page21.i18n.js
│   │   ├── page21.service.js
│   │   ├── page21.vue
│   │   ├── page21.vuex.js
│   │   └── ···
│   ├── pag22/
│   │   ├── pag22.i18n.js
│   │   ├── pag22.service.js
│   │   ├── pag22.vue
│   │   ├── pag22.vuex.js
│   │   └── ···
│   ├── config.json
│   ├── routes.js
│   └── index.html
└── statics/
```

## 支持弹框类型(5种)

### 纸质弹框

#### 调用方式
* 打开
```
Vue.paperDialog({
    title: "编辑"
    currentView: 'addOrEdit'
});
```
* 手动隐藏
```
Vue.paperDialog('hide')
```

#### Properties

| 名称  | 描述 | 类型 | 默认值 | 备注 |
| ---    | ---   | ---   | ---     | ---   |
| currentView | 组件名称 | String | '' | 纸质弹框中需要显示的vue组件名称（框架通过动态组件加载）|
| title | 弹框标题 | String | -- | 如果动态组件中未设置h2标题，则弹框的标题为该title |

### 属性弹框

#### 调用方式
* 打开
```
Vue.propertyDialog({
    currentView: 'departCategoryAddOrEdit',
    okEvent: 'departCategoryAddOrEdit:save',
    title: Vue.t('departCategory.propertyDialog.edit_title'),
    footerShow: false
})
```
* 手动隐藏
```
Vue.propertyDialog('hide')
```

#### Properties

| 名称  | 描述 | 类型 | 默认值 | 备注 |
| ---    | ---   | ---   | ---     | ---   |
| currentView | 组件名称 | String | -- | 弹框中需要显示的vue组件名称（框架通过动态组件加载）|
| title | 弹框标题 | String | -- | 如果动态组件中未设置h2标题，则弹框的标题为该title |
| footerShow | 是否显示底部按钮 | true | -- | 底部按钮区域是否显示 |
| okEvent | 确定按钮事件 | Function | -- | 底部确定按钮事件 |

### 对话框
* 打开
```
Vue.dialog({
    currentView: 'departCategoryAddOrEdit',
    title: Vue.t('departCategory.propertyDialog.edit_title'),
    width: '400px',
    height: '500px'
})
```
* 手动隐藏
```
Vue.dialog('hide')
```

#### Properties

| 名称  | 描述 | 类型 | 默认值 | 备注 |
| ---    | ---   | ---   | ---     | ---   |
| currentView | 组件名称 | String | -- | 对话框中需要显示的vue组件名称（框架通过动态组件加载）|
| title | 弹框标题 | String | -- | 如果动态组件中未设置h2标题，则弹框的标题为该title |
| width | 宽度 | String | '500px' | 对话框宽度 |
| height | 高度 | String | '600px' | 对话框高度 |
| buttons | 自定义按钮组 | Array | -- | [{text: '确定',className: 'bh-btn-primary',callback: callback}] |


### tip弹框
* 打开
```
Vue.tip({
    content: '保存成功！',
    state: 'success',
})
```

#### Properties

| 名称  | 描述 | 类型 | 默认值 | 备注 |
| ---    | ---   | ---   | ---     | ---   |
| content | 提示内容 | String | '' | |
| state | 提示类型 | String | -- | 可选值：primary, success, warning, danger, loading  |
| hideWaitTime | 自定义停留时间 | Integer | 5000 |  |
| iconClass | 自定义图标提示 | String | -- | 可选 |
| onClosed | 提示关闭的回调 | Function | -- |  |


### toast弹框
* 打开
```
Vue.toast({
    type: 'warning',
    title: '确定删除吗？',
    content: '删除后数据将无法恢复？',
    okEvent: 'campus:tipdialog:del'
})
```

#### Properties

| 名称  | 描述 | 类型 | 默认值 | 备注 |
| ---    | ---   | ---   | ---     | ---   |
| title | 提示标题 | String | -- |   |
| content | 弹框内容 | String | -- | |
| type | 弹框类型 | String | -- | 可选值：success, warning, danger |
| okEvent | 确定按钮事件 | Function | -- |  |
| okText | 确定按钮文字 | String | 确定 | |
| cancelEvent | 取消按钮事件 | Function | -- |  |
| cancelText | 取消按钮文字 | String | 取消 |  |


## 事件触发方式
```
Vue.broadcast('module1:setvalue', row)  // module1:setvalue定义在vue文件中的events中
```

## state更新方式
```
Vue.updateState('test', {'emapCard.params': {a: 1}, 'title': '标题'}) // test表示要更新test.vuex.js中的state
```

## Setup

### clone

```bash
$ git clone https://github.com/Litor/ubase-vue-example.git
```

### install

```bash
$ npm install
```

### run

dev
```bash
$ npm run dev
```

production
```bash
$ npm run build
```

