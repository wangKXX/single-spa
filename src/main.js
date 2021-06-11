import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import registerApp from "./single-spa-conf";
import { start } from "single-spa";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(Antd);

registerApp();
start();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
