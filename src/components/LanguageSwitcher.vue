<template>
  <div class="language-switcher">
    <div class="dropdown">
      <button class="btn btn-outline-dark btn-sm dropdown-toggle d-flex align-items-center" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="flag-icon">{{ currentFlag }}</span>
        <span :class="['language-name', 'd-none', 'd-md-inline', $i18n.locale === 'ar' ? 'me-1' : 'ms-1']">{{ $t(`name`) }}</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end language-menu" aria-labelledby="languageDropdown">
        <!-- 中文简体 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('zh')" :class="{ active: currentLocale === 'zh' }">
          🇨🇳 简体中文
        </a></li>
        
        <!-- 中文繁体 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('zh-hk')" :class="{ active: currentLocale === 'zh-hk' }">
          🇭🇰 繁體中文
        </a></li>
        
        <!-- 英文 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('en')" :class="{ active: currentLocale === 'en' }">
          🇺🇸 English
        </a></li>
        
        <!-- 法语 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('fr')" :class="{ active: currentLocale === 'fr' }">
          🇫🇷 Français
        </a></li>
        
        <!-- 西班牙语 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('es')" :class="{ active: currentLocale === 'es' }">
          🇪🇸 Español
        </a></li>
        
        <!-- 印地语 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('hi')" :class="{ active: currentLocale === 'hi' }">
          🇮🇳 हिन्दी
        </a></li>
        
        <!-- 俄语 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('ru')" :class="{ active: currentLocale === 'ru' }">
          🇷🇺 Русский
        </a></li>
        
        <!-- 葡萄牙语 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('pt')" :class="{ active: currentLocale === 'pt' }">
          🇧🇷 Português
        </a></li>
        
        <!-- 阿拉伯语 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('ar')" :class="{ active: currentLocale === 'ar' }">
          🇸🇦 العربية
        </a></li>
        
        <!-- 孟加拉语 -->
        <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('bn')" :class="{ active: currentLocale === 'bn' }">
          🇧🇩 বাংলা
        </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const instance = getCurrentInstance();
    return { instance };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    currentFlag() {
      const flags = {
        'zh': '🇨🇳',
        'zh-hk': '🇭🇰',
        'en': '🇺🇸',
        'fr': '🇫🇷',
        'es': '🇪🇸',
        'hi': '🇮🇳',
        'ru': '🇷🇺',
        'pt': '🇧🇷',
        'ar': '🇸🇦',
        'bn': '🇧🇩'
      };
      return flags[this.currentLocale] || '🇨🇳';
    }
  },
  methods: {
    changeLanguage(lang) {
      // 如果当前语言与选择的语言相同，不做任何操作
      if (this.currentLocale === lang) {
        return;
      }
      
      // 设置新的语言
      this.$i18n.locale = lang;
      // 保存到本地存储
      localStorage.setItem('locale', lang);
      console.log('切换语言到:', lang);
      
      // 为阿拉伯语添加RTL方向
      if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.classList.add('rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.classList.remove('rtl');
      }
      
      // 使用更优雅的方式切换语言，避免页面完全重载
      // 首先保存当前滚动位置
      const scrollPosition = window.scrollY;
      
              // 使用setTimeout允许DOM更新
        setTimeout(() => {
          // 触发事件通知其他组件语言已更新
          const emitter = this.instance.appContext.config.globalProperties.emitter;
          emitter.emit('language-changed', lang);
          
          // 恢复滚动位置
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
  position: absolute;
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

.dropdown-item.active {
  background-color: #f1f3f6;
  color: var(--accent-color);
  font-weight: 500;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
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

.flag-icon {
  font-size: 1.1rem;
}

.language-name {
  font-weight: 500;
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