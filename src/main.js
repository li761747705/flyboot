import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 引入Bootstrap样式和JS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 引入Animate.css动画库
import 'animate.css'

// 创建事件总线
import mitt from 'mitt'
const emitter = mitt()

// 创建Vue应用并挂载
const app = createApp(App)
app.use(router)
app.use(i18n)

// 将事件总线添加到全局属性
app.config.globalProperties.emitter = emitter

app.mount('#app')
