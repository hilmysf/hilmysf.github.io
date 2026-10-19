import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
     {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue')
    },
     {
        path: '/contact',
        name: 'Contact',
        component: () => import('../pages/Contact.vue')
    },
     {
        path: '/experience',
        name: 'Experience',
        component: () => import('../pages/Experience.vue')
    },
     {
        path: '/projects',
        name: 'Projects',
        component: () => import('../pages/Projects.vue')
    },
    {
        path: '/project/:id',
        name: 'ProjectDetail',
        component: () => import('../pages/ProjectDetail.vue')
    },
     {
        path: '/resume',
        name: 'Resume',
        component: () => import('../pages/Resume.vue')
    },
     {
        path: '/tech-stack',
        name: 'TechStack',
        component: () => import('../pages/TechStack.vue')
    },
]

const router = createRouter({
  history: createWebHashHistory(),
    routes,
    scrollBehavior(){
        return {top:0}
    }
})

export default router