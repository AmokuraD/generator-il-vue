import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  <%_ if (routerMode) { _%>
  mode: history,
  base: process.env.BASE_URL,
  <%_ } _%>
  routes,
});

export default router;
