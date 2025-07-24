<template>
  <div class="language-switcher">
    <div class="dropdown">
      <button class="btn btn-outline-dark btn-sm dropdown-toggle d-flex align-items-center" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="flag-icon">{{ currentFlag }}</span>
        <span :class="['language-name', 'd-none', 'd-md-inline', $i18n.locale === 'ar' ? 'me-1' : 'ms-1']">{{ $t(`name`) }}</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end language-menu" aria-labelledby="languageDropdown">
        <li v-for="lang in languages" :key="lang.code">
          <a class="dropdown-item" href="#" @click.prevent="changeLanguage(lang.code)" 
             :class="{ active: currentLocale === lang.code }">
            {{ lang.flag }} {{ lang.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'LanguageSwitcher',
  setup() {
    return { instance: getCurrentInstance() };
  },
  data() {
    return {
      languages: [
        { code: 'zh', flag: '🇨🇳', name: '简体中文' },
        { code: 'zh-hk', flag: '🇭🇰', name: '繁體中文' },
        { code: 'en', flag: '🇺🇸', name: 'English' },
        { code: 'fr', flag: '🇫🇷', name: 'Français' },
        { code: 'es', flag: '🇪🇸', name: 'Español' },
        { code: 'hi', flag: '🇮🇳', name: 'हिन्दी' },
        { code: 'ru', flag: '🇷🇺', name: 'Русский' },
        { code: 'pt', flag: '🇧🇷', name: 'Português' },
        { code: 'ar', flag: '🇸🇦', name: 'العربية' },
        { code: 'bn', flag: '🇧🇩', name: 'বাংলা' }
      ]
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    currentFlag() {
      const lang = this.languages.find(l => l.code === this.currentLocale);
      return lang ? lang.flag : '🇨🇳';
    }
  },
  methods: {
    changeLanguage(lang) {
      if (this.currentLocale === lang) return;
      
      this.$i18n.locale = lang;
      localStorage.setItem('locale', lang);
      
      // 处理RTL方向
      const isRTL = lang === 'ar';
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.classList.toggle('rtl', isRTL);
      
      // 保存滚动位置并触发事件
      const scrollPosition = window.scrollY;
      setTimeout(() => {
        this.instance.appContext.config.globalProperties.emitter?.emit('language-changed', lang);
        window.scrollTo(0, scrollPosition);
      }, 0);
    }
  }
}
</script>

<style scoped>
.language-switcher {
  display: inline-block;
  position: relative;
  z-index: 1000;
}

.language-menu {
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  z-index: 1050;
}

.language-menu::-webkit-scrollbar {
  width: 4px;
}

.language-menu::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.dropdown-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
}

/* 语言切换按钮统一样式 */
.btn,
.btn-outline-dark,
.btn-sm {
  color: #111 !important;
  background: #fff !important;
  border: 1.5px solid rgb(178,0,0) !important;
  box-shadow: none !important;
  font-weight: 500;
  transition: none !important;
}
.btn:hover,
.btn-outline-dark:hover,
.btn-sm:hover {
  background: rgb(178,0,0) !important;
  color: #fff !important;
  border: 1.5px solid rgb(178,0,0) !important;
  box-shadow: none !important;
  transition: none !important;
}

/* 下拉菜单选中和hover颜色 */
.dropdown-item.active {
  background-color: rgb(178,0,0) !important;
  color: #fff !important;
}
.dropdown-item:hover {
  background-color: rgb(178,0,0) !important;
  color: #fff !important;
}

/* 下划线颜色统一 */
.language-name {
  border-bottom: 2px solid rgb(178,0,0);
  padding-bottom: 1px;
  display: inline-block;
}

/* 若有卡片，宽高自适应图片 */
.card-item,
.product-card,
.solution-card {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  max-height: none !important;
  box-shadow: none;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
.image-container {
  width: 100%;
  position: relative;
}
.image-container img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.flag-icon {
  font-size: 1.1rem;
}

.language-name {
  font-weight: 500;
}

@media (max-width: 768px) {
  .language-menu {
    max-height: 250px;
  }
  
  .dropdown-item {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}

/* RTL支持 */
:global(.rtl) .dropdown-menu-end {
  right: auto;
  left: 0;
}

:global(.rtl) .dropdown-item {
  text-align: right;
}
</style> 