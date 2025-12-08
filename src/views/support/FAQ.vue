<template>
  <div class="faq-wrapper">
    <div class="faq-container">
      <h1 class="faq-title">
        <i class="bi bi-question-circle"></i>
        {{ $t('support.faqPage.title') }}
      </h1>
      <p class="faq-subtitle">{{ $t('support.faqPage.subtitle') }}</p>
      
      <div class="faq-main-card">
        <div class="faq-sidebar">
          <div
            v-for="(item, idx) in categories"
            :key="item.title"
            :class="['faq-category', { active: idx === activeIndex }]"
            @click="activeIndex = idx"
          >
            <div class="category-icon">
              <i :class="item.icon"></i>
            </div>
            <span class="category-title">{{ $t(item.titleKey) }}</span>
            <i class="bi bi-chevron-right category-arrow"></i>
          </div>
        </div>
        <div class="faq-content-area">
          <h2 class="faq-content-title">
            <i class="bi bi-info-circle"></i>
            {{ $t(categories[activeIndex].titleKey) }}
          </h2>
          <div class="faq-content-detail">
            <div v-for="(qKey, i) in categories[activeIndex].contentKeys" :key="qKey" class="faq-q-item">
              <div class="question-number">{{ i + 1 }}</div>
              <div class="question-content">{{ $t(qKey) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  metaInfo() {
    return {
      title: this.$t('meta.support.faq.title'),
      meta: [
        { name: 'description', content: this.$t('meta.support.faq.description') },
        { name: 'keywords', content: this.$t('meta.support.faq.keywords') }
      ]
    }
  },
  data() {
    return {
      activeIndex: 0,
      categories: [
        {
          titleKey: 'support.faqPage.categories.connection.title',
          icon: 'bi bi-wifi',
          contentKeys: [
            'support.faqPage.categories.connection.items.item1'
          ]
        },
        {
          titleKey: 'support.faqPage.categories.troubleshooting.title',
          icon: 'bi bi-tools',
          contentKeys: [
            'support.faqPage.categories.troubleshooting.items.item1'
          ]
        },
        {
          titleKey: 'support.faqPage.categories.power.title',
          icon: 'bi bi-lightning',
          contentKeys: [
            'support.faqPage.categories.power.items.item1'
          ]
        },
        {
          titleKey: 'support.faqPage.categories.electronics.title',
          icon: 'bi bi-cpu',
          contentKeys: [
            'support.faqPage.categories.electronics.items.item1'
          ]
        },
        {
          titleKey: 'support.faqPage.categories.navigation.title',
          icon: 'bi bi-compass',
          contentKeys: [
            'support.faqPage.categories.navigation.items.item1'
          ]
        },
        {
          titleKey: 'support.faqPage.categories.camera.title',
          icon: 'bi bi-camera',
          contentKeys: [
            'support.faqPage.categories.camera.items.item1'
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.faq-wrapper {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  /* min-height: 100vh; */
  padding: 2rem 0;
}

.faq-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.faq-title {
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

.faq-title i {
  color: rgb(178,0,0);
  font-size: 2rem;
}

.faq-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.faq-main-card {
  display: flex;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 500px;
}

.faq-sidebar {
  width: 320px;
  background: #fff;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
}

.faq-category {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid #fff;
  margin: 0.25rem 0;
  background: #fff;
  color: rgb(0,0,0);
  position: relative;
  z-index: 1;
}

.faq-category:hover {
  color: rgb(178,0,0);
  border-left: 4px solid rgb(178,0,0);
}

.faq-category:hover .category-title {
  color: rgb(178,0,0);
}

.faq-category:hover .category-arrow {
  color: rgb(178,0,0);
}

.faq-category .category-title {
  color: rgb(0,0,0);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s;
}

.faq-category.active {
  background: #fff;
  color: rgb(178,0,0) !important;
  border-left: 4px solid rgb(178,0,0);
}
.faq-category.active .category-title {
  color: rgb(178,0,0) !important;
}
.faq-category.active .category-arrow {
  color: rgb(178,0,0) !important;
}

.category-icon {
  width: 40px;
  height: 40px;
  background: #f3f3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.category-icon i {
  color: rgb(178,0,0);
  font-size: 1.2rem;
}

.faq-content-area {
  flex: 1;
  padding: 2.5rem;
  background: #fff;
}

.faq-content-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.faq-content-title i {
  color: rgb(178,0,0);
  font-size: 1.3rem;
}

.faq-content-detail {
  color: #495057;
  font-size: 1.05rem;
  line-height: 1.8;
}

.faq-q-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid rgb(178,0,0);
  transition: all 0.3s ease;
}

.faq-q-item:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.question-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.question-content {
  flex: 1;
  line-height: 1.7;
}

.faq-content-area .btn, .faq-content-area button, .faq-content-area a.btn {
  color: rgb(178,0,0) !important;
  background: #fff !important;
  border: none !important;
  box-shadow: none !important;
  transition: none !important;
}
.faq-content-area .btn:hover, .faq-content-area button:hover, .faq-content-area a.btn:hover {
  background: rgb(178,0,0) !important;
  color: #fff !important;
  border: none !important;
  box-shadow: none !important;
  transition: none !important;
}

.section-line {
  background: rgb(178,0,0) !important;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .faq-container {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .faq-wrapper {
    padding: 1.5rem 0;
  }
  
  .faq-container {
    padding: 0 1rem;
  }
  
  .faq-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .faq-title i {
    font-size: 1.5rem;
  }
  
  .faq-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .faq-main-card {
    flex-direction: column;
    min-height: auto;
  }
  
  .faq-sidebar {
    width: 100%;
    padding: 1rem 0;
  }
  
  .faq-category {
    padding: 0.75rem 1rem;
    margin: 0.125rem 0;
  }
  
  .category-icon {
    width: 32px;
    height: 32px;
    margin-right: 0.75rem;
  }
  
  .category-icon i {
    font-size: 1rem;
  }
  
  .category-title {
    font-size: 0.9rem;
  }
  
  .faq-content-area {
    padding: 1.5rem;
  }
  
  .faq-content-title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  .faq-q-item {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .question-number {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
    margin-right: 0.75rem;
  }
  
  .question-content {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .faq-container {
    padding: 0 0.5rem;
  }
  
  .faq-title {
    font-size: 1.8rem;
  }
  
  .faq-subtitle {
    font-size: 0.9rem;
  }
  
  .faq-content-area {
    padding: 1rem;
  }
  
  .faq-content-title {
    font-size: 1.2rem;
  }
  
  .faq-q-item {
    padding: 0.75rem;
  }
  
  .question-content {
    font-size: 0.95rem;
  }
}
</style>
