import Vue from 'vue';

const state = {
    user: {
        username: '',
        password: '',
        authenticated: false
    }
};

const mutations = {
    'LOGIN' (state, data) {
        state.user.authenticated = true;
        localStorage.setItem('id_token', data.id_token);
    },
    'SIGN_UP' (state, data) {
        state.user.authenticated = true;
        localStorage.setItem('id_token', data.id_token);
    },
    'LOG_OUT' (state) {
        localStorage.removeItem('id_token');
        state.user.authenticated = false;

    },
    'CHECK_AUTH' () {
        var jwt = localStorage.getItem('id_token');
        if(jwt) {
            this.user.authenticated = true
        }
        else {
            this.user.authenticated = false
        }
    }

};

const actions = {
    login: ({commit}, creds) => {
        Vue.http.post('sessions/create/', creds, (data) => {
            commit('LOGIN', data);
        });
    },
    signUp: ({commit}, creds) => {
        Vue.http.post('users/', creds, (data) => {
            commit('SIGN_UP', data);
        });
    }
};

const getters = {
    user: state => {
        return state.user;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};