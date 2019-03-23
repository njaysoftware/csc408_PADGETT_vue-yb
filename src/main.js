import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//add the boostrap framework for the styling features
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//added the axios package that will allow us to make backend requests to are laravel server

window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
