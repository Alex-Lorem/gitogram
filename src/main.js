import { createApp } from 'vue'
import store from './store'
import icon from './components/icon'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('icon', icon)

app.use(router)
app.use(store)

app.mount('#app')
