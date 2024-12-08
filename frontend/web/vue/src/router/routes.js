import CvView from "../components/CvView";
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/', component: CvView },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: routes,
});


export default router;