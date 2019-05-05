import Vue from "vue";
import App from "./App.vue";
import "./assets/statics/site/css/style.css";
import VueRouter from "vue-router";
import index from "../src/components/index.vue";
import detail from "./components/detail.vue"
import userDetail from './components/userDetail.vue';
import userOrder from './components/userOrder.vue';

import userIndex from './components/userIndex.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import userCotainer from './components/userCotainer.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);
const routes = [
  {
    path: "/index",
    component: index
  },
  {
    path: "/detail/:id",
    component: detail
  },
  {
    path:'/user',
    component:userCotainer,
    children:[
      {path:'index',component:userIndex},
      {path:'order',component:userOrder},
      {path:'detail',component:userDetail}
    ]
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
