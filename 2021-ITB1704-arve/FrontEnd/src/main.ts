import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import { setApiUrl } from './modules/api';
import UUID from 'vue-uuid';

const getRuntimeConfig = async () => {
  const runtimeConfig = await fetch('/config/runtime-config.json');
  return await runtimeConfig.json();
};
getRuntimeConfig().then((json) => {
  setApiUrl(json.API_URL);
  createApp(App).use(router, UUID).mount('#app');
});
