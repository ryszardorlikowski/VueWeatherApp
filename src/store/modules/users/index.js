import {SET_AUTH, SET_USER_LOCATIONS, UNSET_AUTH} from "./mutations.type";
import {SIGNIN, LOGOUT, GET_USER_LOCATIONS, DELETE_USER_LOCATION, ADD_USER_LOCATION} from "./actions.type";
import tokenService from '@/services/token.service'
import weatherApiService from '@/services/weather.api.service'

const state = {
    username: '',
    userLocations: [],
    isLoggedIn: !!tokenService.getToken()
}

const actions = {
    [SIGNIN](context, userData) {
        return new Promise((resolve, reject) => {
            weatherApiService.signIn(userData)
                .then(({data}) => {
                    tokenService.setTokens(data);
                    context.commit(SET_AUTH, userData.username);
                    context.dispatch(GET_USER_LOCATIONS).then((data)=>{
                        resolve(data);
                    }).catch(error => {
                        reject(error);
                    });
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    [LOGOUT](context) {
        context.commit(UNSET_AUTH);
        tokenService.deleteTokens();
    },
    [GET_USER_LOCATIONS](context) {
        return new Promise((resolve, reject) => {
            weatherApiService.getUserLocations()
                .then(({data}) => {
                    context.commit(SET_USER_LOCATIONS, data);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    [DELETE_USER_LOCATION](context, id) {
        return new Promise((resolve, reject) => {
            weatherApiService.deleteUserLocations(id)
                .then(({data}) => {
                    context.commit(SET_USER_LOCATIONS, data);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    [ADD_USER_LOCATION](context, locationData) {
        return new Promise((resolve, reject) => {
            weatherApiService.addUserLocations(locationData)
                .then(({data}) => {
                    context.commit(SET_USER_LOCATIONS, data);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }

};

const mutations = {
    [SET_AUTH](state, username) {
        state.isLoggedIn = true;
        state.username = username;
    },
    [UNSET_AUTH](state) {
        state.isLoggedIn = false;
        state.username = '';
        state.userLocations = '';
        tokenService.deleteTokens();
    },
    [SET_USER_LOCATIONS](state, locations) {
        state.userLocations = locations
    }
};

const getters = {
    errors(state) {
        return state.errors
    },
    getUserName(state) {
        console.log(state.username)
        return state.username;
    },
    getUserLocations(state) {
        return state.userLocations
    },
    isLoggedIn(state) {
        return state.isLoggedIn;
    }
};


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};