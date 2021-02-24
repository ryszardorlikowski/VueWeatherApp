import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css';
import '@/assets/styles/main.css'
//costume imports
import router from '@/router'
import store from '@/store'
import UserApiService from "@/services/users.api.service";

Vue.config.productionTip = false
UserApiService.init();
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
