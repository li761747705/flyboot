<template>
  <div id="app" :class="{ 'rtl': isRTL }">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: { NavBar, AppFooter },
  data() {
    return { isRTL: false }
  },
  created() {
    this.emitter = getCurrentInstance().appContext.config.globalProperties.emitter;
    this.emitter.on('language-changed', this.handleLanguageChange);
  },
  unmounted() {
    this.emitter.off('language-changed', this.handleLanguageChange);
  },
  methods: {
    handleLanguageChange(newLocale) {
      this.isRTL = newLocale === 'ar';
    }
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler(newLocale) {
        this.isRTL = newLocale === 'ar';
        document.documentElement.setAttribute('dir', newLocale === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.classList.toggle('rtl', newLocale === 'ar');
        document.documentElement.setAttribute('lang', newLocale);
      }
    }
  }
}
</script>

<style>
:root {
  --primary-color: #2D3436;
  --secondary-color: #636E72;
  --background-color: #FFFFFF;
  --block-background: #d8d8d8;
  --accent-color: #cc0000;
  --highlight-color: #ff3333;
  --text-color: #2D3436;
  --section-padding: 4rem 0;
  --line-color: #d8d8d8;
}

html {
  font-size: 16px;
  overflow-y: overlay;
}

@media (max-width: 1200px) { html { font-size: 15px; } }
@media (max-width: 992px) { 
  html { font-size: 14px; }
  :root { --section-padding: 3rem 0; }
}
@media (max-width: 768px) { 
  html { font-size: 14px; }
  :root { --section-padding: 2.5rem 0; }
  ::-webkit-scrollbar { width: 4px; height: 4px; }
}
@media (max-width: 576px) { 
  html { font-size: 13px; }
  :root { --section-padding: 2rem 0; }
}

body {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  overflow-x: hidden;
}

#app {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

/* RTL样式支持 */
#app.rtl {
  direction: rtl;
  text-align: right;
}

#app.rtl .dropdown-menu {
  text-align: right;
}

#app.rtl .me-2, #app.rtl .me-3 {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}

#app.rtl .ms-1, #app.rtl .ms-2, #app.rtl .ms-3 {
  margin-left: 0 !important;
  margin-right: 0.25rem !important;
}

/* RTL导航栏支持 */
#app.rtl .navbar-nav {
  padding-right: 0;
}

#app.rtl .navbar .dropdown-menu-end {
  right: auto;
  left: 0;
}

#app.rtl .navbar .navbar-nav .nav-link {
  text-align: right;
}

#app.rtl .navbar-toggler {
  margin-left: 0;
  margin-right: 0.25rem;
}

/* RTL核心Bootstrap类重写 */
html[dir="rtl"] .dropdown-menu-end {
  --bs-position: start;
  right: auto !important;
  left: 0 !important;
}

html[dir="rtl"] .dropdown-menu {
  text-align: right;
}

html[dir="rtl"] .ms-auto {
  margin-right: auto !important;
  margin-left: 0 !important;
}

html[dir="rtl"] .me-auto {
  margin-left: auto !important;
  margin-right: 0 !important;
}

html[dir="rtl"] .float-end {
  float: left !important;
}

html[dir="rtl"] .float-start {
  float: right !important;
}

html[dir="rtl"] .text-end {
  text-align: left !important;
}

html[dir="rtl"] .text-start {
  text-align: right !important;
}

.main-content {
  padding-top: 68px;
  min-height: calc(100vh - 300px);
  flex: 1;
}

@media (max-width: 576px) {
  .main-content {
    padding-top: 56px;
  }
}

.navbar {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
}

.navbar-brand img {
  height: 40px;
}

.nav-link {
  color: white;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  transition: color 0.2s;
}

.nav-link.active, .nav-link:hover {
  color: white;
  border-bottom: 2px solid white;
  background: none;
}

/* 通用响应式容器与间距 */
.container-fluid {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 576px) {
  .container-fluid {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 992px) {
  .container-fluid {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* 响应式图片 */
.img-responsive {
  max-width: 100%;
  height: auto;
}

/* 标题响应式调整 */
.display-1, .display-2, .display-3, .display-4 {
  line-height: 1.2;
}

@media (max-width: 768px) {
  .display-1 { font-size: calc(1.8rem + 1.5vw); }
  .display-2 { font-size: calc(1.7rem + 1.3vw); }
  .display-3 { font-size: calc(1.6rem + 1.1vw); }
  .display-4 { font-size: calc(1.5rem + 0.9vw); }
}

@media (max-width: 576px) {
  h1, .h1 { font-size: 1.75rem; }
  h2, .h2 { font-size: 1.5rem; }
}

.dropdown-menu.mega-menu {
  min-width: 600px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: none;
}

.dropdown-item {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #333;
  border-radius: 0.25rem;
  transition: background 0.2s, color 0.2s;
}

.dropdown-item:hover {
  background: #f1f3f6;
  color: var(--primary-color);
}

.dropdown-menu .fw-bold {
  color: var(--primary-color);
}

.btn-primary {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
}

.btn-primary:hover, .btn-primary:focus {
  background-color: #0873c5;
  border-color: #0873c5;
}

.btn-outline-primary {
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.btn-outline-primary:hover {
  background-color: var(--accent-color);
  color: white;
}

/* 多语言字体支持 */
[lang="ar"] { font-family: 'Noto Sans Arabic', 'Arial', sans-serif; }
[lang="hi"], [lang="bn"] { font-family: 'Noto Sans', 'Arial', sans-serif; }
[lang="ru"] { font-family: 'Noto Sans', 'Arial', sans-serif; }
[lang="zh"], [lang="zh-hk"] { font-family: 'Microsoft YaHei', 'SimSun', 'Noto Sans SC', sans-serif; }

footer {
  background-color: var(--primary-color);
  color: #FFFFFF;
}

.social-links a {
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--highlight-color) !important;
}

.gradient-text {
  background: linear-gradient(90deg, var(--accent-color) 0%, var(--highlight-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* 响应式内边距 */
.py-responsive {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

/* 栅格间距响应式 */
.row {
  --bs-gutter-x: 1.5rem;
}

@media (max-width: 768px) {
  .row {
    --bs-gutter-x: 1rem;
  }
}

/* 响应式按钮 */
@media (max-width: 576px) {
  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  .btn-lg {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
  
  .btn-sm {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
  }
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  z-index: 9999;
  position: absolute;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* 适配Firefox滚动条 */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05);
}

/* 不让滚动条影响内容布局 */
html, body {
  overflow-x: hidden;
  overflow-y: overlay;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
