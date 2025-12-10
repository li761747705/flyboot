import { createI18n } from 'vue-i18n'
import { ref } from 'vue'
import {
  getCachedTranslation,
  cacheTranslation,
  preloadLanguage,
  getCurrentLocale,
  setCurrentLocale,
  performanceMetrics
} from './performance.js'

// 内存缓存
const localeCache = new Map()

// 动态加载语言包（带性能优化）
const loadLocaleMessages = async (locale) => {
  const startTime = performance.now()
  
  try {
    // 总是动态导入语言包，确保获取完整的翻译
    console.log(`Loading locale ${locale}...`)
    const messages = await import(`./locales/${locale}.js`)
    const translations = messages.default || messages
    
    // 缓存到内存和本地存储
    localeCache.set(locale, translations)
    cacheTranslation(locale, translations)
    
    const loadTime = performance.now() - startTime
    performanceMetrics.recordLoadTime(locale, loadTime)
    
    console.log(`Locale ${locale} loaded successfully in ${loadTime.toFixed(2)}ms`)
    return translations
  } catch (error) {
    console.warn(`Failed to load locale ${locale}:`, error)
    return null
  }
}

// 创建i18n实例
const i18n = createI18n({
  legacy: false,
  locale: getCurrentLocale() || 'zh', // 从本地存储获取或使用默认语言
  fallbackLocale: 'zh',
  silentTranslationWarn: false, // 开发时显示翻译警告
  silentFallbackWarn: false, // 开发时显示回退警告
  globalInjection: true,
  // 性能优化配置
  missingWarn: false,
  fallbackWarn: false,
  // 启用消息编译器缓存
  flatJson: true
  // 不在初始化时设置任何消息，让 loadLocaleMessages 完全处理
})

// 当前语言状态
const currentLocale = ref(i18n.global.locale.value)

// 设置语言（简化逻辑）
const setLocale = async (locale) => {
  const startTime = performance.now()
  
  try {
    // 总是加载完整的语言包
    const messages = await loadLocaleMessages(locale)
    if (!messages) {
      throw new Error(`Failed to load locale messages for ${locale}`)
    }
    
    // 设置语言消息
    i18n.global.setLocaleMessage(locale, messages)
    i18n.global.locale.value = locale
    currentLocale.value = locale
    
    // 保存到本地存储
    setCurrentLocale(locale)
    
    // 更新HTML lang属性
    document.documentElement.lang = locale
    
    // RTL语言支持
    const rtlLocales = ['ar', 'he', 'fa', 'ur']
    if (rtlLocales.includes(locale)) {
      document.documentElement.dir = 'rtl'
      // 添加RTL样式类
      document.body.classList.add('rtl')
    } else {
      document.documentElement.dir = 'ltr'
      // 移除RTL样式类
      document.body.classList.remove('rtl')
    }
    
    const loadTime = performance.now() - startTime
    console.log(`Locale ${locale} loaded and switched in ${loadTime.toFixed(2)}ms`)
    
    // 触发自定义事件
    window.dispatchEvent(new CustomEvent('localeChanged', {
      detail: { locale, loadTime }
    }))
    
    return true
  } catch (error) {
    console.error(`Failed to set locale ${locale}:`, error)
    return false
  }
}

// 预加载常用语言
const preloadCommonLanguages = async () => {
  const commonLocales = ['en', 'ar', 'bn'] // 根据用户使用情况调整
  const promises = commonLocales.map(locale => preloadLanguage(locale))
  
  try {
    await Promise.allSettled(promises)
    console.log('Common languages preloaded')
  } catch (error) {
    console.warn('Failed to preload some languages:', error)
  }
}

// 获取语言加载性能统计
const getPerformanceStats = () => {
  return {
    averageLoadTime: performanceMetrics.getAverageLoadTime(),
    loadTimes: { ...performanceMetrics.loadTimes },
    cacheSize: performanceMetrics.cacheSize || 0
  }
}

// 初始化
const initI18n = async () => {
  // 预加载常用语言（在后台进行）
  setTimeout(preloadCommonLanguages, 1000)
  
  // 设置初始语言
  const savedLocale = getCurrentLocale()
  if (savedLocale && savedLocale !== i18n.global.locale.value) {
    await setLocale(savedLocale)
  }
}

// 导出
export {
  i18n,
  currentLocale,
  setLocale,
  loadLocaleMessages,
  preloadLanguage,
  getPerformanceStats,
  initI18n
}

export default i18n 
