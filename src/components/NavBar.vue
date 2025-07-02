<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid px-md-4 px-2">
      <router-link class="navbar-brand d-flex align-items-center py-2" to="/">
        <img src="/images/logo.jpg" alt="麒风智能" height="60" class="logo-img d-none d-md-block"
          :class="$i18n.locale === 'ar' ? 'ms-2' : 'me-3'" />
        <img src="/images/logo.jpg" alt="麒风智能" height="40" class="logo-img d-block d-md-none"
          :class="$i18n.locale === 'ar' ? 'ms-2' : 'me-3'" />
      </router-link>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              {{ $t('common.home') }}
            </router-link>
          </li>

          <li class="nav-item mega-menu-trigger" @mouseenter="handleProductMenuEnter"
            @mouseleave="handleProductMenuLeave">
            <router-link class="nav-link" to="/products">
              {{ $t('common.products') }}
            </router-link>

            <div class="mega-menu-panel" v-show="showProductMenu" @mouseenter="isOverProductSubmenu = true"
              @mouseleave="isOverProductSubmenu = false">
              <div class="mega-menu-inner">
                <div class="product-list w-100">
                  <!-- 无人机产品列表 - 横向靠左展示 -->
                  <div class="product-list-menu">
                    <router-link class="product-item" to="/products/fpv">
                      <div class="nav-product-icon-col">
                        <i class="bi bi-camera-video"></i>
                      </div>
                      <div class="nav-product-label-img-col">
                        <span>穿越无人机</span>
                        <img src="/images/navbar/产品系列：穿越机60X40.png" alt="穿越无人机" class="nav-product-thumb" />
                      </div>
                    </router-link>
                    <router-link class="product-item" to="/products/multi-rotor">
                      <div class="nav-product-icon-col">
                        <i class="bi bi-hexagon me-3"></i>
                      </div>
                      <div class="nav-product-label-img-col">
                        <span>多旋翼无人机</span>
                        <img src="/images/navbar/产品系列：多轴60X40.png" alt="穿越无人机" class="nav-product-thumb" />
                      </div>
                    </router-link>
                    <router-link class="product-item" to="/products/fixed-wing">
                      <div class="nav-product-icon-col">
                        <i class="bi bi-airplane me-3"></i>
                      </div>
                      <div class="nav-product-label-img-col">
                        <span>固定翼无人机</span>
                        <img src="/images/navbar/产品系列：固定翼60X40.png" alt="穿越无人机" class="nav-product-thumb" />
                      </div>
                    </router-link>
                    <router-link class="product-item" to="/products/helicopter">
                      <div class="nav-product-icon-col">
                        <i class="bi bi-wind me-3"></i>
                      </div>
                      <div class="nav-product-label-img-col">
                        <span>无人直升机</span>
                        <img src="/images/navbar/产品系列：直升机60X40.png" alt="穿越无人机" class="nav-product-thumb" />
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item mega-menu-trigger" @mouseenter="handleSolutionMenuEnter"
            @mouseleave="handleSolutionMenuLeave">
            <router-link class="nav-link" to="/applications">
              {{ $t('common.applications') }}
            </router-link>

            <div class="mega-menu-panel" v-show="showSolutionMenu" @mouseenter="isOverSolutionSubmenu = true"
              @mouseleave="isOverSolutionSubmenu = false">
              <div class="mega-menu-inner">
                <div class="product-list w-100">
                  <!-- 行业应用列表 - 横向靠左展示 -->
                  <div class="product-list-menu">
                    <router-link class="product-item" to="/applications/mapping">
                      <i class="bi bi-map me-3"></i>
                      <span>{{ $t('solutions.mapping') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/applications/inspection">
                      <i class="bi bi-water me-3"></i>
                      <span>{{ $t('solutions.waterConservancy') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/applications/delivery">
                      <i class="bi bi-exclamation-triangle me-3"></i>
                      <span>{{ $t('solutions.emergency') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/applications/agriculture">
                      <i class="bi bi-tree me-3"></i>
                      <span>{{ $t('solutions.forestry') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/applications/aerial">
                      <i class="bi bi-truck me-3"></i>
                      <span>{{ $t('solutions.transportation') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/applications/powerline">
                      <i class="bi bi-lightning me-3"></i>
                      <span>{{ $t('solutions.powerInspection') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/applications/spraying">
                      <i class="bi bi-flower1 me-3"></i>
                      <span>{{ $t('solutions.environmental') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/applications/farming">
                      <i class="bi bi-cloudy me-3"></i>
                      <span>{{ $t('solutions.agriculture') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/applications/integration">
                      <i class="bi bi-box-seam me-3"></i>
                      <span>{{ $t('solutions.logistics') }}</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item mega-menu-trigger" @mouseenter="handleSupportMenuEnter"
            @mouseleave="handleSupportMenuLeave">
            <router-link class="nav-link" to="/support">
              {{ $t('common.services') }}
            </router-link>

            <div class="mega-menu-panel" v-show="showSupportMenu" @mouseenter="isOverSupportSubmenu = true"
              @mouseleave="isOverSupportSubmenu = false">
              <div class="mega-menu-inner">
                <div class="product-list w-100">
                  <!-- 服务与支持列表 - 横向靠左展示 -->
                  <div class="product-list-menu">
                    <router-link class="product-item" to="/support/downloads">
                      <i class="bi bi-download me-3"></i>
                      <span>{{ $t('support.downloads') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/support/policy">
                      <i class="bi bi-shield-check me-3"></i>
                      <span>{{ $t('support.policy') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/support/faq">
                      <i class="bi bi-question-circle me-3"></i>
                      <span>{{ $t('support.faq') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/support/hotline">
                      <i class="bi bi-telephone me-3"></i>
                      <span>{{ $t('support.hotline') }}</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item mega-menu-trigger" @mouseenter="handleAboutMenuEnter" @mouseleave="handleAboutMenuLeave">
            <router-link class="nav-link" to="/about">
              {{ $t('common.about') }}
            </router-link>

            <div class="mega-menu-panel" v-show="showAboutMenu" @mouseenter="isOverAboutSubmenu = true"
              @mouseleave="isOverAboutSubmenu = false">
              <div class="mega-menu-inner">
                <div class="product-list w-100">
                  <!-- 关于我们列表 - 横向靠左展示 -->
                  <div class="product-list-menu">
                    <router-link class="product-item" to="/about/company">
                      <i class="bi bi-building me-3"></i>
                      <span>{{ $t('about.company') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/about/responsibility">
                      <i class="bi bi-globe me-3"></i>
                      <span>{{ $t('about.responsibility') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/about/careers">
                      <i class="bi bi-person-plus me-3"></i>
                      <span>{{ $t('about.careers') }}</span>
                    </router-link>
                    <router-link class="product-item" to="/about/contact">
                      <i class="bi bi-envelope me-3"></i>
                      <span>{{ $t('about.contact') }}</span>
                    </router-link>
                  </div>
                </div>
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
  components: {
    LanguageSwitcher
  },
  data() {
    return {
      showProductMenu: false,
      isOverProductSubmenu: false,
      showSolutionMenu: false,
      isOverSolutionSubmenu: false,
      showSupportMenu: false,
      isOverSupportSubmenu: false,
      showAboutMenu: false,
      isOverAboutSubmenu: false,
      activeCategory: 'drone',
      productMenuTimeout: null,
      solutionMenuTimeout: null,
      supportMenuTimeout: null,
      aboutMenuTimeout: null
    }
  },
  methods: {
    handleProductMenuEnter() {
      clearTimeout(this.productMenuTimeout);
      this.showProductMenu = true;
      this.showSolutionMenu = false;
      this.showSupportMenu = false;
      this.showAboutMenu = false;
    },
    handleProductMenuLeave() {
      this.productMenuTimeout = setTimeout(() => {
        if (!this.isOverProductSubmenu) {
          this.showProductMenu = false;
        }
      }, 100);
    },
    handleSolutionMenuEnter() {
      clearTimeout(this.solutionMenuTimeout);
      this.showSolutionMenu = true;
      this.showProductMenu = false;
      this.showSupportMenu = false;
      this.showAboutMenu = false;
    },
    handleSolutionMenuLeave() {
      this.solutionMenuTimeout = setTimeout(() => {
        if (!this.isOverSolutionSubmenu) {
          this.showSolutionMenu = false;
        }
      }, 100);
    },
    handleSupportMenuEnter() {
      clearTimeout(this.supportMenuTimeout);
      this.showSupportMenu = true;
      this.showProductMenu = false;
      this.showSolutionMenu = false;
      this.showAboutMenu = false;
    },
    handleSupportMenuLeave() {
      this.supportMenuTimeout = setTimeout(() => {
        if (!this.isOverSupportSubmenu) {
          this.showSupportMenu = false;
        }
      }, 100);
    },
    handleAboutMenuEnter() {
      clearTimeout(this.aboutMenuTimeout);
      this.showAboutMenu = true;
      this.showProductMenu = false;
      this.showSolutionMenu = false;
      this.showSupportMenu = false;
    },
    handleAboutMenuLeave() {
      this.aboutMenuTimeout = setTimeout(() => {
        if (!this.isOverAboutSubmenu) {
          this.showAboutMenu = false;
        }
      }, 100);
    },
    handleResize() {
      if (window.innerWidth < 992) {
        this.showProductMenu = false;
        this.showSolutionMenu = false;
        this.showSupportMenu = false;
        this.showAboutMenu = false;
      }
    }
  },
  watch: {
    isOverProductSubmenu(newVal) {
      if (!newVal) {
        this.productMenuTimeout = setTimeout(() => {
          this.showProductMenu = false;
        }, 100);
      } else {
        clearTimeout(this.productMenuTimeout);
      }
    },
    isOverSolutionSubmenu(newVal) {
      if (!newVal) {
        this.solutionMenuTimeout = setTimeout(() => {
          this.showSolutionMenu = false;
        }, 100);
      } else {
        clearTimeout(this.solutionMenuTimeout);
      }
    },
    isOverSupportSubmenu(newVal) {
      if (!newVal) {
        this.supportMenuTimeout = setTimeout(() => {
          this.showSupportMenu = false;
        }, 100);
      } else {
        clearTimeout(this.supportMenuTimeout);
      }
    },
    isOverAboutSubmenu(newVal) {
      if (!newVal) {
        this.aboutMenuTimeout = setTimeout(() => {
          this.showAboutMenu = false;
        }, 100);
      } else {
        clearTimeout(this.aboutMenuTimeout);
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    clearTimeout(this.productMenuTimeout);
    clearTimeout(this.solutionMenuTimeout);
    clearTimeout(this.supportMenuTimeout);
    clearTimeout(this.aboutMenuTimeout);
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
  left: 0;
  right: 0;
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
  border-bottom: 2px solid var(--line-color);
  background: none;
}

/* 菜单样式 */
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
  display: block;
  overflow: hidden;
}

.mega-menu-inner {
  display: flex;
  max-width: none;
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  padding-left: 2rem;
}

.product-list {
  flex: 1;
  width: auto;
}

.product-list-menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: auto;
  margin: 0;
  padding: 0;
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

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 响应式调整 */
@media (max-width: 992px) {
  .mega-menu-panel {
    position: static;
    box-shadow: none;
    border-top: none;
  }

  .mega-menu-inner {
    flex-direction: column;
    min-height: auto;
    padding: 0.5rem;
    padding-left: 0.5rem;
  }

  .product-list-menu {
    flex-direction: column;
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
  .navbar-brand img {
    height: 32px;
  }
}

.logo-img {
  max-height: 40px;
  width: auto;
  border-radius: 2px;
  object-fit: contain;
}

@media (max-width: 576px) {
  .logo-img {
    max-height: 36px;
  }
}

/* 删除不需要的样式 */
.products-grid {
  display: none;
}

.product-card {
  display: none;
}

.product-icon {
  display: none;
}

.product-name {
  display: none;
}

.nav-product-label-img {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-product-thumb {
  width: 100px !important;
  height: 100px !important;
  object-fit: contain;
  margin-top: 4px;
}

.product-item {
  display: flex;
  align-items: flex-start;
}

.nav-product-icon-col {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.nav-product-label-img-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-product-thumb {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-top: 4px;
}
</style>