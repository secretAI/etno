import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import Dashboard from "../pages/Dashboard.vue";

const routes = [
  {path: "/", redirect: "/login"},
  {path: "/login", component: Login},
  {path: "/signup", component: SignUp},
  {path: "/dashboard", component: Dashboard}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
