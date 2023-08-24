import { createRouter, createWebHistory } from 'vue-router'
import BoardsView from '@/views/BoardsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: BoardsView
        },
        {
            path: '/boards',
            name: 'boards',
            component: BoardsView
        },

    ]
})

export default router
