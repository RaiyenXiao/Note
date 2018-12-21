## Vue-cli快速构建规范的 VUE 项目骨架

### vue-cli 的安装

对 npm 速度表示不理想的 可以尝试淘宝的 CNPM

```
npm install -g @vue/cli
```
### 拉取 2.x 模板 (旧版本)

```
npm install -g @vue/cli-init
```

### 使用 vue-cli-2 生成项目

```
vue init webpack my-project
```
下面是我创建项目我所选的选项：
![](/Vue-cli/image/vue-cli_1.png)
- 推荐使用 运行时 + 编译时，通常需要 webpack 编译 .vue 模板。

我们使用` npm i` 安装` Vue-Cli` 的依赖，生成 `node_modules `文件夹,引入 `CSS reset`

修改`main.js` 
```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入样式重置
import '../static/css/reset.css'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

`npm run dev`( # serve with hot reload at localhost:8080)



