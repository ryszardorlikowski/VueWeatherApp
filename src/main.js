import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import movable from "v-movable";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css';
import '@/assets/styles/main.css'
import '@/assets/styles/load-animation.css'
//me plugin imports
import router from '@/router'
import store from '@/store'
import weatherApiService from "@/services/weather.api.service";





Vue.config.productionTip = false
weatherApiService.init();
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta)
Vue.use(movable);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
