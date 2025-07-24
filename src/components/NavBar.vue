<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid px-md-4 px-2">
      <router-link class="navbar-brand d-flex align-items-center py-2" to="/">
        <img src="/images/logo.jpg" alt="麒风智能" height="60" class="logo-img d-none d-md-block me-3" loading="lazy" />
        <img src="/images/logo.jpg" alt="麒风智能" height="40" class="logo-img d-block d-md-none me-3" loading="lazy" />
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
                      <span>{{ $t(item.text) }}</span>
                  </div>
                    <img :src="item.image" :alt="$t(item.text)" class="nav-product-thumb" loading="lazy" />
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
          label: 'navBar.products',
          route: '/products',
          items: [
            { route: '/products/fpv', text: 'navBar.subsetProducts.fpv', icon: 'bi bi-camera-video', image: '/images/navbar/产品系列：穿越机60X40.png' },
            { route: '/products/multi-rotor', text: 'navBar.subsetProducts.multiRotor', icon: 'bi bi-hexagon', image: '/images/navbar/产品系列：多轴60X40.png' },
            { route: '/products/fixed-wing', text: 'navBar.subsetProducts.fixedWing', icon: 'bi bi-airplane', image: '/images/navbar/产品系列：固定翼60X40.png' },
            { route: '/products/helicopter', text: 'navBar.subsetProducts.helicopter', icon: 'bi bi-wind', image: '/images/navbar/产品系列：直升机60X40.png' }
          ]
        },
        {
          key: 'applications',
          label: 'navBar.applications',
          route: '/applications',
          items: [
            { route: '/applications/mapping', text: 'navBar.subsetSolutions.mapping', icon: 'bi bi-map' },
            { route: '/applications/inspection', text: 'navBar.subsetSolutions.waterConservancy', icon: 'bi bi-water' },
            { route: '/applications/delivery', text: 'navBar.subsetSolutions.emergency', icon: 'bi bi-exclamation-triangle' },
            { route: '/applications/agriculture', text: 'navBar.subsetSolutions.forestry', icon: 'bi bi-tree' },
            { route: '/applications/aerial', text: 'navBar.subsetSolutions.transportation', icon: 'bi bi-truck' },
            { route: '/applications/powerline', text: 'navBar.subsetSolutions.powerInspection', icon: 'bi bi-lightning' },
            { route: '/applications/spraying', text: 'navBar.subsetSolutions.environmental', icon: 'bi bi-flower1' },
            { route: '/applications/farming', text: 'navBar.subsetSolutions.agriculture', icon: 'bi bi-cloudy' },
            { route: '/applications/integration', text: 'navBar.subsetSolutions.logistics', icon: 'bi bi-box-seam' }
          ]
        },
        {
          key: 'support',
          label: 'navBar.support',
          route: '/support',
          items: [
            { route: '/support/downloads', text: 'navBar.subsetSupport.downloads', icon: 'bi bi-download' },
            { route: '/support/policy', text: 'navBar.subsetSupport.policy', icon: 'bi bi-shield-check' },
            { route: '/support/faq', text: 'navBar.subsetSupport.faq', icon: 'bi bi-question-circle' },
            { route: '/support/hotline', text: 'navBar.subsetSupport.hotline', icon: 'bi bi-telephone' }
          ]
        },
        {
          key: 'about',
          label: 'navBar.about',
          route: '/about',
          items: [
            { route: '/about/company', text: 'navBar.subsetAbout.company', icon: 'bi bi-building' },
            { route: '/about/responsibility', text: 'navBar.subsetAbout.responsibility', icon: 'bi bi-globe' },
            { route: '/about/careers', text: 'navBar.subsetAbout.careers', icon: 'bi bi-person-plus' },
            { route: '/about/contact', text: 'navBar.subsetAbout.contact', icon: 'bi bi-envelope' }
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
  color: rgb(178,0,0) !important;
  border-bottom: 2px solid rgb(178,0,0) !important;
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
  color: rgb(178,0,0) !important;
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