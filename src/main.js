import { createApp } from 'vue'
import icon from './components/icon'
import App from './App.vue'

const app = createApp(App)
app.component('icon', icon)

app.mount('#app')
