<template>
  <footer class="footer-modern">
    <div class="container">
      <div class="footer-content">
        <div v-for="section in footerSections" :key="section.key" 
             :class="['footer-section', section.class]">
          <h5 class="footer-title">{{ section.title }}</h5>
          <ul v-if="section.links" class="footer-links">
            <li v-for="link in section.links" :key="link.to">
              <router-link :to="link.to">{{ link.text }}</router-link>
            </li>
          </ul>
          <div v-if="section.contact" class="contact-info">
            <div v-for="contact in section.contact" :key="contact.text" class="contact-item">
              <i :class="contact.icon"></i>
              <span>{{ formatEmail(contact.text) }}</span>
        </div>
        </div>
        </div>
      </div>
      
      <div class="footer-divider"></div>
      <p class="copyright">{{ $t('footer.copyrightInfo') }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    formatEmail(text) {
      return text.replace('{at}', '@');
    }
  },
  computed: {
    // 使用计算属性生成文案，依赖 $i18n.locale 实现语言切换时的自动更新
    footerSections() {
      const locale = this.$i18n.locale;
      return [
        {
          key: `products-${locale}`,
          title: this.$t('footer.products'),
          links: [
            { to: '/products/fpv', text: this.$t('footer.productLinks.fpv') },
            { to: '/products/multi-rotor', text: this.$t('footer.productLinks.multiRotor') },
            { to: '/products/fixed-wing', text: this.$t('footer.productLinks.fixedWing') },
            { to: '/products/helicopter', text: this.$t('footer.productLinks.helicopter') }
          ]
        },
        {
          key: `applications-${locale}`,
          title: this.$t('footer.applications'),
          links: [
            { to: '/applications/mapping', text: this.$t('footer.applicationLinks.mapping') },
            { to: '/applications/inspection', text: this.$t('footer.applicationLinks.waterConservancy') },
            { to: '/applications/delivery', text: this.$t('footer.applicationLinks.emergency') },
            { to: '/applications/agriculture', text: this.$t('footer.applicationLinks.forestry') },
            { to: '/applications/aerial', text: this.$t('footer.applicationLinks.transportation') },
            { to: '/applications/powerline', text: this.$t('footer.applicationLinks.powerInspection') },
            { to: '/applications/spraying', text: this.$t('footer.applicationLinks.environmental') },
            { to: '/applications/farming', text: this.$t('footer.applicationLinks.agriculture') },
            { to: '/applications/integration', text: this.$t('footer.applicationLinks.logistics') }
          ]
        },
        {
          key: `services-${locale}`,
          title: this.$t('footer.services'),
          links: [
            { to: '/support/downloads', text: this.$t('footer.supportLinks.downloads') },
            { to: '/support/policy', text: this.$t('footer.supportLinks.policy') },
            { to: '/support/faq', text: this.$t('footer.supportLinks.faq') },
            { to: '/support/hotline', text: this.$t('footer.supportLinks.hotline') }
          ]
        },
        {
          key: `about-${locale}`,
          title: this.$t('footer.about'),
          links: [
            { to: '/about/contact', text: this.$t('footer.aboutLinks.contactUs') },
            { to: '/about/company', text: this.$t('footer.aboutLinks.company') },
            { to: '/about/responsibility', text: this.$t('footer.aboutLinks.responsibility') },
            { to: '/about/careers', text: this.$t('footer.aboutLinks.careers') }
          ]
        },
        {
          key: `contact-${locale}`,
          title: this.$t('footer.contact'),
          class: 'contact-section',
          contact: [
            { icon: 'bi bi-envelope', text: this.$t('footer.contactInfo.salesEmail') },
            { icon: 'bi bi-person-plus', text: this.$t('footer.contactInfo.recruitEmail') }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.footer-modern {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 3rem 0 1.5rem;
  border-top: 1px solid var(--line-color);
  font-family: 'Microsoft YaHei', Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.contact-section {
  flex: 2;
  min-width: 250px;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  display: inline-block; /* 关键：让下划线宽度随文字 */
}

/* 按钮统一样式 */
.btn,
.btn-light {
  color: rgb(178,0,0) !important;
  background: #fff !important;
  border: none !important;
  box-shadow: none !important;
  font-weight: 500;
  transition: none !important;
}
.btn:hover,
.btn-light:hover {
  background: rgb(178,0,0) !important;
  color: #fff !important;
  border: none !important;
  box-shadow: none !important;
  transition: none !important;
}

/* 页脚下划线颜色统一 */
.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* 这里width:100%会随inline-block宽度变化 */
  height: 2px;
  background: rgb(178,0,0) !important;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: #6c757d;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.footer-links a:hover {
  color: var(--accent-color);
  padding-left: 8px;
}

/* 页脚链接hover下划线颜色 */
.footer-links a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 1px;
  background: rgb(178,0,0) !important;
  transition: width 0.3s ease;
  transform: translateY(-50%);
}

.footer-links a:hover::before {
  width: 6px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.contact-item i {
  color: rgb(178,0,0) !important;
  font-size: 1rem;
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

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--line-color), transparent);
  margin: 2rem 0;
}

.copyright {
  color: #6c757d;
  font-size: 0.85rem;
  margin: 0;
  text-align: center;
}

@media (max-width: 768px) {
  .footer-modern {
    padding: 2rem 0 1rem;
  }
  
  .footer-section {
    min-width: 150px;
  }
  
  .footer-title {
    font-size: 1rem;
  }
  
  .footer-links a,
  .contact-item {
    font-size: 0.85rem;
  }
}

@media (max-width: 576px) {
  .footer-title {
    margin-bottom: 0.8rem;
  }
  
  .footer-links li {
    margin-bottom: 0.5rem;
  }
}
</style>
