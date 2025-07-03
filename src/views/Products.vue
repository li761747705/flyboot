<template>
  <div class="products-page">
    <!-- 只在/products主页面显示主内容 -->
    <template v-if="$route.path === '/products'">
      <section v-for="(banner, idx) in allBanners" :key="banner.title" class="support-banner clickable-banner"
        :style="{ backgroundImage: `url('${banner.bgImg}')`, height: banner.height }" @click="goTo(banner.link)">
        <div class="support-banner-overlay">
          <h1 class="support-banner-title">{{ banner.title }}</h1>
          <p class="support-banner-subtitle">{{ banner.subtitle }}</p>
          <p class="support-banner-subtitle">{{ banner.subtitle2 }}</p>
        </div>
      </section>
      <div class="container mt-5">
        <h2 class="text-center mb-3 position-relative">无人机系统
          <span class="section-line"></span>
        </h2>
        <p class="text-center mb-5" style="font-size: 1.1rem; color: #333;">无人机依托先进的航空技术和电子技术，可通过遥控或自主控制自动地完成飞行任务，随着飞控技术的不断发展，无人机已成为现代航空领域的重要组成部分。</p>
        <div v-for="(group, idx) in droneGroups" :key="group.title" class="row align-items-center mb-5 flex-wrap drone-group-row">
          <template v-if="idx % 2 === 0">
            <!-- 左图右文 -->
            <div class="col-md-6 mb-3 mb-md-0">
              <div class="drone-group-imgbox">
                <template v-if="group.image">
                  <img :src="group.image" :alt="group.title" class="drone-group-img" />
                </template>
                <template v-else>
                  <span class="drone-group-imgtext">{{ group.imageText }}</span>
                </template>
              </div>
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
              <div class="mb-2 drone-group-title">{{ group.title }}</div>
              <div class="mb-3 drone-group-desc">{{ group.desc }}</div>
              <router-link :to="group.link" class="btn btn-outline-danger rounded-pill px-4 drone-group-btn">
                查看产品 <span class="drone-group-btn-arrow">&gt;</span>
              </router-link>
            </div>
          </template>
          <template v-else>
            <!-- 左文右图 -->
            <div class="col-md-6 order-md-2 mb-3 mb-md-0">
              <div class="drone-group-imgbox">
                <template v-if="group.image">
                  <img :src="group.image" :alt="group.title" class="drone-group-img" />
                </template>
                <template v-else>
                  <span class="drone-group-imgtext">{{ group.imageText }}</span>
                </template>
              </div>
            </div>
            <div class="col-md-6 order-md-1 d-flex flex-column justify-content-center align-items-center text-center">
              <div class="mb-2 drone-group-title">{{ group.title }}</div>
              <div class="mb-3 drone-group-desc">{{ group.desc }}</div>
              <router-link :to="group.link" class="btn btn-outline-danger rounded-pill px-4 drone-group-btn">
                查看产品 <span class="drone-group-btn-arrow">&gt;</span>
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </template>
    <!-- 子路由页面始终渲染 -->
    <router-view />
    <!-- 页面底部行业应用banner（Footer上方） -->
    <div class="industry-banner-block">
      <img src="/images/home/scene/电力.png" alt="行业应用" class="industry-banner-img" />
      <div class="industry-banner-content">
        <span class="industry-banner-title">行业应用</span>
        <button class="industry-banner-btn" @click="$router.push('/applications')">了解更多</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      activeCategory: 'all',
      searchTerm: '',
      allBanners: [
        {
          title: '产品系列',
          subtitle: '科技新飞跃，无人机让飞行无界限',
          bgImg: '/images/products/通用-1900X400.png',
          height: '700px',
          link: '/support'
        }
      ],
      drones: [
        {
          id: 'fpv-01',
          type: 'fpv',
          name: 'SpeedRacer Pro',
          description: '专业穿越竞速无人机，极致的飞行体验',
          image: '/images/products/产品系列：通用-577X577.png',
          specifications: {
            '最大起飞重量': '0.8kg',
            '续航时间': '20分钟',
            '最大飞行速度': '180km/h',
            '最大抗风等级': '5级'
          }
        },
        {
          id: 'fpv-02',
          type: 'fpv',
          name: 'FreeStyle X',
          description: '自由式特技飞行无人机，适合创意表演',
          image: '/images/products/drones/freestyle.jpg',
          specifications: {
            '最大起飞重量': '0.9kg',
            '续航时间': '18分钟',
            '最大飞行速度': '160km/h',
            '最大抗风等级': '5级'
          }
        },
        {
          id: 'mr-01',
          type: 'multiRotor',
          name: 'QuadX 800',
          description: '高精度多旋翼无人机，适合精细作业和复杂环境',
          image: '/images/home/product/product2.png',
          specifications: {
            '最大起飞重量': '8kg',
            '续航时间': '35分钟',
            '最大飞行高度': '4500m',
            '最大抗风等级': '7级'
          }
        },
        {
          id: 'mr-02',
          type: 'multiRotor',
          name: 'HexaCopter Pro',
          description: '六旋翼专业航拍无人机，稳定性极佳',
          image: '/images/products/drones/hexacopter.jpg',
          specifications: {
            '最大起飞重量': '10kg',
            '续航时间': '40分钟',
            '最大飞行高度': '5000m',
            '最大抗风等级': '7级'
          }
        }
      ],
      dronesFpx: [
        {
          id: 'fpv-01',
          type: 'fpv',
          name: 'SpeedRacer Pro',
          description: '专业穿越竞速无人机，极致的飞行体验',
          image: '/images/products/产品系列：多轴577X577.png',
          specifications: {
            '最大起飞重量': '0.8kg',
            '续航时间': '20分钟',
            '最大飞行速度': '180km/h',
            '最大抗风等级': '5级'
          }
        },
        {
          id: 'fpv-02',
          type: 'fpv',
          name: 'FreeStyle X',
          description: '自由式特技飞行无人机，适合创意表演',
          image: '/images/products/drones/freestyle.jpg',
          specifications: {
            '最大起飞重量': '0.9kg',
            '续航时间': '18分钟',
            '最大飞行速度': '160km/h',
            '最大抗风等级': '5级'
          }
        },
        {
          id: 'mr-01',
          type: 'multiRotor',
          name: 'QuadX 800',
          description: '高精度多旋翼无人机，适合精细作业和复杂环境',
          image: '/images/home/product/product2.png',
          specifications: {
            '最大起飞重量': '8kg',
            '续航时间': '35分钟',
            '最大飞行高度': '4500m',
            '最大抗风等级': '7级'
          }
        },
        {
          id: 'mr-02',
          type: 'multiRotor',
          name: 'HexaCopter Pro',
          description: '六旋翼专业航拍无人机，稳定性极佳',
          image: '/images/products/drones/hexacopter.jpg',
          specifications: {
            '最大起飞重量': '10kg',
            '续航时间': '40分钟',
            '最大飞行高度': '5000m',
            '最大抗风等级': '7级'
          }
        }
      ],
      droneGroups: [
        {
          title: '穿越无人机',
          imageText: '穿越无人机图片',
          desc: '穿越无人机作为高性能特技无人机，凭借高效的动力设计和灵活、轻盈的机身，操控体验更为极致和富有价值',
          link: '/products/fpv'
        },
        {
          title: '多旋翼无人机',
          imageText: '多旋翼无人机图片',
          desc: '多旋翼无人机拥有一体结构与多旋翼动力系统，具有优异的悬停能力和较强的抗风能力，适合复杂环境作业，适用领域广泛',
          link: '/products/multi-rotor'
        },
        {
          title: '固定翼无人机',
          imageText: '固定翼无人机',
          desc: '固定翼无人机凭借高效续航、高速性能、大载荷能力和成熟的产业解决方案，适合巡检、测绘、遥感、警用等领域拥有不可替代的价值',
          link: '/products/fixed-wing'
        },
        {
          title: '无人直升机',
          imageText: '无人直升机',
          desc: '无人直升机拥有一体式自控和自主规划航线行驶的优越飞行体验，具有垂直起降和悬停的能力，适合大载重及复杂环境作业，常见于农林植保和警用等领域',
          link: '/products/helicopter'
        }
      ]
    }
  },
  methods: {
    setCategory(category) {
      this.activeCategory = category;
    },
    getFpvDrones() {
      return this.drones.filter(drone => drone.type === 'fpv');
    },
    getMultiRotorDrones() {
      return this.drones.filter(drone => drone.type === 'multiRotor');
    },
    getFixedWingDrones() {
      return this.drones.filter(drone => drone.type === 'fixedWing');
    },
    getHelicopterDrones() {
      return this.drones.filter(drone => drone.type === 'helicopter');
    },
    getMainSpecs(drone) {
      return Object.entries(drone.specifications).slice(0, 3);
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.9), rgba(45, 10, 129, 0.9)), url('../assets/images/products-header.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0 120px;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.header-stats {
  margin-top: 30px;
}

