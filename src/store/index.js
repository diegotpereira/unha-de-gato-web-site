import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        blogPosts: [],

    },
    plugins: [

    ],
    getters: {

    },
    mutations: {
        salvarPostagemAtual: (state, post) => {
            state.atualPost = post
        }
    },
    actions: {

    }
})