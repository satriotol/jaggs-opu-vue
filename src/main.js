import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vSelect from "vue-select";
import EasySlider from 'vue-easy-slider'


import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);
Vue.use(EasySlider)


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
