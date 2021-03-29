import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from "../firebase.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
    },
    getters: {
        getUser: state => state.user,
    },
    mutations: {
        SET_USER: state => {
            state.user = auth.currentUser;
        },
    },
    actions: {
        setUser: context => {
            context.commit("SET_USER");
        },
    },
});