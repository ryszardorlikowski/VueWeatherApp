import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'weatherApp',
    storage: window.localStorage
})
import users from '@/store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users,
    },
    plugins: [vuexPersist.plugin]
});