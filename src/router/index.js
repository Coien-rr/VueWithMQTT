import { createRouter, createWebHistory,} from "vue-router";
import Home from '@/views/home.vue';
import DashBoard from '@/views/dashboard.vue';

const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path: '/dashboard',
    component: DashBoard
  }
];

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;