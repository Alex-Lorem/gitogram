import { createApp } from 'vue'
import icon from './components/icon'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('icon', icon)

app.use(router)

app.mount('#app')
