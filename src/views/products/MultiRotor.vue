<!-- 多旋翼无人机页面 -->
<template>
  <div class="product-page multirotor-page">
    <!-- 顶部英雄区域 -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-pattern"></div>
        <div class="hero-overlay">
          <div class="container">
            <div class="hero-content text-center">
              <div class="hero-badge">
                <i class="bi bi-hexagon"></i>
                <span>多旋翼无人机</span>
              </div>
              <h1 class="hero-title">多旋翼无人机</h1>
              <p class="hero-subtitle">专业级多旋翼无人机，高精度稳定飞行，可靠耐用</p>
              <div class="hero-features">
                <div class="feature-item">
                  <i class="bi bi-shield-check"></i>
                  <span>专业级</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-bullseye"></i>
                  <span>高精度</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-gear-wide-connected"></i>
                  <span>稳定性强</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-shield-check"></i>
                  <span>可靠耐用</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示区域 -->
    <section class="products-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">产品系列</h2>
          <p class="section-subtitle">专业级多旋翼无人机，适用于航拍、测绘、巡检等场景</p>
        </div>
        
        <div class="product-grid">
          <div class="product-card" v-for="(drone, index) in drones" :key="drone.id" @click="goToDetail(drone.id)">
            <div class="card-header">
              <div class="product-image" :style="{background: getGradient(index)}">
                <div class="image-overlay">
                  <i class="bi bi-hexagon"></i>
                </div>
              </div>
              <div class="product-badge" :class="getBadgeClass(index)">
                {{ drone.category }}
              </div>
            </div>
            <div class="card-body">
              <h3 class="product-name">{{ drone.name }}</h3>
              <p class="product-description">{{ drone.description }}</p>
              <div class="product-specs">
                <div class="spec-item" v-for="(spec, key) in drone.specs" :key="key">
                  <span class="spec-label">{{ key }}</span>
                  <span class="spec-value">{{ spec }}</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary btn-sm">
                <i class="bi bi-arrow-right"></i>
                查看详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MultiRotorDrone',
  data() {
    return {
      drones: [
        {
          id: 'drone1',
          name: 'WW-1 六旋翼无人机',
          category: '六旋翼',
          description: '专业级六旋翼无人机，适用于航拍测绘等场景',
          specs: {
            '最大起飞重量': '4.5kg',
            '续航时间': '35分钟',
            '最大飞行高度': '3000m',
            '抗风能力': '5级'
          }
        },
        {
          id: 'drone2',
          name: 'WW-2 八旋翼无人机',
          category: '八旋翼',
          description: '重载型八旋翼无人机，适用于工业巡检等场景',
          specs: {
            '最大起飞重量': '8kg',
            '续航时间': '45分钟',
            '最大飞行高度': '3500m',
            '抗风能力': '6级'
          }
        },
        {
          id: 'drone3',
          name: 'WW-3 折叠无人机',
          category: '折叠型',
          description: '便携式折叠无人机，适用于应急救援等场景',
          specs: {
            '最大起飞重量': '2.5kg',
            '续航时间': '25分钟',
            '最大飞行高度': '2000m',
            '抗风能力': '4级'
          }
        },
        {
          id: 'drone4',
          name: 'WW-4 工业无人机',
          category: '工业级',
          description: '工业级多旋翼无人机，适用于大范围巡检等场景',
          specs: {
            '最大起飞重量': '12kg',
            '续航时间': '60分钟',
            '最大飞行高度': '4000m',
            '抗风能力': '6级'
          }
        }
      ]
    }
  },
  methods: {
    getGradient(index) {
      const gradients = [
        'linear-gradient(135deg, #3498db, #2980b9)',
        'linear-gradient(135deg, #e67e22, #d35400)',
        'linear-gradient(135deg, #9b59b6, #8e44ad)',
        'linear-gradient(135deg, #27ae60, #229954)'
      ]
      return gradients[index % gradients.length]
    },
    getBadgeClass(index) {
      const classes = ['badge-primary', 'badge-secondary', 'badge-success', 'badge-warning']
      return classes[index % classes.length]
    },
    goToDetail(droneId) {
      this.$router.push(`/products/details/multirotor/${droneId}`)
    }
  }
}
</script>

<style scoped>
.product-page {
  min-height: 100vh;
  background: #f8f9fa;
}

/* 英雄区域样式 */
.hero-section {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.hero-background {
  height: 100%;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  position: relative;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%);
  animation: patternMove 20s ease-in-out infinite;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  z-index: 1;
}

.hero-content {
  color: #fff;
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

.feature-item i {
  font-size: 1.2rem;
}

/* 产品区域样式 */
.products-section {
  padding: 5rem 0;
}

.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.card-header {
  position: relative;
}

.product-image {
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.product-card:hover .image-overlay {
  opacity: 1;
}

.image-overlay i {
  font-size: 3rem;
  color: #fff;
}

.product-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
}

.badge-primary { background: #007bff; }
.badge-secondary { background: #6c757d; }
.badge-success { background: #28a745; }
.badge-warning { background: #ffc107; color: #212529; }

.card-body {
  padding: 1.5rem;
}

.product-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.product-description {
  color: #6c757d;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.product-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 0.9rem;
}

.spec-label {
  color: #6c757d;
  font-weight: 500;
}

.spec-value {
  color: #2c3e50;
  font-weight: 600;
}

.card-footer {
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

@keyframes patternMove {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, -10px); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-section {
    height: 400px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-features {
    gap: 1rem;
  }
  
  .feature-item {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style> 