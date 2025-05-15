export const mainContent = `import { createApp } from 'vue';
import ArcoVue from 'arco-next';
import App from './App.vue';
import 'arco-next/dist/arco.css';
import './style.css';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');`;

export const styleContent = `#app { padding: 20px; }`;
