<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid px-md-4 px-2">
      <router-link class="navbar-brand d-flex align-items-center py-2" to="/">
        <img src="/images/logo.jpg" alt="麒风智能" height="60" class="logo-img d-none d-md-block me-3" />
        <img src="/images/logo.jpg" alt="麒风智能" height="40" class="logo-img d-block d-md-none me-3" />
      </router-link>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{ $t('common.home') }}</router-link>
          </li>

          <li v-for="menu in menus" :key="menu.key" class="nav-item mega-menu-trigger" 
              @mouseenter="showMenu(menu.key)" @mouseleave="startHideTimer">
            <router-link class="nav-link" :to="menu.route">{{ $t(menu.label) }}</router-link>

            <div class="mega-menu-panel" v-show="activeMenu === menu.key" 
                 @mouseenter="cancelHideTimer" @mouseleave="startHideTimer">
              <div class="mega-menu-inner">
                <router-link v-for="item in menu.items" :key="item.route" 
                            class="product-item" :to="item.route">
                  <div v-if="item.image" class="product-item-content">
                    <div class="product-item-header">
                      <i :class="item.icon" class="me-3"></i>
                      <span>{{ item.text }}</span>
                    </div>
                    <img :src="item.image" :alt="item.text" class="nav-product-thumb" />
                  </div>
                  <template v-else>
                    <i :class="item.icon" class="me-3"></i>
                    <span>{{ $t(item.text) }}</span>
                  </template>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <LanguageSwitcher class="me-3" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'NavBar',
  components: { LanguageSwitcher },
  data() {
    return {
      activeMenu: null,
      menuTimeout: null,
      menus: [
        {
          key: 'products',
          label: 'common.products',
          route: '/products',
          items: [
            { route: '/products/fpv', text: '穿越无人机', icon: 'bi bi-camera-video', image: '/images/navbar/产品系列：穿越机60X40.png' },
            { route: '/products/multi-rotor', text: '多旋翼无人机', icon: 'bi bi-hexagon', image: '/images/navbar/产品系列：多轴60X40.png' },
            { route: '/products/fixed-wing', text: '固定翼无人机', icon: 'bi bi-airplane', image: '/images/navbar/产品系列：固定翼60X40.png' },
            { route: '/products/helicopter', text: '无人直升机', icon: 'bi bi-wind', image: '/images/navbar/产品系列：直升机60X40.png' }
          ]
        },
        {
          key: 'applications',
          label: 'common.applications',
          route: '/applications',
          items: [
            { route: '/applications/mapping', text: 'solutions.mapping', icon: 'bi bi-map' },
            { route: '/applications/inspection', text: 'solutions.waterConservancy', icon: 'bi bi-water' },
            { route: '/applications/delivery', text: 'solutions.emergency', icon: 'bi bi-exclamation-triangle' },
            { route: '/applications/agriculture', text: 'solutions.forestry', icon: 'bi bi-tree' },
            { route: '/applications/aerial', text: 'solutions.transportation', icon: 'bi bi-truck' },
            { route: '/applications/powerline', text: 'solutions.powerInspection', icon: 'bi bi-lightning' },
            { route: '/applications/spraying', text: 'solutions.environmental', icon: 'bi bi-flower1' },
            { route: '/applications/farming', text: 'solutions.agriculture', icon: 'bi bi-cloudy' },
            { route: '/applications/integration', text: 'solutions.logistics', icon: 'bi bi-box-seam' }
          ]
        },
        {
          key: 'support',
          label: 'common.services',
          route: '/support',
          items: [
            { route: '/support/downloads', text: 'support.downloads', icon: 'bi bi-download' },
            { route: '/support/policy', text: 'support.policy', icon: 'bi bi-shield-check' },
            { route: '/support/faq', text: 'support.faq', icon: 'bi bi-question-circle' },
            { route: '/support/hotline', text: 'support.hotline', icon: 'bi bi-telephone' }
          ]
        },
        {
          key: 'about',
          label: 'common.about',
          route: '/about',
          items: [
            { route: '/about/company', text: 'about.company', icon: 'bi bi-building' },
            { route: '/about/responsibility', text: 'about.responsibility', icon: 'bi bi-globe' },
            { route: '/about/careers', text: 'about.careers', icon: 'bi bi-person-plus' },
            { route: '/about/contact', text: 'about.contact', icon: 'bi bi-envelope' }
          ]
        }
      ]
    }
  },
  methods: {
    showMenu(menuKey) {
      clearTimeout(this.menuTimeout)
      this.activeMenu = menuKey
    },
    startHideTimer() {
      this.menuTimeout = setTimeout(() => {
        this.activeMenu = null
      }, 150)
    },
    cancelHideTimer() {
      clearTimeout(this.menuTimeout)
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 992) this.activeMenu = null
    })
  },
  beforeUnmount() {
    clearTimeout(this.menuTimeout)
  }
}
</script>

<style scoped>
.navbar {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  background-color: #FFFFFF;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  margin-right: 0.5rem;
  padding: 0;
}

.nav-link {
  color: #000000;
  font-weight: 500;
  padding: 0.8rem 0.8rem;
  transition: all 0.25s ease;
  position: relative;
  margin: 0 2px;
}

.nav-link.active,
.nav-link:hover {
  color: var(--accent-color);
  border-bottom: 2px solid #ff0000 !important;
  background: none;
}

.mega-menu-trigger {
  position: static;
}

.mega-menu-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background-color: #FFFFFF;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-top: 2px solid var(--accent-color);
  z-index: 1050;
  padding: 0;
  overflow: hidden;
  transition: opacity 0.2s ease;
}

.mega-menu-inner {
  display: flex;
  width: 100%;
  margin: 0;
  padding: 1rem 0 1rem 2rem;
}

.product-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  color: var(--secondary-color, #333);
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.25s ease;
  margin-right: 1rem;
}

.product-item:hover {
  background-color: #f8f9fa;
  color: var(--accent-color, #cc0000);
}

.product-item i {
  font-size: 1.25rem;
  color: var(--accent-color, #cc0000);
}

.product-item-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.product-item-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.nav-product-thumb {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.logo-img {
  max-height: 40px;
  width: auto;
  border-radius: 2px;
  object-fit: contain;
}

@media (max-width: 992px) {
  .mega-menu-panel {
    position: static;
    box-shadow: none;
    border-top: none;
  }

  .mega-menu-inner {
    flex-direction: column;
    padding: 0.5rem;
  }

  .product-item {
    padding: 0.6rem 1rem;
    font-size: 1rem;
    margin-right: 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .product-item:last-child {
    border-bottom: none;
  }
}

@media (max-width: 576px) {
  .logo-img {
    max-height: 36px;
  }
}
</style>