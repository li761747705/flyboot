<template>
  <footer class="footer-modern">
    <div class="container">
      <div class="footer-content">
        <div v-for="section in footerSections" :key="section.title" 
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
              <span>{{ contact.text }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-divider"></div>
      <p class="copyright">© 2024 麒风智能科技有限公司. 保留所有权利.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      footerSections: [
        {
          title: '产品系列',
          links: [
            { to: '/products/fpv', text: '穿越无人机' },
            { to: '/products/multi-rotor', text: '多旋翼无人机' },
            { to: '/products/fixed-wing', text: '固定翼无人机' },
            { to: '/products/helicopter', text: '无人直升机' }
          ]
        },
        {
          title: '行业应用',
          links: [
            { to: '/applications/mapping', text: '测绘' },
            { to: '/applications/inspection', text: '水利' },
            { to: '/applications/delivery', text: '应急' },
            { to: '/applications/agriculture', text: '森林勘察' },
            { to: '/applications/aerial', text: '交通' },
            { to: '/applications/powerline', text: '电力巡检' },
            { to: '/applications/spraying', text: '环保' },
            { to: '/applications/farming', text: '农业应用' },
            { to: '/applications/integration', text: '运载应用' }
          ]
        },
        {
          title: '服务与支持',
          links: [
            { to: '/support/downloads', text: '下载中心' },
            { to: '/support/policy', text: '售后服务政策' },
            { to: '/support/faq', text: '常见问题' },
            { to: '/support/hotline', text: '服务热线' }
          ]
        },
        {
          title: '关于我们',
          links: [
            { to: '/about/contact', text: '联系我们' },
            { to: '/about/company', text: '公司介绍' },
            { to: '/about/responsibility', text: '社会责任' },
            { to: '/about/careers', text: '招贤纳士' }
          ]
        },
        {
          title: '联系我们',
          class: 'contact-section',
          contact: [
            { icon: 'bi bi-envelope', text: '售后邮箱：2236807538@qq.com' },
            { icon: 'bi bi-person-plus', text: '招聘邮箱：2236807538@qq.com' }
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
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 70px;
  height: 2px;
  background: var(--accent-color);
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

.footer-links a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 1px;
  background: var(--accent-color);
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
  color: var(--accent-color);
  font-size: 1rem;
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