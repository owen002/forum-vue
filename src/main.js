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
router.beforeEach((to, from, next) => {
  console.log(from,'  ',to);
  next();
})

new Vue({
  router,
  store
}).$mount('#app');
