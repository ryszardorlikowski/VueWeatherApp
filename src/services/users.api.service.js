import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import tokenService from './token.service'

const UserApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = process.env["VUE_APP_BASE_URL"];
    },

    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
            ] = `Bearer ${tokenService.getToken()}`;
    },

    signIn(userData) {
        return Vue.axios.post('users/auth/token', userData);
    }
}


export default UserApiService;