.stat-item {
  text-align: center;
  margin: 0 20px;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  min-width: 100px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.header-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

@media (min-width: 768px) {
  .page-header {
    padding: 120px 0 150px;
  }

  .page-header h1 {
    font-size: 3.5rem;
  }
}

/* 产品导航 */
.product-nav-container {
  position: relative;
  margin-bottom: 30px;
}

.product-nav {
  border-radius: 50px;
  overflow: hidden;
  background-color: #f8f9fa;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.product-nav .nav-link {
  padding: 15px 20px;
  font-weight: 500;
  color: #555;
  transition: all 0.3s ease;
  border-radius: 0;
}

.product-nav .nav-link:hover {
  background-color: #e9ecef;
  transform: translateY(-3px);
}

.product-nav .nav-link.active {
  background: linear-gradient(135deg, #0d6efd, #0a58ca);
  color: white;
  box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
}

.product-nav .nav-link i {
  font-size: 1.2rem;
}

.search-filter {
  margin-top: 20px;
}

.search-filter .input-group {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  overflow: hidden;
}

.search-filter .form-control {
  border: none;
  padding: 12px 20px;
}

.search-filter .btn {
  padding-left: 20px;
  padding-right: 20px;
}

.section-title {
  position: relative;
  padding-bottom: 15px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #0d6efd, #0a58ca);
  border-radius: 3px;
}

.section-description {
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 800px;
}

/* 产品卡片 */
.product-card {
  height: 380px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  margin-bottom: 30px;
  cursor: pointer;
}

.product-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
}

.product-image-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.product-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.product-card:hover .product-image-container img {
  transform: scale(1.1);
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(115, 115, 115, 0.9) 20%, rgba(123, 123, 123, 0.2) 80%, rgba(0, 0, 0, 0));
  display: flex;
  align-items: flex-end;
  padding: 25px;
  transition: all 0.3s ease;
}

