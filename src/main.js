// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import router from './router';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



import store from './store/store.js';
import axios from 'axios';

Vue.use(Element);
Vue.config.productionTip = false;
Vue.config.devtools = true;

axios.defaults.baseURL = '';

router.beforeEach((to,from,next) => {
  if (to.meta.requireAuth){
    if (store.getters.isLogin){
      next();
    }else {
      next({
        path : '/login',
        query : {redirect : to.fullPath}
      });
    }
  }else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
