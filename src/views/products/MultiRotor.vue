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
                <span>{{ $t('products.multiRotorPage.heroBadge') }}</span>
              </div>
              <h1 class="hero-title">{{ $t('products.multiRotorPage.heroTitle') }}</h1>
              <p class="hero-subtitle">{{ $t('products.multiRotorPage.heroSubtitle') }}</p>
              <div class="hero-features">
                <div class="feature-item">
                  <i class="bi bi-shield-check"></i>
                  <span>{{ $t('products.multiRotorPage.features.professional') }}</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-bullseye"></i>
                  <span>{{ $t('products.multiRotorPage.features.precision') }}</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-gear-wide-connected"></i>
                  <span>{{ $t('products.multiRotorPage.features.stability') }}</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-shield-check"></i>
                  <span>{{ $t('products.multiRotorPage.features.reliable') }}</span>
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
          <h2 class="section-title section-line">{{ $t('products.multiRotorPage.sectionTitle') }}</h2>
          <p class="section-subtitle">{{ $t('products.multiRotorPage.sectionSubtitle') }}</p>
        </div>
        <div class="product-grid">
          <div class="product-card" v-for="(drone, index) in drones" :key="drone.id" @click="goToDetail(drone.id)">
            <div class="card-bg" :style="{backgroundImage: `url('${drone.image}')`, backgroundSize: 'cover'}">
              <div class="card-overlay"></div>
              <div class="card-content">
                <div class="product-badge" :class="getBadgeClass(index)">{{ $t('products.multiRotorDrones.' + drone.id + '.category') }}</div>
                <h3 class="product-name">{{ $t('products.multiRotorDrones.' + drone.id + '.name') }}</h3>
                <button class="btn btn-detail" @click.stop="goToDetail(drone.id)">{{ $t('products.multiRotorPage.buttonDetail') }}</button>
              </div>
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
  metaInfo() {
    return {
      title: this.$t('meta.multiRotor.title'),
      meta: [
        { name: 'description', content: this.$t('meta.multiRotor.description') },
        { name: 'keywords', content: this.$t('meta.multiRotor.keywords') }
      ]
    }
  },
  data() {
    return {
      drones: [
        {
          id: 'drone1',
          name: 'WW-1 六旋翼无人机',
          category: '六旋翼',
          badgeType: 'primary',
          image: '/images/products/multirotor/02.png',
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
          name: 'WW-2 六旋翼无人机',
          category: '六旋翼',
          badgeType: 'secondary',
          image: '/images/products/multirotor/02.png',
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
          badgeType: 'success',
          image: '/images/products/multirotor/02.png',
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
          badgeType: 'warning',
          image: '/images/products/multirotor/02.png',
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
.hero-section {
  position: relative;
  height: 700px;
  overflow: hidden;
}
.hero-background {
  height: 100%;
  background-image: url('/public/images/products/multirotor/01.png');
  background-size: cover !important;
  background-position: center !important;
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
  border-bottom: 3px solid rgb(178,0,0);
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
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  background: none;
  padding: 0;
  position: relative;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
}
.product-card:hover {
  box-shadow: 0 12px 40px rgba(60,60,60,0.18);
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
  box-shadow: 0 2px 8px rgba(178,0,0,0.12);
  background: linear-gradient(90deg, rgb(178,0,0) 60%, #d34646 100%) !important;
  color: #fff !important;
  letter-spacing: 0.1em;
}
.badge-secondary { background: linear-gradient(90deg, #6c757d 60%, #524242 100%) !important; }
.badge-success { background: linear-gradient(90deg, #28a745 60%, #6eaa80 100%) !important; }
.badge-warning { background: linear-gradient(90deg, #ffc107 60%, #f1ee05 100%) !important; color: #b20000 !important; }
.product-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
}
.btn.btn-detail, .product-card .btn {
  margin-top: 2rem;
  align-self: center;
  border: 2px solid rgb(178,0,0) !important;
  background: #fff !important;
  color: rgb(178,0,0) !important;
  border-radius: 24px;
  font-size: 1.08rem;
  font-weight: 600;
  padding: 0.6em 2.2em !important;
  transition: background 0.2s, color 0.2s;
}
.btn.btn-detail:hover, .product-card .btn:hover {
  background: rgb(178,0,0) !important;
  color: #fff !important;
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
