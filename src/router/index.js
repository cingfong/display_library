import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index";
import vueSimpleSmoothScroll from "../views/vue-simple-smooth-scroll";
import silkSmoothScroller from "../views/silk-smooth-scroller";

Vue.use(VueRouter);
const routes = [
  { path: "/", name: "index", component: index },
  {
    path: "/smooth-scroll",
    name: "smoothScroll",
    component: vueSimpleSmoothScroll,
  },
  {
    path: "/silk-smooth-scroll",
    name: "silkSmoothScroll",
    component: silkSmoothScroller,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
