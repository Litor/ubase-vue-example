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
### 对话框
### tip弹框
### toast弹框

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

