import { createRouter, createWebHashHistory } from "vue-router";

const routes = [


  {
    meta: {
      title: "Tables",
    },
    path: "/",
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
