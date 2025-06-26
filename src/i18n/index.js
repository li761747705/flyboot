import { createI18n } from 'vue-i18n'
import zh from './locales/zh'
import zhHk from './locales/zh-hk'
import en from './locales/en'
import fr from './locales/fr'
import es from './locales/es'
import hi from './locales/hi'
import ru from './locales/ru'
import pt from './locales/pt'
import ar from './locales/ar'
import bn from './locales/bn'

// 国际化翻译配置
const messages = {
  zh,
  'zh-hk': zhHk,
  en,
  fr,
  es,
  hi,
  ru,
  pt,
  ar,
  bn
}

// 创建i18n实例
const i18n = createI18n({
  legacy: true, // 使用传统API模式
  globalInjection: true, // 全局注册$t方法
  locale: localStorage.getItem('locale') || 'zh', // 默认语言为简体中文
  fallbackLocale: 'zh', // 后备语言
  messages
})

export default i18n 