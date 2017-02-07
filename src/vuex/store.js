import Vuex from 'vuex'
import Vue from 'vue'
import types from './types'
Vue.use(Vuex);

const state = {
  userInfo: {
    username: '',
    age: '',
    userid:''
  },
  rootRem:'',
  maskOpacity:0
};

const getters = {
  [types.GET_USERINFO](state){
    return state.userInfo
  },
  [types.GET_REM](state){
    return state.rootRem
  },
  [types.GET_MASKOPACITY](state){
    return state.maskOpacity
  }
};

const actions = {
  [types.SET_USERINFO](context, user){
    context.commit(types.SET_USERINFO, user);
  },
  [types.MODIFY_REM](context,rootRem){
    context.commit(types.MODIFY_REM,rootRem)
  },
  [types.SET_MASKOPACITY](context,maskop){
    context.commit(types.SET_MASKOPACITY,maskop)
  }
};

const mutations = {
  [types.SET_USERINFO](state, userInfo){
    state.userInfo = userInfo;
  },
  [types.MODIFY_REM](state,rootRem){
    state.rootRem = rootRem;
  },
  [types.SET_TRANSLATE](state,translate){
    state.translateX = translate;
  },
  [types.SET_MASKOPACITY](state,opcity){
    state.maskOpacity = opcity;
  }
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
});

export default store


