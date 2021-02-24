import {SET_AUTH, UNSET_AUTH} from "./mutations.type";
import {SIGNIN, LOGOUT, SIGNUP} from "./actions.type";
import tokenService from '@/services/token.service'
import userApiService from '@/services/users.api.service'

const state = {
    username: '',
    userLocations: [],
    errors: '',
    isLoggedIn: !!tokenService.getToken()
}

const actions = {
    [SIGNIN](context, userData) {
        return new Promise((resolve, reject) => {
            userApiService.signIn(userData)
                .then(({data}) => {
                    tokenService.setTokens(data);
                    context.commit(SET_AUTH, userData.username);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    [SIGNUP](context, userData) {
        return new Promise((resolve, reject) => {
            userApiService.signUp(userData)
                .then(({data}) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    [LOGOUT](context) {
        context.commit(UNSET_AUTH);
        tokenService.deleteTokens();
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
        tokenService.deleteTokens();
    },
};

const getters = {
    errors(state) {
        return state.errors
    },
    getUserName(state) {
        return state.username;
    },
    userLocations(state) {
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