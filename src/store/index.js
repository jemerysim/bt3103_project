import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from "../firebase.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
        // stored_cat: null,
    },
    getters: {
        getUser: state => state.user,
        // getCategory: state => state.stored_cat
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