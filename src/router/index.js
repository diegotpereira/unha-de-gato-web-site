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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/unha-gato/',
    routes
})

export default router