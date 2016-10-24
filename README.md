# ubase-vue-example
vue application based ubase-vue

## Table of contents
* [前端基础入门](#starting)
* [准备工作](#prepare)
* [快速入门](#quick-start)
* [应用目录结构](#structure)
* [config.json配置项说明](#config)
* [gulpfile.babel.js配置说明](#gulp)
* [支持弹框类型(5种)](#dialog)
* [事件触发方式](#event)
* [state更新方式](#state)


## 前端基础入门
* [vue组件文档](http://res.wisedu.com/FS/vue-doc/module-utils_pageUtil.html)
* [vue官方api文档](http://cn.vuejs.org/api/)

## 准备工作
* 安装nodejs环境 -[for windows](http://res.wisedu.com/FS/tools/node-v5.6.0-x64.msi) | -[for mac](http://res.wisedu.com/FS/tools/node-v6.3.0.pkg)
* 设置npm国内镜像，命令行执行: `npm config set registry https://registry.npm.taobao.org`
* 安装基础库，命令行执行：`npm install -g gulp yo`
* 安装ubase脚手架，命令行执行：`npm install -g generator-vum`
* 下载[sublime text3](http://res.wisedu.com/FS/tools/sublime%20text%20vue.zip)前端编辑器，解压后直接使用，无需安装

## 快速入门

* 生成APP目录结构，进入项目待存放目录，打开命令行执行：yo vum，选择ubase选项->输入项目名称->回车
* 生成APP页面， 进入第一步生成的src/pages/文件夹，打开命令行执行：yo vum，选择页面类型 -> 回答是否是主页面(app就一个主页面) -> 输入页面名称（名称由字母组成）->回车

* 当前目录命令行下执行gulp命令.
* 打开浏览器进入 http://localhost:8081 查看.

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

## config.json配置项说明
```
{
  "APP_NAME": "应用名称", // app的名称，网页标题和页面顶部都显示该名称
  "BH_VERSION": "1.2", // 设置bh的版本 bh目前都使用1.2版本
  "LANG": "cn", // 设置国际化语言
  "MINI_MODE": false, // 设置是否使用mini模式展示， mini模式是展示页面主题部分
  "HEADER": { //  头部配置项
    "dropMenu": [{
      "text": "就业资讯师",
      "active": true
    }, {
      "text": "就业管理人员"
    }],
    "logo": "http://res.wisedu.com/scenes/public/images/demo/logo.png",
    "icons": ["icon-apps"],
    "userImage": "http://res.wisedu.com/scenes/public/images/demo/user1.png",
    "userInfo": {
      "image": "http://res.wisedu.com/scenes/public/images/demo/user1.png",
      "info": [
        "01118888",
        "张晓明  男",
        "南京理工大学  信息化办公室",
        "zhangxm@wisedu.com",
        "18888888888"
      ],
      "logoutHref": "javascript:void(0);"
    }
  }
}
```

## gulpfile.babel.js配置说明
```
{
  // 配置别名
  alias: {
    'components': path.resolve(__dirname, './src/components')
  },

  // 端口
  port: '8081',

  // meta地址
  metaInfoUrl: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/jcsj-apps/',

  // mock server代理
  proxy: [{ source: '/jcsj-apps-web', target: 'http://res.wisedu.com:8000' }]
}
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

