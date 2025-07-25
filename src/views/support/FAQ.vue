<template>
  <div class="faq-wrapper">
    <div class="faq-container">
      <h1 class="faq-title">
        <i class="bi bi-question-circle"></i>
        常见问题
      </h1>
      <p class="faq-subtitle">快速找到您需要的答案，分类整理，便于查找</p>
      
      <div class="faq-main-card">
        <div class="faq-sidebar">
          <div
            v-for="(item, idx) in categories"
            :key="item.title"
            :class="['faq-category', { active: idx === activeIndex }]"
            @click="activeIndex = idx"
          >
            <div class="category-icon">
              <i :class="getCategoryIcon(item.title)"></i>
            </div>
            <span class="category-title">{{ item.title }}</span>
            <i class="bi bi-chevron-right category-arrow"></i>
          </div>
        </div>
        <div class="faq-content-area">
          <h2 class="faq-content-title">
            <i class="bi bi-info-circle"></i>
            {{ categories[activeIndex].title }}
          </h2>
          <div class="faq-content-detail">
            <div v-for="(q, i) in categories[activeIndex].content" :key="i" class="faq-q-item">
              <div class="question-number">{{ i + 1 }}</div>
              <div class="question-content">{{ q }}</div>
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
  data() {
    return {
      activeIndex: 0,
      categories: [
        {
          title: '连接问题',
          content: [
            '用户可能会遇到遥控器信号受干扰或无法连接无人机的问题。这有可能是由软件或硬件问题导致的，可以尝试重启设备、更新固件或者检查硬件连接是否牢固。'
          ]
        },
        {
          title: '故障识别与处理',
          content: [
            '遇到设备异常时，建议首先查看指示灯状态，根据说明书判断故障类型，并按步骤排查。必要时联系售后支持。'
          ]
        },
        {
          title: '动力系统异常',
          content: [
            '动力系统异常可能表现为电机不转、转速不稳等。请检查电池电量、接线和电调状态。'
          ]
        },
        {
          title: '电子系统故障',
          content: [
            '电子系统故障常见于飞控、传感器等模块。可尝试断电重启，或恢复出厂设置。'
          ]
        },
        {
          title: '导航与控制系统故障',
          content: [
            '导航与控制系统故障可能导致飞行异常。请检查GPS模块、指南针校准情况。'
          ]
        },
        {
          title: '摄像头和信号传输系统故障',
          content: [
            '摄像头或信号传输异常时，建议检查连接线、模块插拔，或更换相关配件。'
          ]
        }
      ]
    }
  },
  methods: {
    getCategoryIcon(title) {
      const iconMap = {
        '连接问题': 'bi bi-wifi',
        '故障识别与处理': 'bi bi-tools',
        '动力系统异常': 'bi bi-lightning',
        '电子系统故障': 'bi bi-cpu',
        '导航与控制系统故障': 'bi bi-compass',
        '摄像头和信号传输系统故障': 'bi bi-camera'
      }
      return iconMap[title] || 'bi bi-question-circle'
    }
  }
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