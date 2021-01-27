import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index';

// import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).use(store).mount('#app');
