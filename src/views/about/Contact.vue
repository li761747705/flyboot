<!-- 联系我们页面 -->
<template>
  <div class="contact-page">
    <div class="contact-banner">
      <img src="/images/about/contact/通用1900X400.png" :alt="$t('about.contactPage.bannerAlt')" loading="lazy" />
    </div>
    <!-- 联系信息区域 -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-header">
          <h2 class="contact-title">{{ $t('about.contactPage.title') }}</h2>
          <p class="contact-subtitle">{{ $t('about.contactPage.subtitle') }}</p>
        </div>
        
        <div class="contact-info-card">
          <div class="contact-info-content">
            <div class="contact-info-main">
              <div class="contact-icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div class="contact-details">
                <h3>{{ $t('about.contactPage.address.title') }}</h3>
                <div class="contact-item">
                  <i class="bi bi-building"></i>
                  <span>{{ $t('about.contactPage.address.company') }}</span>
                </div>
                <div class="contact-item">
                  <i class="bi bi-geo-alt"></i>
                  <span>{{ $t('about.contactPage.address.detail') }}</span>
                </div>
                <div class="contact-item">
                  <i class="bi bi-telephone"></i>
                  <span>{{ $t('about.contactPage.address.phone') }}</span>
                </div>
                <div class="contact-item">
                  <i class="bi bi-envelope"></i>
                  <span>{{ $t('about.contactPage.address.email') }}</span>
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
                <h4>{{ $t('about.contactPage.qr.title') }}</h4>
                <p>{{ $t('about.contactPage.qr.caption') }}</p>
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
            <h3>{{ $t('about.contactPage.form.title') }}</h3>
            <p>{{ $t('about.contactPage.form.subtitle') }}</p>
          </div>
          
          <form class="contact-form" @submit.prevent="submitContactForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">
                  <i class="bi bi-person"></i>
                  {{ $t('about.contactPage.form.labels.name') }}
                </label>
                <input 
                  id="name"
                  v-model="contactForm.name" 
                  type="text" 
                  class="form-input" 
                  :placeholder="$t('about.contactPage.form.placeholders.name')" 
                  required 
                />
              </div>
              <div class="form-group">
                <label for="phone">
                  <i class="bi bi-telephone"></i>
                  {{ $t('about.contactPage.form.labels.phone') }}
                </label>
                <input 
                  id="phone"
                  v-model="contactForm.phone" 
                  type="tel" 
                  class="form-input" 
                  :placeholder="$t('about.contactPage.form.placeholders.phone')" 
                  required 
                />
              </div>
            </div>
            
            <div class="form-group">
                <label for="email">
                  <i class="bi bi-envelope"></i>
                  {{ $t('about.contactPage.form.labels.email') }}
                </label>
              <input 
                id="email"
                v-model="contactForm.email" 
                type="email" 
                class="form-input" 
                  :placeholder="$t('about.contactPage.form.placeholders.email')" 
                required 
              />
            </div>
            
            <div class="form-group">
                <label for="message">
                <i class="bi bi-chat-text"></i>
                {{ $t('about.contactPage.form.labels.message') }}
              </label>
              <textarea 
                id="message"
                v-model="contactForm.message" 
                class="form-textarea" 
                :placeholder="$t('about.contactPage.form.placeholders.message')" 
                rows="5"
                required
              ></textarea>
            </div>
            
            <div class="form-actions">
              <button type="submit" class="submit-btn">
                <i class="bi bi-send"></i>
                {{ $t('about.contactPage.form.submit') }}
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
        alert(this.$t('about.contactPage.form.alertFillAll'));
        return;
      }
      
      const subject = encodeURIComponent(this.$t('about.contactPage.email.subject'));
      const body = encodeURIComponent(
        `${this.$t('about.contactPage.email.labels.name')}${this.contactForm.name}\n${this.$t('about.contactPage.email.labels.phone')}${this.contactForm.phone}\n${this.$t('about.contactPage.email.labels.email')}${this.contactForm.email}\n${this.$t('about.contactPage.email.labels.message')}${this.contactForm.message}`
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
  height: 700px;
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
  max-width: 1600px;
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
  width: 155px; /* 增加宽度，使其与文字等长 */
  height: 3px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
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
  max-width: 1600px;
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
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
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
  color: rgb(178,0,0);
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
  color: rgb(178,0,0);
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
  max-width: 1600px;
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
  color: rgb(178,0,0);
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
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(178, 0, 0, 0.3);
}
.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(178, 0, 0, 0.4);
}
.submit-btn:active {
  transform: translateY(0);
}

@media (max-width: 1600px) {
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
    font-size: 3rem;
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
