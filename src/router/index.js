import { createRouter, createWebHashHistory } from "vue-router";
const routes = [

  {
    meta: {
      title: "login",
    },
    path: "/",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    meta: {
      title: "tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },




];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
