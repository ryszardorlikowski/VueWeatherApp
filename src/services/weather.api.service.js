import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import tokenService from "@/services/token.service";

const weatherApiService = {
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
    },

    signUp(userData) {
        return Vue.axios.post('users/create', userData);
    },
    getUserLocations() {
        this.setHeader();
        return Vue.axios.get('locations');
    },

    deleteUserLocations(id) {
        this.setHeader();
        return Vue.axios.delete(`locations/delete/${id}`);
    },
    addUserLocations(locationData) {
        this.setHeader();
        return Vue.axios.post('locations/create', locationData);
    },

    getCurrentWeather(searchQuery) {
        return Vue.axios.get(`weather/current?query=${searchQuery}`);
    },
    getForecastWeather(searchQuery) {
        return Vue.axios.get(`weather/forecast?query=${searchQuery}`);
    },
    getHistoricalWeather(searchQuery) {
        return Vue.axios.get(`weather/historical?query=${searchQuery}`)
    },
    searchLocation(searchQuery, searchByName) {
        return Vue.axios.get(`locations/search?query=${searchQuery}&search_by_name=${searchByName}`);
    },
}


export default weatherApiService;