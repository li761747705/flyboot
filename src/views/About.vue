<template>
  <div class="about-page">
   

    <!-- 子路由内容区 -->
    <router-view v-if="$route.path !== '/about'" />
    


    <!-- 主关于我们展示区 (仅在没有子路由时显示) -->
    <div v-else>
       <!-- 页面标题区 -->
    <section class="page-header">
      <!-- 顶部 Banner -->
      <div class="banner">
        <img class="banner-bg" src="/images/about/通用图片1900X300.png" :alt="$t('aboutPage.heroTitle')" loading="lazy" />
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <h1>{{ $t('aboutPage.heroTitle') }}</h1>
          <p>{{ $t('aboutPage.heroSubtitle') }}</p>
        </div>
      </div>
    </section>
      <section class="about-main-section">
        <div class="container">
      
          <!-- 公司厂房大图及简介（用数组渲染） -->
          <div v-for="(item, idx) in factoryList" :key="idx" class="about-factory-section mb-5"  >
            <img class="about-factory-img" src="/images/about/通用图片1900X640.png" :alt="$t('aboutPage.heroTitle')" loading="lazy" />
            <div v-if="item.desc" class="about-factory-desc" v-html="item.desc"></div>
          </div>
          <!-- 公司介绍卡片 -->
          <div class="row mb-5">
            <div class="col-md-4 mb-4" v-for="card in aboutCards" :key="card.title">
              <div class="about-card">
                <div class="about-image">
                  <img :src="card.img" :alt="card.title" class="img-fluid" loading="lazy">
                  <div class="image-overlay">
                    <i :class="card.icon"></i>
                  </div>
                </div>
                <div class="about-content">
                  <h3>{{ card.title }}</h3>
                  <p>{{ card.desc }}</p>
                  <router-link :to="card.link" class="btn btn-primary">
                    <span>{{ card.btn }}</span>
                    <i class="bi bi-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- 技术实力展示 -->
          <div class="row mt-5">
            <div class="col-12">
              <div class="tech-stats-section">
                <div class="stats-header">
                  <h2>{{ $t('aboutPage.tech.title') }}</h2>
                  <p>{{ $t('aboutPage.tech.subtitle') }}</p>
                </div>
                <div class="stats-grid">
                  <div class="stat-item" v-for="stat in stats" :key="stat.label">
                    <div class="stat-number">{{ stat.number }}</div>
                    <div class="stat-label">{{ stat.label }}</div>
                    <div class="stat-icon">
                      <i :class="stat.icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  metaInfo() {
    return {
      title: this.$t('meta.about.title'),
      meta: [
        { name: 'description', content: this.$t('meta.about.description') },
        { name: 'keywords', content: this.$t('meta.about.keywords') }
      ]
    }
  },
  data() {
    return {}
  },
  computed: {
    factoryList() {
      const locale = this.$i18n && this.$i18n.locale;
      return [
        { desc: this.$t('aboutPage.factoryList.item1'), __locale: locale },
        { desc: this.$t('aboutPage.factoryList.item2'), __locale: locale },
        { desc: this.$t('aboutPage.factoryList.item3'), __locale: locale },
        { desc: this.$t('aboutPage.factoryList.item4'), __locale: locale }
      ]
    },
    aboutCards() {
      const locale = this.$i18n && this.$i18n.locale;
      return [
        {
          title: this.$t('aboutPage.cards.company.title'),
          desc: this.$t('aboutPage.cards.company.desc'),
          img: '/images/about/company.jpg',
          icon: 'bi bi-building',
          link: '/about/company',
          btn: this.$t('aboutPage.cards.company.btn'),
          __locale: locale
        },
        {
          title: this.$t('aboutPage.cards.contact.title'),
          desc: this.$t('aboutPage.cards.contact.desc'),
          img: '/images/about/contact.jpg',
          icon: 'bi bi-telephone',
          link: '/about/contact',
          btn: this.$t('aboutPage.cards.contact.btn'),
          __locale: locale
        },
        {
          title: this.$t('aboutPage.cards.jobs.title'),
          desc: this.$t('aboutPage.cards.jobs.desc'),
          img: '/images/about/jobs.jpg',
          icon: 'bi bi-people',
          link: '/about/jobs',
          btn: this.$t('aboutPage.cards.jobs.btn'),
          __locale: locale
        }
      ]
    },
    stats() {
      const locale = this.$i18n && this.$i18n.locale;
      return [
        { number: 51, label: this.$t('aboutPage.stats.labels.invention'), icon: 'bi bi-lightbulb', __locale: locale },
        { number: 64, label: this.$t('aboutPage.stats.labels.utility'), icon: 'bi bi-gear', __locale: locale },
        { number: 19, label: this.$t('aboutPage.stats.labels.design'), icon: 'bi bi-palette', __locale: locale },
        { number: 29, label: this.$t('aboutPage.stats.labels.softwareCopyright'), icon: 'bi bi-code-square', __locale: locale }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  background: #f8f9fa;
  min-height: 100vh;
}

/* 页面头部 */
.page-header {
  background: linear-gradient(135deg, rgb(178,0,0) 0%, rgb(220,0,0) 100%);
  position: relative;
  overflow: hidden;
}

.banner {
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.banner h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.banner p {
  font-size: 1.3rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* 主要内容区域 */
.about-main-section {
  padding: 4rem 0;
}

/* 关于卡片 */
.about-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.about-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.about-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-card:hover .about-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(178, 0, 0, 0.8), rgba(220, 0, 0, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about-card:hover .image-overlay {
  opacity: 1;
}

.image-overlay i {
  font-size: 3rem;
  color: white;
}

.about-content {
  padding: 2rem;
}

.about-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.about-content p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.about-content .btn {
  color: rgb(178,0,0);
  background: #fff;
  border: none;
  transition: none;
}
.about-content .btn:hover {
  background: rgb(178,0,0);
  color: #fff;
  box-shadow: none;
  transform: none;
}

.section-line {
  background: rgb(178,0,0) !important;
}

/* 技术实力区域 */
.tech-stats-section {
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.stats-header {
  text-align: center;
  margin-bottom: 3rem;
}

.stats-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.stats-header p {
  color: #6c757d;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  color: white;
}

.stat-item:hover .stat-number,
.stat-item:hover .stat-label {
  color: white;
}

.stat-item:hover .stat-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: rgb(178,0,0);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.stat-label {
  font-size: 1rem;
  color: #6c757d;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner h1 {
    font-size: 2.5rem;
  }
  
  .banner p {
    font-size: 1.1rem;
  }
  
  .about-main-section {
    padding: 2rem 0;
  }
  
  .tech-stats-section {
    padding: 2rem 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .banner {
    height: 300px;
  }
  
  .banner h1 {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .about-content {
    padding: 1.5rem;
  }
}

/* 新增样式 */
.about-factory-section {
  width: 100%;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-factory-img {
  width: 100%;
  max-width: 1900px;
  min-height: 320px;
  max-height: 640px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  margin-bottom: 2.2rem;
  display: block;
}
.about-factory-desc {
  font-size: 1.22rem;
  color: #222;
  text-align: center;
  line-height: 1.85;
  max-width: 1100px;
  margin: 0 auto 0 auto;
  padding: 0 18px;
}

.about-production-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-production-img {
  width: 100%;
  max-width: 1100px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  margin-bottom: 1.2rem;
  display: block;
}
.about-production-desc {
  font-size: 1.12rem;
  color: #222;
  text-align: center;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 1.5rem auto;
  padding: 0 16px;
}
.about-production-gallery {
  width: 100%;
  max-width: 1100px;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
.about-production-gallery-img {
  width: 49%;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  object-fit: cover;
  display: block;
}
</style>
