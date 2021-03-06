import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/produtos',
        name: 'produtos',
        component: () =>
            import ('../views/Produtos.vue')
    },
    {
        path: '/produtos/:slug',
        name: 'view-produto',
        props: true,
        component: () =>
            import ('../views/ProdutoView.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () =>
            import ('../views/Blog.vue')
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: () =>
            import ('../views/Sobre.vue')
    },
    {
        path: '/contato',
        name: 'contato',
        component: () =>
            import ('../views/Contato.vue')
    },
    {
        path: '/carrinho',
        name: 'carrinho',
        component: () =>
            import ('../views/Carrinho.vue')
    },
    {
        path: '/blog/:slug',
        name: 'view-blog',
        props: true,
        component: () =>
            import ('../views/BlogView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/unha-gato/',
    routes
})

export default router