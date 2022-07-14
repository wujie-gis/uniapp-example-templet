import App from './App';
import Vue from 'vue';
import uView from 'uni_modules/uview-ui';
import store from './store';

Vue.prototype.$store = store;
Vue.config.productionTip = false;
App.mpType = 'app-example';

Vue.use(uView);

const app = new Vue({
  store,
  ...App,
});

// 引入请求封装
require('./util/request/index')(app);
app.$mount();
