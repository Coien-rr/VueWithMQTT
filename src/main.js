import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

//add router
import router from './router/index'

createApp(App)
  .use(router)
  .use(ArcoVueIcon)
  .use(ArcoVue)
  .mount('#app');