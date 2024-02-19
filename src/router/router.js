import Main from '@/pages/Main.vue'
import PostPage from '@/pages/PostPage.vue'
import About from '@/pages/About.vue'
import SinglePost from '@/pages/SinglePost.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        component:Main
    },
    {
        path:'/posts',
        component:PostPage
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/posts/:id',
        component:SinglePost
    },
    
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router;