.product-card:hover .product-overlay {
  background: linear-gradient(to top, rgba(210, 208, 208, 0.95) 30%, rgba(166, 165, 165, 0.5) 80%, rgba(0, 0, 0, 0.2));
}

.product-content {
  width: 100%;
  text-align: center;
  transform: translateY(20px);
  opacity: 0.8;
  transition: all 0.4s ease;
}

.product-card:hover .product-content {
  transform: translateY(0);
  opacity: 1;
}

.product-badge {
  display: inline-block;
  padding: 5px 15px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  border-radius: 20px;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.product-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.product-brief {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-actions {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.product-actions .btn-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.product-actions .btn-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #fff;
}

.product-tags {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  text-align: right;
}

.product-tag {
  display: block;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 0.75rem;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* 特点卡片 */
.features-card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.features-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-header {
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 15px;
}

.features-card h4 {
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
}

.feature-subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 0;
  padding-left: 30px;
}

.feature-list {
  list-style: none;
  padding-left: 0;
}

.feature-list li {
  padding: 12px 0;
  font-size: 1.1rem;
  color: #444;
  font-weight: 500;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.feature-list li i {
  font-size: 1.2rem;
  margin-right: 10px;
}
/* 通用样式 */
.section-line {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 2px;
  background-color: rgb(255,0, 0);
}

.feature-desc {
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;
  padding-left: 28px;
  font-weight: normal;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .product-card {
    height: 350px;
  }

  .product-title {
    font-size: 1.4rem;
  }

  .product-brief {
    font-size: 0.95rem;
  }

  .feature-list li {
    font-size: 1rem;
  }

  .feature-desc {
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .product-nav .nav-link {
    padding: 12px 15px;
    font-size: 0.9rem;
  }

  .product-nav .nav-link i {
    font-size: 1rem;
  }

  .product-card {
    height: 320px;
  }

  .section-description {
    font-size: 1rem;
  }

  .feature-subtitle {
    padding-left: 0;
  }
}

@media (max-width: 576px) {
  .stat-item {
    margin: 0 10px;
    min-width: 80px;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .product-card {
    height: 280px;
  }

  .product-title {
    font-size: 1.3rem;
    margin-bottom: 5px;
  }

  .product-brief {
    font-size: 0.9rem;
    margin-bottom: 10px;
    -webkit-line-clamp: 1;
  }

  .product-overlay {
    padding: 15px;
  }

  .product-tag {
    font-size: 0.7rem;
  }
}

/* 动画效果 */
.animate__animated {
  animation-duration: 1s;
}

.animate__delay-1s {
  animation-delay: 0.2s;
}

.animate__delay-2s {
  animation-delay: 0.4s;
}

.animate__delay-3s {
  animation-delay: 0.6s;
}

.products-main-content {
  padding-bottom: 0;
}

.industry-banner-block {
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;
}

.industry-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.industry-banner-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: rgba(0, 0, 0, 0.18);
}

.industry-banner-title {
  font-size: 2.2rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.industry-banner-btn {
  padding: 12px 36px;
  font-size: 1.1rem;
  border-radius: 24px;
  border: none;
  background: linear-gradient(135deg, #919090, #d5dde3);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(214, 221, 225, 0.12);
  transition: all 0.2s;
  margin: 0 auto;
  display: block;
}

.industry-banner-btn:hover {
  background: linear-gradient(135deg, #2980b9, #3498db);
  transform: translateY(-2px) scale(1.04);
}

@media (max-width: 900px) {
  .industry-banner-block {
    height: 160px;
  }

  .industry-banner-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .industry-banner-btn {
    font-size: 1rem;
    padding: 8px 20px;
  }

  .industry-banner-content {
    right: 4vw;
    bottom: 18px;
  }
}

@media (max-width: 600px) {
  .industry-banner-block {
    height: 110px;
  }

  .industry-banner-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .industry-banner-btn {
    font-size: 0.9rem;
    padding: 6px 14px;
  }

  .industry-banner-content {
    right: 2vw;
    bottom: 10px;
  }
}

.support-banner {
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  border-top: 2px solid #e0e0e0;
  border-bottom: 2px solid #e0e0e0;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  overflow: hidden;
}

.support-banner:last-of-type {
  margin-bottom: 0;
}

.support-banner-overlay {
  width: 100%;
  text-align: center;
  /* background: rgba(236, 234, 234, 0.25); */
  padding: 60px 0 40px 0;
}

.support-banner-title {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 1rem;
}

.support-banner-subtitle {
  color: #fff;
  font-size: 1.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0;
}

.clickable-banner {
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.clickable-banner:hover {
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.10);
}

.drone-group-row {
  min-height: 320px;
  margin-bottom: 3.5rem !important;
}
.drone-group-imgbox {
  height: 280px;
  font-size: 2rem;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.drone-group-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  background: #f7f7f7;
  display: block;
  margin: 0 auto;
}
.drone-group-imgtext {
  font-size: 1.5rem;
  color: #222;
  opacity: 0.7;
}
.drone-group-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}
.drone-group-desc {
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 2rem !important;
  max-width: 420px;
}
.drone-group-btn {
  font-size: 1.15rem;
  padding: 0.75rem 2.5rem;
  margin-bottom: 1.2rem;
}
@media (max-width: 992px) {
  .drone-group-row {
    min-height: 220px;
  }
  .drone-group-imgbox {
    height: 160px;
    font-size: 1.2rem;
  }
  .drone-group-title {
    font-size: 1.3rem;
  }
  .drone-group-desc {
    font-size: 1rem;
    max-width: 90vw;
  }
  .drone-group-btn {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
}
@media (max-width: 576px) {
  .drone-group-row {
    min-height: 120px;
  }
  .drone-group-imgbox {
    height: 80px;
    font-size: 1rem;
  }
  .drone-group-title {
    font-size: 1.1rem;
  }
  .drone-group-desc {
    font-size: 0.95rem;
  }
  .drone-group-btn {
    font-size: 0.95rem;
    padding: 0.4rem 1rem;
  }
}
.drone-group-btn-arrow {
  display: inline-block;
  margin-left: 0.5em;
  font-size: 1.2em;
  vertical-align: middle;
  transition: transform 0.2s;
}
.drone-group-btn:hover .drone-group-btn-arrow {
  transform: translateX(4px);
}
</style>