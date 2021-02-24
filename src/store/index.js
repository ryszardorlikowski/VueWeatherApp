import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from "@/store/getters";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        refresh_token: localStorage.getItem('refresh_token') || '',
        user: {},
        user_locations: []
    },
    getters,
    mutations,
    actions,
});