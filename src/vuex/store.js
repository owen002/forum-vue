import Vuex from 'vuex'
import Vue from 'vue'
import types from './types'
Vue.use(Vuex);

const state = {
  userInfo: {
    username: '我叫什么名字',
    age: '18岁',
    userid:'1122aaabnb'
  },
  rootRem:''
};

const getters = {
  [types.GET_USERINFO](state){
    return state.userInfo
  },
  [types.GET_REM](state){
    return state.rootRem
  }
};

const actions = {
  [types.SET_USERINFO](context, user){
    context.commit(types.SET_USERINFO, user);
  },
  [types.MODIFY_REM](context,rootRem){
    context.commit(types.MODIFY_REM,rootRem)
  }
};

const mutations = {
  [types.SET_USERINFO](state, userInfo){
    state.userInfo = userInfo;
  },
  [types.MODIFY_REM](state,rootRem){
    state.rootRem = rootRem;
  }
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store


