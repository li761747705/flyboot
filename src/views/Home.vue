<template>
  <div class="home-page-wrapper">
    <!-- 顶部轮播 -->
    <section class="hero-section">
      <div id="heroCarousel" class="carousel slide w-100" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button 
            v-for="(slide, index) in carouselSlides" 
            :key="'indicator-'+index"
            type="button" 
            data-bs-target="#heroCarousel" 
            :data-bs-slide-to="index" 
            :class="{ active: index === 0 }">
          </button>
        </div>
        <div class="carousel-inner">
          <div 
            v-for="(slide, index) in carouselSlides" 
            :key="'slide-'+index"
            class="carousel-item" 
            :class="{ active: index === 0 }">
            <div class="carousel-content" :style="`background-image: url('${slide.image}');`">
              <div class="position-relative z-2 w-100 px-5">
                <div class="row align-items-center justify-content-center">
                  <div class="col-12 col-md-10 py-4 py-md-5 text-center">
                    <h1 class="display-3 fw-bold mb-3 text-white">{{ $t(slide.titleKey) }}</h1>
                    <h2 class="h4 fw-normal text-white mb-4">{{ $t(slide.subtitleKey) }}</h2>
                    <router-link :to="slide.link" class="btn btn-light btn-lg px-md-5 py-md-2 px-4 py-2 rounded-pill shadow-sm">{{ $t(slide.buttonKey) }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">{{ $t('home.previous') }}</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">{{ $t('home.next') }}</span>
        </button>
      </div>
    </section>

    <!-- 产品系列展示 -->
    <section class="product-series py-5">
      <div class="container">
        <h2 class="text-center mb-5 position-relative">产品系列<span class="section-line"></span></h2>
        <h2 class="text-center mb-5 position-relative">穿越云层之巅，探索未曾触及的天际律动</h2>
        <div class="row g-4">
          <div class="col-md-6 mb-4" v-for="(product, index) in products" :key="`product-${index}`">
            <div class="card-item product-card">
              <div class="image-container">
                <img :src="product.image" :alt="product.title" class="img-fluid">
              </div>
              <div class="overlay">
                <div class="content">
                  <h3 class="title">{{product.title}}</h3>
                  <a :href="product.link" class="btn btn-light rounded-pill px-4 mt-2">更多</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 行业应用 -->
    <section class="solution-series py-5">
      <div class="container">
        <h2 class="text-center mb-5 position-relative">行业应用<span class="section-line"></span></h2>
        <h2 class="text-center mb-5 position-relative">无人机凭借着其高效便捷、灵活多变的特点，成为人们解决问题的一种新方式</h2>
        <div class="row g-4">
          <div class="col-md-4 mb-4" v-for="(solution, index) in solutions" :key="`solution-${index}`">
            <div class="card-item solution-card">
              <div class="image-container">
                <img :src="solution.image" :alt="solution.title" class="img-fluid">
              </div>
              <div class="overlay">
                <div class="content">
                  <h3 class="title">{{solution.title}}</h3>
                  <a :href="solution.link" class="btn btn-light rounded-pill px-4 mt-2">了解更多</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务与支持 -->
    <section class="service-support">
      <div class="service-bg" :style="serviceBgStyle">
        <div class="container d-flex flex-column align-items-center justify-content-center">
          <h2 class="text-center text-white mb-5 position-relative">{{serviceSupport.title}}</h2>
          <h4 class="text-center text-white mb-5 position-relative">由经验丰富的技术人员组成的快速响应团队，负责接收并分析客户热线转来的维修请求，制定初步解决方案</h4>
          <a :href="serviceSupport.link" class="btn btn-light rounded-pill px-5 py-2">{{serviceSupport.buttonText}}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      carouselSlides: [
        {
          image: '/images/home/RollingImage/RollingImage2.png',
          titleKey: 'home.carousel.rollingImage1.title',
          subtitleKey: 'home.carousel.rollingImage1.subtitle',
          buttonKey: 'home.carousel.rollingImage1.btn',
          link: '/products/fpv'
        },
        {
          image: '/images/home/RollingImage/RollingImage1.png',
          titleKey: 'home.carousel.rollingImage2.title',
          subtitleKey: 'home.carousel.rollingImage2.subtitle',
          buttonKey: 'home.carousel.rollingImage2.btn',
          link: '/products/multi-rotor'
        },
        {
          image: '/images/home/RollingImage/RollingImage4.png',
          titleKey: 'home.carousel.rollingImage3.title',
          subtitleKey: 'home.carousel.rollingImage3.subtitle',
          buttonKey: 'home.carousel.rollingImage3.btn',
          link: '/products/fixed-wing'
        },
        {
          image: '/images/home/RollingImage/RollingImage3.png',
          titleKey: 'home.carousel.rollingImage4.title',
          subtitleKey: 'home.carousel.rollingImage4.subtitle',
          buttonKey: 'home.carousel.rollingImage4.btn',
          link: '/products/helicopter'
        }
      ],
      products: [
        { title: '穿越无人机', image: '/images/home/product/product1.png', link: '/products/fpv' },
        { title: '多旋翼无人机', image: '/images/home/product/product2.png', link: '/products/multi-rotor' },
        { title: '固定翼无人机', image: '/images/home/product/product3.png', link: '/products/fixed-wing' },
        { title: '无人直升机', image: '/images/home/product/product4.png', link: '/products/helicopter' }
      ],
      solutions: [
        { title: '测绘', image: '/images/home/scene/测绘.png', link: '/applications/mapping' },
        { title: '水利', image: '/images/home/scene/水利.png', link: '/applications/inspection' },
        { title: '应急', image: '/images/home/scene/应急.png', link: '/applications/delivery' },
        { title: '交通', image: '/images/home/scene/交通.png', link: '/applications/aerial' },
        { title: '环保', image: '/images/home/scene/环保.png', link: '/applications/spraying' },
        { title: '森林勘察', image: '/images/home/scene/森林.png', link: '/applications/agriculture' },
        { title: '电力巡检', image: '/images/home/scene/电力.png', link: '/applications/firefighting' },
        { title: '农业应用', image: '/images/home/scene/农业.png', link: '/applications/farming' },
        { title: '运载应用', image: '/images/home/scene/运载.png', link: '/applications/powerline' }
      ],
      serviceSupport: {
        title: '服务与支持',
        image: '/images/home/01首页-服务与支持-900X400.png',
        buttonText: '了解更多',
        link: '/support'
      }
    }
  },
  computed: {
    serviceBgStyle() {
      return {
        backgroundImage: `url('${this.serviceSupport.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease'
      }
    }
  }
}
</script>

<style scoped>
.home-page-wrapper {
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.section-line {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 2px;
  background-color: rgb(255,0, 0);
}

/* 通用卡片样式 */
.card-item {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.image-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-item:hover .image-container img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end;
  padding: 25px;
}

.content {
  width: 100%;
  text-align: center;
}

.title {
  font-weight: 600;
  color: #fff;
  margin-bottom: 15px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.overlay .btn {
  transition: all 0.3s ease;
  font-weight: 500;
}

.overlay .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

/* 产品卡片特定样式 */
.product-card {
  height: 380px;
}

.product-card .title {
  font-size: 1.8rem;
}

/* 解决方案卡片特定样式 */
.solution-card {
  height: 320px;
}

.solution-card .title {
  font-size: 1.5rem;
}

/* 轮播区域样式 */
.hero-section {
  position: relative;
  padding: 0;
  height: 650px;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

#heroCarousel, .carousel-inner, .carousel-item, .carousel-content {
  height: 650px;
  width: 100%;
  max-width: 100%;
}

.carousel-content {
  position: relative;
  background-size: cover !important;
  background-position: center !important;
  display: flex;
  align-items: flex-end;
  padding-bottom: 80px;
}

.carousel-item {
  position: relative;
  z-index: 2;
}

.carousel-content h1, .carousel-content h2 {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
}

.carousel-content .btn {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel-indicators {
  z-index: 5;
  margin-bottom: 1rem;
}

.carousel-indicators [data-bs-target] {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  margin: 0 6px;
}

.carousel-indicators .active {
  background-color: #fff;
}

.carousel-control-prev, .carousel-control-next {
  width: 10%;
  z-index: 5;
}

.btn-light {
  color: #2D0A81;
  font-weight: 500;
}

.carousel-item h1 {
  font-size: 2.5rem;
}

@media (min-width: 768px) {
  .carousel-item h1 {
    font-size: 3.5rem;
  }
}

/* 服务支持区域样式 */
.service-support {
  margin: 3rem 0 0;
}

.service-bg h2 {
  font-size: 2.5rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px !important;
  transition: transform 0.3s ease;
}

.service-bg:hover h2 {
  transform: translateY(-5px);
}

.service-bg .btn {
  font-size: 1.1rem;
  font-weight: 500;
  padding: 10px 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.service-bg .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-section, #heroCarousel, .carousel-inner, .carousel-item, .carousel-content {
    height: 500px;
  }
  
  .carousel-content {
    padding-bottom: 60px;
  }
  
  .service-bg {
    height: 400px;
  }
  
  .service-bg h2 {
    font-size: 2rem;
  }
  
  .product-card {
    height: 320px;
  }
  
  .solution-card {
    height: 280px;
  }
  
  .product-card .title, .solution-card .title {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .hero-section, #heroCarousel, .carousel-inner, .carousel-item, .carousel-content {
    height: 450px;
  }
  
  .carousel-content {
    padding-bottom: 40px;
  }
  
  .product-card {
    height: 250px;
  }
  
  .solution-card {
    height: 220px;
  }
  
  .product-card .title, .solution-card .title {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  
  .overlay {
    padding: 15px;
  }
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}
</style> 