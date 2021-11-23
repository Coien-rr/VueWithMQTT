import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import { createPinia } from 'pinia';

//add axios
// import axios from 'axios'

//add router
import router from './router/index'

createApp(App)
  // .use(axios)
  .use(router)
  .use(ArcoVueIcon)
  .use(ArcoVue)
  .use(createPinia())
  .mount('#app');

// app.config.globalProperties.$axios = axios