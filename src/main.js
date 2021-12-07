import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
// import "tailwindcss/tailwind.css"
import { createPinia } from 'pinia';
import Cookies from 'js-cookie';


//add router
import router from './router/index'

createApp(App)
  .use(router)
  .use(ArcoVueIcon)
  .use(ArcoVue)
  .use(createPinia())
  .mount('#app');
