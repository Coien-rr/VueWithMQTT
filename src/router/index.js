import { createRouter, createWebHistory,} from "vue-router";
import Home from '@/views/home.vue';
import DashBoard from '@/views/dashboard.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard/data',
  },

  {
    path:'/home',
    component: Home
  },
  {
    path: '/dashboard',
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