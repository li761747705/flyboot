<!-- FPV穿越无人机页面 -->
<template>
  <div class="product-page fpv-page">
    <!-- 顶部英雄区域 -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-pattern"></div>
        <div class="hero-overlay">
          <div class="container">
            <div class="hero-content text-center">
              <div class="hero-badge">
                <i class="bi bi-camera-video"></i>
                <span>FPV穿越无人机</span>
              </div>
              <h1 class="hero-title">穿越无人机</h1>
              <p class="hero-subtitle">极速穿越，征服每个弯道</p>
              <div class="hero-features">
                <div class="feature-item">
                  <i class="bi bi-speedometer2"></i>
                  <span>高速穿越</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-camera-video-fill"></i>
                  <span>高清FPV</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-stars"></i>
                  <span>竞速特技</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-film"></i>
                  <span>航拍创作</span>
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
          <h2 class="section-title section-line">产品系列</h2>
          <p class="section-subtitle">专业级FPV穿越无人机，满足不同场景需求</p>
        </div>
        <div class="product-grid">
          <div class="product-card" v-for="(drone, index) in drones" :key="drone.id" @click="goToDetail(drone.id)">
            <div class="card-bg" :style="{ backgroundImage: `url('${drone.image}')`, backgroundSize: 'cover' }">
              <div class="card-overlay"></div>
              <div class="card-content">
                <div class="product-badge" :class="getBadgeClass(index)">{{ drone.category }}</div>
                <h3 class="product-name">{{ drone.name }}</h3>
                <button class="btn btn-detail" @click.stop="goToDetail(drone.id)">查看详情</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 加载状态 -->
    <div class="loading-overlay" v-if="isLoading">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p>正在加载产品信息...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FPVDrone',
  data() {
    return {
      drones: [
        {
          id: 'fpv-p1',
          name: 'P1 竞速穿越机',
          category: '竞速型',
          badgeType: 'primary',
          description: '专为竞速比赛设计，极致的速度体验',
          image: '/images/products/fpv/02.png',
          specs: {
            '最大速度': '180km/h',
            '续航时间': '8分钟',
            '重量': '350g',
            '图传': '5.8GHz'
          }
        },
        {
          id: 'fpv-p2x',
          name: 'P2X 特技穿越机',
          category: '特技型',
          badgeType: 'secondary',
          description: '自由式特技飞行，展现飞行技巧',
          image: '/images/products/fpv/02.png',
          specs: {
            '最大速度': '160km/h',
            '续航时间': '10分钟',
            '重量': '380g',
            '图传': '5.8GHz'
          }
        },
        {
          id: 'fpv-c1',
          name: 'C1 电影穿越机',
          category: '电影级',
          badgeType: 'success',
          description: '专业航拍穿越机，高清画质输出',
          image: '/images/products/fpv/02.png',
          specs: {
            '最大速度': '120km/h',
            '续航时间': '15分钟',
            '重量': '450g',
            '图传': '5.8GHz'
          }
        },
        {
          id: 'fpv-x4',
          name: 'X4 四轴穿越机',
          category: '入门型',
          badgeType: 'warning',
          description: '新手友好，稳定易操控',
          image: '/images/products/fpv/02.png',
          specs: {
            '最大速度': '100km/h',
            '续航时间': '12分钟',
            '重量': '320g',
            '图传': '5.8GHz'
          }
        }
      ],
      isLoading: false
    }
  },
  methods: {
    getBadgeClass(index) {
      const classes = ['badge-primary', 'badge-secondary', 'badge-success', 'badge-warning']
      return classes[index % classes.length]
    },
    goToDetail(droneId) {
      this.$router.push(`/products/details/fpv/${droneId}`)
    }
  }
}
</script>

<style scoped>
.product-page {
  min-height: 100vh;
  background: #f8f9fa;
}

.hero-section {
  position: relative;
  height: 700px;
  overflow: hidden;
}

.hero-background {
  height: 100%;
  background-image: url('/public/images/products/fpv/01.png');
  background-size: cover !important;
  background-position: center !important;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
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
  background: rgba(255, 255, 255, 0.2);
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.feature-item i {
  font-size: 1.2rem;
}

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

.section-line {
  border-bottom: 3px solid rgb(178, 0, 0);
  display: inline-block;
  padding-bottom: 0.25em;
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
  justify-items: center;
}

.product-card {
  width: 577px;
  height: 577px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  background: none;
  padding: 0;
  position: relative;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
}

.product-card:hover {
  box-shadow: 0 12px 40px rgba(60, 60, 60, 0.18);
  transform: translateY(-8px);
}

.card-bg {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2.5rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
}

.product-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  min-width: 80px;
  margin-bottom: 1.2rem;
  padding: 0.4em 1.2em;
  border-radius: 16px;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(178, 0, 0, 0.12);
  background: linear-gradient(90deg, rgb(178, 0, 0) 60%, #d34646 100%) !important;
  color: #fff !important;
  letter-spacing: 0.1em;
}

.badge-secondary {
  background: linear-gradient(90deg, #6c757d 60%, #524242 100%) !important;
}

.badge-success {
  background: linear-gradient(90deg, #28a745 60%, #6eaa80 100%) !important;
}

.badge-warning {
  background: linear-gradient(90deg, #ffc107 60%, #f1ee05 100%) !important;
  color: #b20000 !important;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
}

.btn.btn-detail {
  margin-top: 2rem;
  align-self: center;
  border: 2px solid rgb(178, 0, 0);
  background: #fff;
  color: rgb(178, 0, 0);
  border-radius: 24px;
  font-size: 1.08rem;
  font-weight: 600;
  padding: 0.6em 2.2em;
  transition: background 0.2s, color 0.2s;
}

.btn.btn-detail:hover {
  background: rgb(178, 0, 0);
  color: #fff;
}

@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    width: 100%;
    height: auto;
    min-height: 340px;
  }

  .card-content {
    padding: 1.2rem 1rem 1rem 1rem;
  }
}

@media (max-width: 600px) {
  .product-card {
    min-width: 0;
    width: 100%;
    height: auto;
    border-radius: 18px;
  }

  .card-content {
    padding: 0.8rem 0.5rem 0.8rem 0.5rem;
  }
}
</style>
