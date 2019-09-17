### 路由懒加载

 1. 请注意 `component: () => import('..') ` 方式引入路由的页面组件为 懒加载模式。具体可以看 [Vue 官方文档](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

 ```
 const Foo = () => import('./Foo.vue')  
 ```
 ```
 const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
 ```