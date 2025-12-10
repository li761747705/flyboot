import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { initI18n } from './i18n'

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

function updateHead(info) {
  if (!info || typeof window === 'undefined') return
  if (info.title) {
    document.title = info.title
  }
  if (Array.isArray(info.meta)) {
    info.meta.forEach(m => {
      if (!m || !m.name) return
      const name = m.name
      const content = m.content || ''
      let tag = document.querySelector(`meta[name='${name}']`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })
  }
}

app.mixin({
  mounted() {
    const fn = this.$options && this.$options.metaInfo
    if (typeof fn === 'function') {
      const info = fn.call(this)
      updateHead(info)
    }
  }
})

router.afterEach((to) => {
  // 等待视图实例挂载完成后再读取 metaInfo（确保子路由优先生效）
  setTimeout(() => {
    let finalInfo = null
    to.matched.forEach(record => {
      const vm = record.instances && record.instances.default
      if (vm && typeof vm.$options?.metaInfo === 'function') {
        finalInfo = vm.$options.metaInfo.call(vm)
        updateHead(finalInfo)
      }
    })
  }, 0)
})

// 将事件总线添加到全局属性
app.config.globalProperties.emitter = emitter

// 确保在挂载前初始化默认语言
const ensureDefaultLanguage = async () => {
  const currentLocale = i18n.global.locale.value
  const currentMessages = i18n.global.getLocaleMessage(currentLocale)
  
  // 检查是否包含关键的翻译键
  const hasHomeTranslations = currentMessages && currentMessages.home && 
    currentMessages.home.carousel && currentMessages.home.products && 
    currentMessages.home.applications && currentMessages.home.serviceSupport
  
  if (!hasHomeTranslations) {
    try {
      console.log(`Loading full language pack for ${currentLocale}...`)
      const { setLocale } = await import('./i18n/index.js')
      await setLocale(currentLocale)
      console.log(`Full language pack ${currentLocale} loaded successfully`)
    } catch (error) {
      console.warn('Failed to load default language:', error)
    }
  } else {
    console.log(`Language ${currentLocale} already fully loaded`)
  }
}

// 初始化i18n性能优化
initI18n().then(() => {
  console.log('i18n initialized with performance optimizations')
}).catch(error => {
  console.warn('Failed to initialize i18n optimizations:', error)
})

// 直接挂载应用，然后在 App.vue 中确保语言加载完成
app.mount('#app')
