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
        <h2 class="text-center mb-5 position-relative">{{$t('home.products.title')}}<span class="section-line"></span></h2>
        <h2 class="text-center mb-5 position-relative">{{$t('home.products.desc')}}</h2>
        <div class="row g-4">
          <div class="col-md-6 mb-4" v-for="(product, index) in products" :key="`product-${index}`">
            <div class="card-item product-card">
              <div class="image-container">
                <img :src="product.image" :alt="product.title" class="img-fluid" loading="lazy">
              </div>
              <div class="overlay">
                <div class="content">
                  <h3 class="title">{{product.title}}</h3>
                  <a :href="product.link" class="btn btn-light rounded-pill px-4 mt-2">{{$t('common.more')}}</a>
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
        <h2 class="text-center mb-5 position-relative">{{$t('home.applications.title')}}<span class="section-line"></span></h2>
        <h2 class="text-center mb-5 position-relative">
          {{ $t('home.applications.desc') }}</h2>
        <div class="row g-4">
          <div class="col-md-4 mb-4" v-for="(solution, index) in solutions" :key="`solution-${index}`">
            <div class="card-item solution-card">
              <div class="image-container">
                <img :src="solution.image" :alt="solution.title" class="img-fluid" loading="lazy">
              </div>
              <div class="overlay">
                <div class="content">
                  <h3 class="title">{{solution.title}}</h3>
                  <a :href="solution.link" class="btn btn-light rounded-pill px-4 mt-2">{{$t('common.learnMore')}}</a>
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
          <h4 class="text-center text-white mb-5 position-relative">{{ serviceSupport.description }}</h4>
          <a :href="serviceSupport.link" class="btn btn-light rounded-pill px-5 py-2">{{serviceSupport.buttonText}}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: this.$t('meta.home.title'),
      meta: [
        { name: 'description', content: this.$t('meta.home.description') },
        { name: 'keywords', content: this.$t('meta.home.keywords') }
      ]
    }
  },
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
      ]
    }
  },
  computed: {
    products() {
      const locale = this.$i18n && this.$i18n.locale;
      return [
        { title: this.$t('home.products.f15'), image: '/images/home/product/product1.png', link: '/products/fpv', __locale: locale },
        { title: this.$t('home.products.multiRotor'), image: '/images/home/product/product2.png', link: '/products/multi-rotor', __locale: locale },
        { title: this.$t('home.products.fixedWing'), image: '/images/home/product/product3.png', link: '/products/fixed-wing', __locale: locale },
        { title: this.$t('home.products.helicopter'), image: '/images/home/product/product4.png', link: '/products/helicopter', __locale: locale }
      ]
    },
    solutions() {
      const locale = this.$i18n && this.$i18n.locale;
      return [
        { title: this.$t('home.applications.mapping'), image: '/images/home/scene/测绘.png', link: '/applications/mapping', __locale: locale },
        { title: this.$t('home.applications.inspection'), image: '/images/home/scene/水利.png', link: '/applications/inspection', __locale: locale },
        { title: this.$t('home.applications.delivery'), image: '/images/home/scene/应急.png', link: '/applications/delivery', __locale: locale },
        { title: this.$t('home.applications.aerial'), image: '/images/home/scene/交通.png', link: '/applications/aerial', __locale: locale },
        { title: this.$t('home.applications.spraying'), image: '/images/home/scene/环保.png', link: '/applications/spraying', __locale: locale },
        { title: this.$t('home.applications.agriculture'), image: '/images/home/scene/森林.png', link: '/applications/agriculture', __locale: locale },
        { title: this.$t('home.applications.firefighting'), image: '/images/home/scene/电力.png', link: '/applications/firefighting', __locale: locale },
        { title: this.$t('home.applications.farming'), image: '/images/home/scene/农业.png', link: '/applications/farming', __locale: locale },
        { title: this.$t('home.applications.integration'), image: '/images/home/scene/运载.png', link: '/applications/integration', __locale: locale }
      ]
    },
    serviceSupport() {
      const locale = this.$i18n && this.$i18n.locale;
      return {
        title: this.$t('home.serviceSupport.title'),
        description: this.$t('home.serviceSupport.description'),
        image: '/images/home/01首页-服务与支持-900X400.png',
        buttonText: this.$t('home.serviceSupport.buttonText'),
        link: '/support',
        __locale: locale
      }
    },
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
  background-color: rgb(178,0,0) !important;
}

/* 按钮统一样式 */
.btn,
.btn-light {
  color: rgb(178,0,0) !important;
  background: #fff !important;
  padding: 0.75rem 2.5rem !important;
  border: none !important;
  font-size: 1.15rem !important;
  box-shadow: none !important;
  font-weight: 500;
  transition: none !important;
}
.btn:hover,
.btn-light:hover {
  background: rgb(178,0,0) !important;
  color: #fff !important;
  border: none !important;
  box-shadow: none !important;
  transition: none !important;
}

/* 卡片宽高自适应图片，去除所有限制 */
.card-item,
.product-card,
.solution-card {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  max-height: none !important;
  box-shadow: none;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.image-container {
  width: 100%;
  position: relative;
}
.image-container img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* 移除媒体查询下的卡片高度限制 */
@media (max-width: 992px) {
  .product-card {
    height: auto !important;
  }
}
@media (max-width: 768px) {
  .product-card {
    height: auto !important;
  }
  .solution-card {
    height: auto !important;
  }
}
@media (max-width: 576px) {
  .product-card {
    height: auto !important;
  }
  .solution-card {
    height: auto !important;
  }
}

/* 通用卡片样式 */
.card-item {
  position: relative;
  width: 100%;
  /* 不要设置height */
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: none;
  transition: none;
}

.card-item:hover {
  /* 无hover阴影和移动效果 */
}

.image-container {
  width: 100%;
  /* height: auto; */
  position: relative; /* 不是absolute */
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card-item:hover .image-container img {
  /* 无hover缩放效果 */
}

.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%; height: 100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7));
  display: flex;
  align-items: flex-end;
  padding: 25px;
  pointer-events: none;
}
.overlay .content {
  width: 100%;
  text-align: center;
  pointer-events: auto;
}

.content {
  width: 100%;
  text-align: center;
}

.title {
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
  text-shadow: none;
}

.overlay .btn {
  color: rgb(178,0,0);
  background-color: #fff;
  border: none;
  transition: none;
}
.overlay .btn:hover {
  background-color: rgb(178,0,0);
  color: #fff;
  border: none;
  transition: none;
}

/* 产品卡片特定样式 */
.product-card {
  width: 580px !important;
  height: 580px !important;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: rgb(255,255,255);
  box-shadow: none;
  transition: none;
}

.product-card .title {
  font-size: 1.8rem;
}

/* 解决方案卡片特定样式 */
.solution-card {
  /* height: 320px; */
}

.solution-card .title {
  font-size: 1.5rem;
}

/* 轮播区域样式 */
.hero-section {
  position: relative;
  padding: 0;
  height: 700px;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

#heroCarousel, .carousel-inner, .carousel-item, .carousel-content {
  height: 700px;
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

.service-bg {
  height: 400px !important;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .product-card {
    height: 320px;
    width: 100%;
  }
}
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
