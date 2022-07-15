import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // vue的插件机制

// Vuex.Store 构造器选项
const store = new Vuex.Store({
  // 为了不和页面或组件的data中的造成混淆，state中的变量前面建议加上$符号
  state() {
    return {
      // 用户信息
      $userInfo: {},
      $jwt: null,
    };
  },
  getters: {
    getJwt(state) {
      if (state.$jwt) {
        return state.$jwt;
      }
      return uni.getStorageSync('jwt') || null;
    },
    getUserInfo(state) {
      if (state.$userInfo) {
        return state.$userInfo;
      }
      return uni.getStorageSync('userInfo') || {};
    },
  },
  mutations: {
    setUserInfo(state, payload) {
      state.$userInfo = payload;
      state.$jwt = payload.jwt;
      uni.setStorageSync('userInfo', payload);
      uni.setStorageSync('jwt', payload.jwt);
    },
    clearUserInfo(state, payload) {
      state.$userInfo = {};
      state.$jwt = null;
      uni.removeStorageSync('userInfo');
      uni.removeStorageSync('jwt');
    },
  },
  actions: {},
  modules: {},
});

export default store;
