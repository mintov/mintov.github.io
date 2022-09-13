// 引入需要的模块
import { createRouter, createWebHistory } from "vue-router";

// 下面使用了es6的对象增强写法，命名必须是routes
const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    component: () => import("page/Home.vue"),
  },
  {
    path: "/full",
    component: () => import("page/FullScreen.vue"),
  },
];

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导出路由
export default router;
