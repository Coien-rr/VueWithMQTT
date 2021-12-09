import { createRouter, createWebHistory,} from "vue-router";
import Home from '@/views/home.vue';
import DashBoard from '@/views/dashboard.vue';
import Login from '@/views/login.vue';

const routes = [
  {
    path: '/',
    redirect: '/test',
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
    path: '/test',
    component: () => import('../views/Test.vue'),
    children:[
      {
        path: 'login',
        component: Login
      }
    ]
  },

  {
    path: '/dashboard',
    redirect: '/dashboard/data',
    component: DashBoard,
    children: [
      {
        path: 'config',
        component: () => import('../components/Dashboard/chart.vue')
      },
      {
        path: 'data',
        component: () => import('../components/Dashboard/data.vue')
      },
      {
        path: 'monitor',
        component: () => import('../components/Dashboard/monitor.vue')
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