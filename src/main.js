import Vue from 'vue';
import VueMeta from 'vue-meta';
import './library/FontAwesome';

import './assets/styles/main.scss';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
