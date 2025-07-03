<!-- 联系我们页面 -->
<template>
  <div class="contact-page">
    <div class="contact-banner">
      <img src="/images/about/contact/通用1900X400.png" alt="招贤纳士" />
    </div>
    <!-- 联系信息区域 -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-header">
          <h2 class="contact-title">联系我们</h2>
          <p class="contact-subtitle">随时为您提供专业的技术支持和服务</p>
        </div>
        
        <div class="contact-info-card">
          <div class="contact-info-content">
            <div class="contact-info-main">
              <div class="contact-icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div class="contact-details">
                <h3>中国大陆地址</h3>
                <div class="contact-item">
                  <i class="bi bi-building"></i>
                  <span>四川麒风智能科技有限公司</span>
                </div>
                <div class="contact-item">
                  <i class="bi bi-geo-alt"></i>
                  <span>四川省成都市高新区天府五街200号菁蓉汇7号楼</span>
                </div>
                <div class="contact-item">
                  <i class="bi bi-telephone"></i>
                  <span>028-8888-8888</span>
                </div>
                <div class="contact-item">
                  <i class="bi bi-envelope"></i>
                  <span>info@linfengai.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-qr-section">
            <div class="qr-card">
              <div class="qr-icon">
                <i class="bi bi-qr-code"></i>
              </div>
              <div class="qr-text">
                <h4>扫码联系</h4>
                <p>微信二维码</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系表单 -->
    <section class="contact-form-section">
      <div class="container">
        <div class="form-card">
          <div class="form-header">
            <h3>在线咨询</h3>
            <p>填写以下信息，我们将尽快与您联系</p>
          </div>
          
          <form class="contact-form" @submit.prevent="submitContactForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">
                  <i class="bi bi-person"></i>
                  姓名
                </label>
                <input 
                  id="name"
                  v-model="contactForm.name" 
                  type="text" 
                  class="form-input" 
                  placeholder="请输入您的姓名" 
                  required 
                />
              </div>
              <div class="form-group">
                <label for="phone">
                  <i class="bi bi-telephone"></i>
                  电话
                </label>
                <input 
                  id="phone"
                  v-model="contactForm.phone" 
                  type="tel" 
                  class="form-input" 
                  placeholder="请输入您的联系电话" 
                  required 
                />
              </div>
            </div>
            
            <div class="form-group">
              <label for="email">
                <i class="bi bi-envelope"></i>
                邮箱
              </label>
              <input 
                id="email"
                v-model="contactForm.email" 
                type="email" 
                class="form-input" 
                placeholder="请输入您的邮箱地址" 
                required 
              />
            </div>
            
            <div class="form-group">
              <label for="message">
                <i class="bi bi-chat-text"></i>
                需求描述
              </label>
              <textarea 
                id="message"
                v-model="contactForm.message" 
                class="form-textarea" 
                placeholder="请详细描述您的需求或问题..." 
                rows="5"
                required
              ></textarea>
            </div>
            
            <div class="form-actions">
              <button type="submit" class="submit-btn">
                <i class="bi bi-send"></i>
                提交咨询
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contactForm: {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitContactForm() {
      if (!this.contactForm.name || !this.contactForm.phone || !this.contactForm.email || !this.contactForm.message) {
        alert('请完整填写所有信息');
        return;
      }
      
      const subject = encodeURIComponent('麒风智能网站联系表单留言');
      const body = encodeURIComponent(
        `姓名：${this.contactForm.name}\n联系方式：${this.contactForm.phone}\n邮箱：${this.contactForm.email}\n需求：${this.contactForm.message}`
      );
      
      window.location.href = `mailto:info@linfengai.com?subject=${subject}&body=${body}`;
      
      // 清空表单
      this.contactForm = {
        name: '',
        phone: '',
        email: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-page {
  background: #f8f9fa;
  min-height: 100vh;
}

.contact-banner {
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}
.contact-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.contact-info-section, .contact-form-section {
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
}
.contact-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2px;
}
.contact-subtitle {
  color: #6c757d;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.contact-info-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}
.contact-info-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-info-main {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}
.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}
.contact-details h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-size: 1rem;
}
.contact-item i {
  color: #667eea;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}
.contact-qr-section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.qr-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 2px dashed #dee2e6;
  width: 100%;
  max-width: 200px;
}
.qr-icon {
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
}
.qr-text h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
.qr-text p {
  color: #6c757d;
  font-size: 0.9rem;
}

.form-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1200px;
  margin: 0 auto;
}
.form-header {
  text-align: center;
  margin-bottom: 2rem;
}
.form-header h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
.form-header p {
  color: #6c757d;
  font-size: 1rem;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.95rem;
}
.form-group label i {
  color: #667eea;
  font-size: 1rem;
}
.form-input,
.form-textarea {
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
}
.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}
.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.submit-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}
.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}
.submit-btn:active {
  transform: translateY(0);
}

@media (max-width: 1200px) {
  .contact-info-card,
  .form-card {
    max-width: 95%;
  }
}
@media (max-width: 768px) {
  .contact-info-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    max-width: 90%;
  }
  .contact-info-main {
    flex-direction: column;
    text-align: center;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .form-card {
    padding: 2rem;
    max-width: 90%;
  }
  .contact-title {
    font-size: 2rem;
  }
}
@media (max-width: 576px) {
  .contact-info-card,
  .form-card {
    padding: 1.5rem;
    max-width: 98%;
  }
  .contact-title {
    font-size: 1.8rem;
  }
  .contact-details h3 {
    font-size: 1.3rem;
  }
}
</style> 