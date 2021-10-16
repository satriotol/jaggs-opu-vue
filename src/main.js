import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vSelect from "vue-select";
import EasySlider from 'vue-easy-slider'
import AOS from 'aos'
import 'aos/dist/aos.css'


import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);
Vue.use(EasySlider)


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  mounted() {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true,
      disable: 'mobile',

    })
  },
  render: h => h(App)
}).$mount('#app')
