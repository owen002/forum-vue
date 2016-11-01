import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './vuex/store'

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode:'history',
  routes: routes
});

new Vue({
  router,
  store
}).$mount('#app');
