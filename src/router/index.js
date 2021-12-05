import { createRouter, createWebHistory,} from "vue-router";
import Home from '@/views/home.vue';
import DashBoard from '@/views/dashboard.vue';
import Login from '@/views/login.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },

  {
    path:'/home',
    component: Home,
  },

  {
    path: '/login',
    component: Login,
  },

  {
    path: '/dashboard',
    redirect: '/dashboard/data',
    component: DashBoard,
    children: [
      {
        path: 'config',
        component: () => import('../components/chart.vue')
      },
      {
        path: 'data',
        component: () => import('../components/data.vue')
      }
    ]
  }
];

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;