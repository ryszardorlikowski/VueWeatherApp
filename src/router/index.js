import VueRouter from "vue-router";
import Home from "@/views/Home"
import Panel from "@/views/Panel"
import SignIn from "@/views/SignIn"
import SignUp from "@/views/SignUp"

const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/panel',
        name: 'panel',
        component: Panel
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

export default router;


