import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)
const pinia = createPinia()
// 注册持久化插件
app.use(pinia)
app.use(router)
app.mount('#app')




