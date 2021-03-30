import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import { store } from "./store/index.js"
import { auth } from "./firebase.js";

Vue.config.productionTip = false
Vue.use(VueRouter) 
Vue.use(Vuelidate)
const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

import VueHorizontal from "vue-horizontal";
Vue.component(VueHorizontal)


<<<<<<< HEAD
new Vue({
  render: h => h(App),
  router:myRouter,
}).$mount('#app')
=======
auth.onAuthStateChanged(() => {
  new Vue({
    render: h => h(App),
    router:myRouter,
    store: store,
  }).$mount('#app')
})
>>>>>>> d3ee938c39a507d681fff45593f496201e8d98b9
