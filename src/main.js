import Vue from "vue";
import App from "./App.vue";
import "./assets/statics/site/css/style.css";
import VueRouter from "vue-router";
import index from "../src/components/index.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/index",
    component: index
  }
];
const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
