import { test_api } from "@/modules";
import axios from "axios";
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
router.beforeEach(async (to, from, next) => {
  if (to.path == '/tables') {
    const res = await test_api()
    if (res.status === 200) {
      next()
    } else {
      router.push('/')
    }
  } else {
    next()
  }
})

export default router;
