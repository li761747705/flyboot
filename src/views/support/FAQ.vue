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
  metaInfo: {
    title: '常见问题 - 麒风智能无人机'
  },
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
  min-height: 100vh;
  padding: 2rem 0;
}

.faq-container {
  max-width: 1200px;
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
  color: #667eea;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  border-left: 4px solid transparent;
  margin: 0.25rem 0;
}

.faq-category:hover {
  background: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.5);
}

.faq-category.active {
  background: rgba(255, 255, 255, 0.2);
  border-left-color: #fff;
}

.category-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.category-icon i {
  color: white;
  font-size: 1.2rem;
}

.category-title {
  flex: 1;
  color: white;
  font-weight: 500;
  font-size: 1rem;
}

.category-arrow {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.faq-category.active .category-arrow {
  transform: rotate(90deg);
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
  color: #667eea;
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
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
}

.faq-q-item:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.question-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.question-content {
  flex: 1;
  line-height: 1.7;
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