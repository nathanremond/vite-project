import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import SessionPage from "./pages/SessionPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: HomePage
        },
        {
            path: '/',
            component: LoginPage
        },
        {
            path: '/session/:id',
            component: SessionPage
        }
    ]
})

export default router