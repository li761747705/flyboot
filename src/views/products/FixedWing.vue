<!-- 固定翼无人机页面 -->
<template>
  <div class="product-page fixedwing-page">
    <!-- 顶部英雄区域 -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-pattern"></div>
        <div class="hero-overlay">
          <div class="container">
            <div class="hero-content text-center">
              <div class="hero-badge">
                <i class="bi bi-airplane"></i>
                <span>固定翼无人机</span>
              </div>
              <h1 class="hero-title">固定翼无人机</h1>
              <p class="hero-subtitle">长航时高效飞行，专业级测绘与巡检解决方案</p>
              <div class="hero-features">
                <div class="feature-item">
                  <i class="bi bi-clock"></i>
                  <span>长航时</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-speedometer2"></i>
                  <span>高效飞行</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-grid-3x3"></i>
                  <span>大面积覆盖</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-gear-wide-connected"></i>
                  <span>多场景应用</span>
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
          <p class="section-subtitle">专业级固定翼无人机，适用于测绘、巡检、监控等场景</p>
        </div>
        
        <div class="product-grid">
          <div class="product-card" v-for="(drone, index) in drones" :key="drone.id" @click="goToDetail(drone.id)">
            <div class="card-header">
              <div class="product-image" :style="{background: getGradient(index)}">
                <div class="image-overlay">
                  <i class="bi bi-airplane"></i>
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
  name: 'FixedWingDrone',
  data() {
    return {
      drones: [
        {
          id: 'fixed-f1800',
          name: 'F1800 测绘型固定翼',
          category: '测绘型',
          description: '专业测绘无人机，高精度摄影测量',
          specs: {
            '最大起飞重量': '5.2kg',
            '续航时间': '120分钟',
            '最大飞行高度': '5000m',
            '抗风能力': '6级'
          }
        },
        {
          id: 'fixed-s2000',
          name: 'S2000 监控型固定翼',
          category: '监控型',
          description: '长航时监控无人机，大范围巡查',
          specs: {
            '最大起飞重量': '6.5kg',
            '续航时间': '150分钟',
            '最大飞行高度': '6000m',
            '抗风能力': '6级'
          }
        },
        {
          id: 'fixed-v1500',
          name: 'V1500 垂直起降固定翼',
          category: 'VTOL型',
          description: '垂直起降固定翼，无需跑道',
          specs: {
            '最大起飞重量': '4.8kg',
            '续航时间': '90分钟',
            '最大飞行高度': '4000m',
            '抗风能力': '5级'
          }
        },
        {
          id: 'fixed-m3000',
          name: 'M3000 大型测绘固定翼',
          category: '大型',
          description: '大型测绘固定翼，超长航时',
          specs: {
            '最大起飞重量': '12kg',
            '续航时间': '240分钟',
            '最大飞行高度': '8000m',
            '抗风能力': '7级'
          }
        }
      ]
    }
  },
  methods: {
    getGradient(index) {
      const gradients = [
        'linear-gradient(135deg, #667eea, #764ba2)',
        'linear-gradient(135deg, #f093fb, #f5576c)',
        'linear-gradient(135deg, #4facfe, #00f2fe)',
        'linear-gradient(135deg, #43e97b, #38f9d7)'
      ]
      return gradients[index % gradients.length]
    },
    getBadgeClass(index) {
      const classes = ['badge-primary', 'badge-secondary', 'badge-success', 'badge-warning']
      return classes[index % classes.length]
    },
    goToDetail(droneId) {
      this.$router.push(`/products/details/fixedwing/${droneId}`)
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
  background: linear-gradient(135deg, #2980b9 0%, #27ae60 100%);
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

