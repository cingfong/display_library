import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import smoothScroll from "vue-simple-smooth-scroll";
Vue.use(smoothScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
