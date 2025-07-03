<template>
  <div class="hotline-page">
    <div class="hotline-container">
      <h2 class="hotline-title">
        <i class="bi bi-telephone"></i>
        热线服务
      </h2>
      <p class="hotline-subtitle">专业团队，7×24小时为您服务，快速响应您的需求</p>
      
      <div class="hotline-cards">
        <div class="hotline-row">
          <div class="hotline-card" v-for="card in cards" :key="card.title">
            <div class="card-header">
              <div class="card-icon">
                <i :class="card.icon"></i>
              </div>
              <h3 class="hotline-card-title">{{ card.title }}</h3>
            </div>
            <div class="hotline-card-body">
              <div class="contact-item" v-for="item in card.contacts" :key="item.text" :class="{ highlight: item.highlight }">
                <i :class="item.icon"></i>
                <span v-html="item.text"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hotline',
  data() {
    return {
      cards: [
        {
          title: '销售咨询',
          icon: 'bi bi-person-check',
          contacts: [
            { icon: 'bi bi-building', text: '麒风智能科技有限公司' },
            { icon: 'bi bi-telephone', text: '联系电话：150-0000-0000（李经理）' },
            { icon: 'bi bi-envelope', text: '邮箱：sales@qifeng.com' },
            { icon: 'bi bi-wechat', text: '微信服务号：手机号同步' }
          ]
        },
        {
          title: '技术顾问',
          icon: 'bi bi-tools',
          contacts: [
            { icon: 'bi bi-building', text: '麒风智能科技有限公司' },
            { icon: 'bi bi-telephone', text: '联系电话：139-0000-0000（张师傅）' },
            { icon: 'bi bi-envelope', text: '邮箱：tech@qifeng.com' },
            { icon: 'bi bi-wechat', text: '微信服务号：手机号同步' }
          ]
        },
        {
          title: '客户服务热线',
          icon: 'bi bi-headset',
          contacts: [
            { icon: 'bi bi-building', text: '麒风智能科技有限公司' },
            { icon: 'bi bi-telephone-fill', text: '服务热线：400-888-8888', highlight: true },
            { icon: 'bi bi-envelope', text: '邮箱：service@qifeng.com' },
            { icon: 'bi bi-clock', text: '工作时间：周一至周六 9:00-18:00' },
            { icon: 'bi bi-geo-alt', text: '地址：深圳市南山区科技园' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.hotline-page {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  padding: 2rem 0;
}

.hotline-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hotline-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.hotline-title i {
  color: #667eea;
  font-size: 2rem;
}

.hotline-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hotline-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.hotline-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
}

.hotline-row-center {
  margin-top: 0;
}

.hotline-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  min-width: 320px;
  max-width: 380px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.hotline-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}

.hotline-card-large {
  max-width: 500px;
  min-height: 320px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f8f9fa;
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon i {
  color: white;
  font-size: 1.5rem;
}

.hotline-card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.hotline-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: #495057;
  line-height: 1.5;
}

.contact-item i {
  color: #667eea;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.contact-item.highlight {
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.1rem;
}

.contact-item.highlight i {
  color: #667eea;
  font-size: 1.2rem;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .hotline-container {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .hotline-page {
    padding: 1.5rem 0;
  }
  
  .hotline-container {
    padding: 0 1rem;
  }
  
  .hotline-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .hotline-title i {
    font-size: 1.5rem;
  }
  
  .hotline-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .hotline-cards {
    gap: 2rem;
  }
  
  .hotline-row {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  
  .hotline-card {
    min-width: 0;
    width: 100%;
    max-width: 100%;
    padding: 1.5rem;
    min-height: auto;
  }
  
  .hotline-card-large {
    max-width: 100%;
    min-height: auto;
  }
  
  .card-header {
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
  }
  
  .card-icon {
    width: 40px;
    height: 40px;
  }
  
  .card-icon i {
    font-size: 1.2rem;
  }
  
  .hotline-card-title {
    font-size: 1.2rem;
  }
  
  .hotline-card-body {
    gap: 0.75rem;
  }
  
  .contact-item {
    font-size: 0.95rem;
    gap: 0.5rem;
  }
  
  .contact-item i {
    font-size: 1rem;
    width: 16px;
  }
  
  .contact-item.highlight {
    font-size: 1rem;
  }
  
  .contact-item.highlight i {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .hotline-container {
    padding: 0 0.5rem;
  }
  
  .hotline-title {
    font-size: 1.8rem;
  }
  
  .hotline-subtitle {
    font-size: 0.9rem;
  }
  
  .hotline-card {
    padding: 1rem;
  }
  
  .card-header {
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
  }
  
  .card-icon {
    width: 35px;
    height: 35px;
  }
  
  .card-icon i {
    font-size: 1rem;
  }
  
  .hotline-card-title {
    font-size: 1.1rem;
  }
  
  .contact-item {
    font-size: 0.9rem;
  }
  
  .contact-item.highlight {
    font-size: 0.95rem;
  }
}
</style> 