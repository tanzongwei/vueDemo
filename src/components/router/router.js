import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**  各个模块 */
export default new Router({
  routes: [
    {
      path: "/Index",
      name: "Index",
      component: Index,
    }
  ]
});
