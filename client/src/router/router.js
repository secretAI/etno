import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";

const routes = [
  {path: "/", component: Login},
  {path: "/signup", component: SignUp}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
