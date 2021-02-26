import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "@/views/Home"
import Panel from "@/views/Panel"
import SignIn from "@/views/SignIn"
import SignUp from "@/views/SignUp"
import store from '@/store'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/panel',
        name: 'panel',
        component: Panel,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
]


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const loggedIn = store.getters['users/isLoggedIn'];
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn) {
            next({name: 'signin'});
        } else {
            next();
        }

    } else {
        next();
    }
});


export default router;


