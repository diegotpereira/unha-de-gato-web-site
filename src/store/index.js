import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { db } from '@/services/db';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        blogPosts: [],
        atualProduto: [],
        produtos: []

    },
    plugins: [
        createPersistedState({
            key: 'unha-gato'
        })
    ],
    getters: {
        // obter Produtos
        getAtualProduto: state => {
            return state.atualProduto
        },
        getProdutos: state => tipo => {
            return tipo ?
                state.produtos.filter(prod => prod.categoria.toLowerCase() === tipo) :
                state.produtos
        },
        getProdutoCategorias: state => {
            return [...new Set(state.produtos.map(prod => prod.categoria))]
        },
        getUltimosProdutos: state => {
            return state.produtos.slice(-5, -1)
        },
        getTopProdutos: state => {
            return state.produtos.filter(prod => prod.avaliacao === 5).slice(0, 4)
        }
    },
    mutations: {
        ...vuexfireMutations,
        salvarPostagemAtual: (state, post) => {
            state.atualPost = post
        }
    },
    actions: {
        bindProdutos: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('produtos', db.collection('produtos'))
        }),
        bindBlogPosts: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('blogPosts', db.collection('blogposts'))
        })
    }
})