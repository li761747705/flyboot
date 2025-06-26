<!-- 下载中心 -->
<template>
  <div class="downloads-page">
    <div class="downloads-container">
      <h2 class="downloads-title">
        <i class="bi bi-download"></i>
        固件与文档下载
      </h2>
      <p class="downloads-subtitle">获取最新的软件、固件和文档资料，支持多种产品型号</p>
      
      <div class="downloads-grid">
        <div
          v-for="item in series"
          :key="item.title"
          class="downloads-card"
          @click="goTo(item.link)"
        >
          <div class="card-icon">
            <i :class="getCardIcon(item.title)"></i>
          </div>
          <div class="downloads-card-title">{{ item.title }}</div>
          <div class="downloads-card-link">
            <span>固件与文档</span>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Downloads',
  metaInfo: {
    title: '下载中心 - 麒风智能无人机'
  },
  data() {
    return {
      series: [
        { title: '穿越无人机系列', link: '/download/fpv' },
        { title: '固定翼无人机系列', link: '/download/fixedwing' },
        { title: '多旋翼无人机系列', link: '/download/multirotor' },
        { title: '无人直升机系列', link: '/download/helicopter' }
      ]
    }
  },
  methods: {
    goTo(link) {
      this.$router.push(link)
    },
    getCardIcon(title) {
      const iconMap = {
        '穿越无人机系列': 'bi bi-lightning',
        '固定翼无人机系列': 'bi bi-airplane',
        '多旋翼无人机系列': 'bi bi-hexagon',
        '无人直升机系列': 'bi bi-fan'
      }
      return iconMap[title] || 'bi bi-download'
    }
  }
}
</script>

<style scoped>
.downloads-page {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.downloads-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.downloads-title {
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

.downloads-title i {
  color: #667eea;
  font-size: 2rem;
}

.downloads-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.downloads-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.downloads-card {
  width: 100%;
  max-width: 380px;
  height: 280px;
  background: #fff;
  border: 2px solid #e9ecef;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.downloads-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.downloads-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}

.downloads-card:hover::before {
  opacity: 1;
}

.card-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.downloads-card:hover .card-icon {
  transform: scale(1.1);
}

.card-icon i {
  font-size: 2rem;
  color: white;
}

.downloads-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: #2c3e50;
  position: relative;
  z-index: 1;
}

.downloads-card-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #667eea;
  font-weight: 500;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.downloads-card:hover .downloads-card-link {
  color: #5a67d8;
}

.downloads-card-link i {
  transition: transform 0.3s ease;
}

.downloads-card:hover .downloads-card-link i {
  transform: translateX(4px);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .downloads-container {
    max-width: 95%;
  }
  
  .downloads-grid {
    max-width: 90%;
  }
}

@media (max-width: 768px) {
  .downloads-page {
    padding: 1.5rem 0;
  }
  
  .downloads-container {
    padding: 0 1rem;
  }
  
  .downloads-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .downloads-title i {
    font-size: 1.5rem;
  }
  
  .downloads-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .downloads-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }
  
  .downloads-card {
    max-width: 100%;
    height: 240px;
  }
  
  .card-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
  
  .card-icon i {
    font-size: 1.5rem;
  }
  
  .downloads-card-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .downloads-container {
    padding: 0 0.5rem;
  }
  
  .downloads-title {
    font-size: 1.8rem;
  }
  
  .downloads-subtitle {
    font-size: 0.9rem;
  }
  
  .downloads-card {
    height: 220px;
  }
}
</style> 