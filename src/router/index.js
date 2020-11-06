import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'
import Kanban from '@/views/kanban/Kanban'

Vue.use(Router); // Registrando o Router no Vue

const routes = [
    {   // Rota HOME
        name: 'home',
        path: '/',
        component: Home
    },
    {   // Rota Kanban
        name: 'kanban',
        path: '/kanban',
        component: Kanban
    }
]

const router = new Router({ routes }); // Instância do Router coma as rotas configuradas

export default router;