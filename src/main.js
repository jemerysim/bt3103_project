import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter) 
Vue.use(Vuelidate)
const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

import VueHorizontal from "vue-horizontal";
Vue.component(VueHorizontal)


new Vue({
  render: h => h(App),
  router:myRouter,
}).$mount('#app')
