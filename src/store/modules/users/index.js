import {SET_ERROR, SET_AUTH, UNSET_AUTH} from "./mutations.type";
import {SIGNIN, LOGOUT} from "./actions.type";
import tokenService from '@/services/token.service'
import userApiService from '@/services/users.api.service'

const state = {
    username: {},
    userLocations: [],
    errors: '',
    isLoggedIn: !!tokenService.getToken()
}

const actions = {
    [SIGNIN](context, user) {
        return new Promise((resolve, reject) => {
            userApiService.signIn(user)
                .then(({data}) => {
                    tokenService.setTokens(data);
                    context.commit(SET_AUTH, user.username);
                    resolve(data);
                })
                .catch(({response}) => {
                    let errorMsg;
                    if (response.status === 401 || response.status === 400) {
                        errorMsg = 'Incorrect username or password';
                    } else {
                        errorMsg = 'Service Unavailable. Please try again later.';
                    }
                    context.commit(SET_ERROR, errorMsg);
                    reject(response);
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
        state.errors = '';
    },
    [UNSET_AUTH](state) {
        state.isLoggedIn = false;
        state.username = {};
        tokenService.deleteTokens();
    },
    [SET_ERROR](state, errors) {
        state.errors = errors;
    },
};

const getters = {
    errors(state) {
        return state.errors
    },
    currentUser(state) {
        return state.user;
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