import { createApp } from 'vue'
import './style.scss'
import router from './router'
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');

// createApp(App).mount('#app')
