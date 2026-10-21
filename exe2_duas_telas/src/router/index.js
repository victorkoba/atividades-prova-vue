import { createRouter, createWebHistory } from "vue-router";
// importe as views aqui
import HomeView from "../views/HomeView.vue";
import SobreView from "../views/SobreView.vue";

const router = createRouter({
history: createWebHistory(),
routes: [
{ path: "/", name: "Home", component: HomeView },
{ path: "/sobre", name: "Sobre", component: SobreView }
]
})
export default router